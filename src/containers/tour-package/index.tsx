import TourPackageHeroSection from "@components/tour-package/section/hero_section/tour_package_hero_section";
import TourPackageSidebarSection from "@components/tour-package/section/sidebar_section/tour_package_sidebar_section";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGetTourPackageQuery } from '@redux/services/tour_package/api';

const TourPackage: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [sortBy, setSortBy] = useState('created_at');
    const [sortOrder, setSortOrder] = useState('desc');
    const [filters, setFilters] = useState({
        min_price: 0,
        max_price: 1000,
        package_types: [] as string[],
        duration_types: [] as string[],
        rating: null as number | null
    });

    // Handle sort change
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        switch(value) {
            case 'price_low_to_high':
                setSortBy('per_person_cost');
                setSortOrder('asc');
                break;
            case 'price_high_to_low':
                setSortBy('per_person_cost');
                setSortOrder('desc');
                break;
            case 'newest':
                setSortBy('created_at');
                setSortOrder('desc');
                break;
            case 'rating':
                setSortBy('rating');
                setSortOrder('desc');
                break;
            case 'popular':
            default:
                setSortBy('created_at');
                setSortOrder('desc');
                break;
        }
    };

    // API call with sort parameters
    const { data: tourPackagesResponse, isLoading, error, refetch } = useGetTourPackageQuery({
        min_price: filters.min_price,
        max_price: filters.max_price,
        package_types: filters.package_types?.length > 0 ? filters.package_types : undefined,
        duration_type: filters.duration_types?.length > 0 ? filters.duration_types : undefined,
        sort_by: sortBy,
        sort_order: sortOrder,
        per_page: 12
    });

    // Apply filters
    const handleFilterChange = (newFilters: any) => {
        setFilters({
            min_price: newFilters.min_price,
            max_price: newFilters.max_price,
            package_types: newFilters.package_types || [],
            duration_types: newFilters.duration_type || [],
            rating: newFilters.rating
        });
        setPriceRange({ min: newFilters.min_price, max: newFilters.max_price });
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Get packages from API data
    const packages = tourPackagesResponse?.data?.data || [];
    const stats = tourPackagesResponse?.stats;
    const pagination = tourPackagesResponse?.data;

    // Professional loading skeleton
    if (!isMounted || isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
                <TourPackageHeroSection />
                <section className="relative md:py-24 py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                            {/* Sidebar Skeleton */}
                            <div className="lg:col-span-4 md:col-span-5">
                                <div className="p-4 rounded-md shadow-sm bg-white dark:bg-slate-900 sticky top-20 animate-pulse">
                                    <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
                                    <div className="space-y-3">
                                        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Cards Skeleton */}
                            <div className="lg:col-span-8 md:col-span-7">
                                <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-md shadow-sm animate-pulse">
                                    <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-1/2 mb-2"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div>
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden animate-pulse">
                                            <div className="h-56 bg-gray-200 dark:bg-slate-700"></div>
                                            <div className="p-5 space-y-3">
                                                <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded w-1/4"></div>
                                                <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
                                                <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div>
                                                <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-2/3"></div>
                                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                                    <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Professional error state
    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
                <TourPackageHeroSection />
                <section className="relative md:py-24 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="mb-6">
                                <svg className="w-24 h-24 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops! Something went wrong</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Unable to load tour packages. Please try again later.</p>
                            <button 
                                onClick={() => refetch()}
                                className="px-6 py-3 bg-custom-red hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Professional empty state with helpful message
    if (!packages.length) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
                <TourPackageHeroSection />
                <section className="relative md:py-24 py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                            {/* Sidebar */}
                            <TourPackageSidebarSection 
                                priceRange={priceRange} 
                                setPriceRange={setPriceRange}
                                stats={stats}
                                onFilterChange={handleFilterChange}
                            />

                            {/* Empty State Content */}
                            <div className="lg:col-span-8 md:col-span-7">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
                                    <div className="p-12 text-center">
                                        <div className="mb-6">
                                            <svg className="w-32 h-32 mx-auto text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No Tours Found</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                                            We couldn't find any tour packages matching your criteria. Try adjusting your filters or explore our other options.
                                        </p>
                                        <button 
                                            onClick={() => {
                                                setPriceRange({ min: stats?.min_price || 0, max: stats?.max_price || 1000 });
                                                setFilters({
                                                    min_price: stats?.min_price || 0,
                                                    max_price: stats?.max_price || 1000,
                                                    package_types: [],
                                                    duration_types: [],
                                                    rating: null
                                                });
                                            }}
                                            className="px-6 py-3 bg-custom-red hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                                        >
                                            Reset All Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Main content with packages
    return (
        <div className="font-sans bg-gray-50 dark:bg-slate-900">
            {/* Hero Section */}
            <TourPackageHeroSection />

            {/* Tour Packages Section */}
            <section className="relative md:py-24 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                        {/* Sidebar Filters */}
                        <TourPackageSidebarSection 
                            priceRange={priceRange} 
                            setPriceRange={setPriceRange}
                            stats={stats}
                            onFilterChange={handleFilterChange}
                        />

                        {/* Tour Packages Grid */}
                        <div className="lg:col-span-8 md:col-span-7">
                            {/* Results Count */}
                            <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                            {pagination?.total || 0} Tour Package{pagination?.total !== 1 ? 's' : ''} Found
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            Showing {pagination?.from || 0} - {pagination?.to || 0} of {pagination?.total || 0} results
                                        </p>
                                        {filters.package_types?.length > 0 || filters.duration_types?.length > 0 ? (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {filters.package_types.map(type => (
                                                    <span key={type} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-custom-red/10 text-custom-red">
                                                        {type}
                                                        <button 
                                                            onClick={() => {
                                                                const newTypes = filters.package_types.filter(t => t !== type);
                                                                handleFilterChange({ ...filters, package_types: newTypes });
                                                            }}
                                                            className="ml-1 hover:text-red-600"
                                                        >
                                                            ×
                                                        </button>
                                                    </span>
                                                ))}
                                                {filters.duration_types.map(type => (
                                                    <span key={type} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-custom-red/10 text-custom-red">
                                                        {type === 'day' ? 'Day(s)' : type === 'week' ? 'Week(s)' : 'Month(s)'}
                                                        <button 
                                                            onClick={() => {
                                                                const newTypes = filters.duration_types.filter(t => t !== type);
                                                                handleFilterChange({ ...filters, duration_types: newTypes });
                                                            }}
                                                            className="ml-1 hover:text-red-600"
                                                        >
                                                            ×
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="mt-3 md:mt-0">
                                        <select 
                                            onChange={handleSortChange} 
                                            value={sortBy === 'per_person_cost' && sortOrder === 'asc' ? 'price_low_to_high' : 
                                                    sortBy === 'per_person_cost' && sortOrder === 'desc' ? 'price_high_to_low' :
                                                    sortBy === 'created_at' && sortOrder === 'desc' ? 'newest' :
                                                    sortBy === 'rating' ? 'rating' : 'popular'}
                                            className="w-full md:w-auto px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-custom-red focus:ring-2 focus:ring-custom-red/20"
                                        >
                                            <option value="price_low_to_high">Sort by: Price Low to High</option>
                                            <option value="price_high_to_low">Sort by: Price High to Low</option>
                                            {/* <option value="rating">Sort by: Rating</option> */}
                                            <option value="newest">Sort by: Newest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Tour Cards Grid */}
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                {packages.map((tour) => (
                                    <div key={tour.id} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <div className="relative overflow-hidden h-56">
                                            <img
                                                src={tour.featured_image || '/assets/images/placeholder.jpg'}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                alt={tour.title}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.src = 'https://via.placeholder.com/800x400?text=No+Image';
                                                }}
                                            />
                                            {tour.discount && (
                                                <div className="absolute top-4 left-4 z-10">
                                                    <span className="bg-custom-red text-white text-xs px-3 py-1.5 font-semibold rounded-full shadow-lg">
                                                        {tour.discount}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="absolute bottom-4 left-4 z-10">
                                                <div className="flex items-center text-white bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                                                    <svg className="w-4 h-4 text-custom-red mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-xs font-medium">{tour.duration_text || '3 Days'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
                                                <svg className="w-4 h-4 text-custom-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {tour.package_type || 'Tour'}
                                            </div>
                                            
                                            <Link href={`/tour-details/${tour.id}`}>
                                                <span className="text-xl font-bold text-slate-900 dark:text-white hover:text-custom-red transition-colors mb-3 line-clamp-1 cursor-pointer block">
                                                    {tour.title}
                                                </span>
                                            </Link>

                                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                                                {tour.short_description ? tour.short_description.replace(/<[^>]*>/g, '').substring(0, 120) : 'No description available'}...
                                            </p>

                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(tour.rating || 5) ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                    <span className="text-xs text-slate-500 ml-1">({tour.review_count || 0})</span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-custom-red">
                                                        {tour.formatted_price ? tour.formatted_price.split(' - ')[0] : 'Contact'}
                                                    </span>
                                                    <span className="text-xs text-slate-500 ml-1">/ person</span>
                                                </div>
                                            </div>
                                            
                                            <Link href={`/tour-details/${tour.id}`}>
                                                <span className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-custom-red hover:bg-red-600 text-white font-medium rounded-lg transition-colors cursor-pointer">
                                                    View Details
                                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourPackage;