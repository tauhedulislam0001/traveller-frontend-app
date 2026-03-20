import React, { useState, useEffect } from "react";

interface TourPackageSidebarSectionProps {
  priceRange: { min: number; max: number };
  setPriceRange: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
  stats?: {
    min_price: number;
    max_price: number;
    package_types: string[];
    duration_types: string[];
    total_packages: number;
  };
  onFilterChange?: (filters: any) => void;
}

function TourPackageSidebarSection({ 
  priceRange, 
  setPriceRange, 
  stats, 
  onFilterChange 
}: TourPackageSidebarSectionProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedPackageTypes, setSelectedPackageTypes] = useState<string[]>([]);
    const [selectedDurationTypes, setSelectedDurationTypes] = useState<string[]>([]);
    const [localMinPrice, setLocalMinPrice] = useState(priceRange.min);
    const [localMaxPrice, setLocalMaxPrice] = useState(priceRange.max);

    // Get dynamic price range from API stats
    const minPrice = stats?.min_price || 0;
    const maxPrice = stats?.max_price || 1000;
    const packageTypes = stats?.package_types || [];
    const durationTypes = stats?.duration_types || [];

    // Update local state when priceRange changes from parent
    useEffect(() => {
        setLocalMinPrice(priceRange.min);
        setLocalMaxPrice(priceRange.max);
    }, [priceRange]);

    // Auto-apply filters when any filter changes
    useEffect(() => {
        if (isMounted && onFilterChange) {
            const filtersToApply = {
                min_price: localMinPrice,
                max_price: localMaxPrice,
                package_types: selectedPackageTypes,
                duration_type: selectedDurationTypes,
            };
            console.log('Applying filters:', filtersToApply);
            onFilterChange(filtersToApply);
        }
    }, [localMinPrice, localMaxPrice, selectedPackageTypes, selectedDurationTypes, isMounted]);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? 0 : parseInt(e.target.value);
        setLocalMinPrice(value);
        setPriceRange({ min: value, max: localMaxPrice });
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? 0 : parseInt(e.target.value);
        setLocalMaxPrice(value);
        setPriceRange({ min: localMinPrice, max: value });
    };

    const handlePackageTypeChange = (type: string) => {
        setSelectedPackageTypes(prev => {
            if (prev.includes(type)) {
                return prev.filter(t => t !== type);
            } else {
                return [...prev, type];
            }
        });
    };

    const handleDurationTypeChange = (type: string) => {
        setSelectedDurationTypes(prev => {
            if (prev.includes(type)) {
                return prev.filter(t => t !== type);
            } else {
                return [...prev, type];
            }
        });
    };

    const handleResetFilters = () => {
        setLocalMinPrice(0);
        setLocalMaxPrice(1000);
        setPriceRange({ min: 0, max: 1000 });
        setSelectedPackageTypes([]);
        setSelectedDurationTypes([]);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="lg:col-span-4 md:col-span-5">
                <div className="p-4 rounded-md shadow-sm dark:shadow-gray-700 sticky top-20 bg-white dark:bg-slate-900 animate-pulse">
                    <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
                    <div className="space-y-4">
                        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
                        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
                        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="lg:col-span-4 md:col-span-5">
            <div className="p-5 rounded-xl shadow-lg dark:shadow-gray-700 sticky top-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                
                {/* Price Filter - Simple Input Fields */}
                <div>
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Price Range
                    </h5>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Min ($)</label>
                            <input 
                                type="number" 
                                value={localMinPrice}
                                onChange={handleMinPriceChange}
                                className="w-full px-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-custom-red focus:ring-2 focus:ring-custom-red/20 transition-all"
                                placeholder="Min"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Max ($)</label>
                            <input 
                                type="number" 
                                value={localMaxPrice}
                                onChange={handleMaxPriceChange}
                                className="w-full px-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-custom-red focus:ring-2 focus:ring-custom-red/20 transition-all"
                                placeholder="Max"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>Available: ${minPrice} - ${maxPrice}</span>
                    </div>
                </div>

                {/* Package Type Filter */}
                {packageTypes.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>
                            Package Type
                        </h5>
                        <div className="space-y-2.5">
                            {packageTypes.map((type) => (
                                <label key={type} className="flex items-center cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedPackageTypes.includes(type)}
                                        onChange={() => handlePackageTypeChange(type)}
                                        className="w-4 h-4 text-custom-red bg-gray-100 border-gray-300 rounded focus:ring-custom-red focus:ring-2"
                                    />
                                    <span className="ml-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-custom-red transition-colors">
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* Duration Type Filter */}
                {durationTypes.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Duration
                        </h5>
                        <div className="space-y-2.5">
                            {durationTypes.map((type) => (
                                <label key={type} className="flex items-center cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedDurationTypes.includes(type)}
                                        onChange={() => handleDurationTypeChange(type)}
                                        className="w-4 h-4 text-custom-red bg-gray-100 border-gray-300 rounded focus:ring-custom-red focus:ring-2"
                                    />
                                    <span className="ml-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-custom-red transition-colors">
                                        {type === 'day' ? 'Day(s)' : type === 'week' ? 'Week(s)' : 'Month(s)'}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* Reset Filters Button */}
                <div className="mt-8">
                    <button 
                        onClick={handleResetFilters}
                        className="w-full py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourPackageSidebarSection;