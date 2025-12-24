import React, { useState, useEffect, useRef } from "react";

// Define the props interface
interface TourPackageSidebarSectionProps {
  priceRange: { min: number; max: number };
  setPriceRange: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
}

function TourPackageSidebarSection({ priceRange, setPriceRange }: TourPackageSidebarSectionProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const [isMinDragging, setIsMinDragging] = useState(false);
    const [isMaxDragging, setIsMaxDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
        const value = parseInt(e.target.value) || 0;
        if (type === 'min') {
        const min = Math.min(value, priceRange.max);
        setPriceRange(prev => ({ ...prev, min }));
        } else {
        const max = Math.max(value, priceRange.min);
        setPriceRange(prev => ({ ...prev, max }));
        }
    };

    const handleSliderMouseDown = (type: 'min' | 'max') => {
        if (type === 'min') setIsMinDragging(true);
        else setIsMaxDragging(true);
        
        const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const percentage = Math.min(Math.max(x / containerRect.width, 0), 1);
        const value = Math.round(percentage * 200);
        
        if (type === 'min' && isMinDragging) {
            const min = Math.min(value, priceRange.max);
            setPriceRange(prev => ({ ...prev, min }));
        } else if (type === 'max' && isMaxDragging) {
            const max = Math.max(value, priceRange.min);
            setPriceRange(prev => ({ ...prev, max }));
        }
        };

        const handleMouseUp = () => {
        setIsMinDragging(false);
        setIsMaxDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const percentage = Math.min(Math.max(x / containerRect.width, 0), 1);
        const value = Math.round(percentage * 200);
        
        const minDistance = Math.abs(value - priceRange.min);
        const maxDistance = Math.abs(value - priceRange.max);
        
        if (minDistance < maxDistance) {
        const min = Math.min(value, priceRange.max);
        setPriceRange(prev => ({ ...prev, min }));
        } else {
        const max = Math.max(value, priceRange.min);
        setPriceRange(prev => ({ ...prev, max }));
        }
    };

    // Add reset filters functionality
    const handleResetFilters = () => {
        setPriceRange({ min: 50, max: 120 });
        // You might want to reset other filters here too
        // Reset checkboxes if needed
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            (checkbox as HTMLInputElement).checked = false;
        });
    };

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Tour Packages...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="lg:col-span-4 md:col-span-5">
            <div className="p-4 rounded-md shadow-sm dark:shadow-gray-700 sticky top-20 bg-white dark:bg-slate-900">
            {/* Price Filter - Improved Design */}
            <div>
                <h5 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Price Filter</h5>
                <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-slate-600 dark:text-slate-400">Price Range:</div>
                    <div className="text-sm font-medium text-custom-red">
                    ${priceRange.min} - ${priceRange.max}
                    </div>
                </div>
                
                <div className="relative h-12 mb-2" ref={containerRef} onClick={handleSliderClick}>
                    {/* Background track */}
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-200 dark:bg-slate-700 rounded-full -translate-y-1/2"></div>
                    
                    {/* Selected range */}
                    <div 
                    className="absolute top-1/2 h-2 bg-custom-red rounded-full -translate-y-1/2"
                    style={{ 
                        left: `${(priceRange.min / 200) * 100}%`, 
                        width: `${((priceRange.max - priceRange.min) / 200) * 100}%` 
                    }}
                    ></div>
                    
                    {/* Min slider thumb */}
                    <div 
                    className="absolute top-1/2 w-5 h-5 bg-white border-2 border-custom-red rounded-full shadow-lg cursor-pointer -translate-y-1/2 -translate-x-1/2 hover:scale-110 active:scale-110 transition-transform"
                    style={{ left: `${(priceRange.min / 200) * 100}%` }}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        handleSliderMouseDown('min');
                    }}
                    >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-custom-red text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        ${priceRange.min}
                    </div>
                    </div>
                    
                    {/* Max slider thumb */}
                    <div 
                    className="absolute top-1/2 w-5 h-5 bg-white border-2 border-custom-red rounded-full shadow-lg cursor-pointer -translate-y-1/2 -translate-x-1/2 hover:scale-110 active:scale-110 transition-transform"
                    style={{ left: `${(priceRange.max / 200) * 100}%` }}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        handleSliderMouseDown('max');
                    }}
                    >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-custom-red text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        ${priceRange.max}
                    </div>
                    </div>
                </div>
                
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>$0</span>
                    <span>$200</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Min Price ($)</label>
                    <input 
                        type="number" 
                        min="0"
                        max="200"
                        value={priceRange.min}
                        onChange={(e) => handlePriceInputChange(e, 'min')}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-custom-red focus:ring-1 focus:ring-custom-red"
                    />
                    </div>
                    <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Max Price ($)</label>
                    <input 
                        type="number" 
                        min="0"
                        max="200"
                        value={priceRange.max}
                        onChange={(e) => handlePriceInputChange(e, 'max')}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-custom-red focus:ring-1 focus:ring-custom-red"
                    />
                    </div>
                </div>
                </div>
            </div>

            {/* Reviews Filter */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h5 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Reviews</h5>
                <div className="mt-3 space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center">
                    <input 
                        type="checkbox" 
                        id={`${stars}star`}
                        className="w-4 h-4 text-custom-red bg-gray-100 border-gray-300 rounded focus:ring-custom-red dark:focus:ring-custom-red dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={`${stars}star`} className="ms-2 text-sm font-medium text-slate-600 dark:text-gray-300 flex items-center cursor-pointer">
                        <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-4 h-4 ${i < stars ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        </div>
                        <span className="text-slate-400 text-xs">({stars} star{stars > 1 ? 's' : ''})</span>
                    </label>
                    </div>
                ))}
                </div>
            </div>

            {/* Booking Activity Filter */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h5 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Booking Activity</h5>
                <div className="mt-3 space-y-3">
                {['Bali Park', 'Paris', 'Arcadia', 'Culver City', 'Long Beach', 'California'].map((activity) => (
                    <div key={activity} className="flex items-center">
                    <input 
                        type="checkbox" 
                        id={activity.replace(/\s+/g, '')}
                        className="w-4 h-4 text-custom-red bg-gray-100 border-gray-300 rounded focus:ring-custom-red dark:focus:ring-custom-red dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={activity.replace(/\s+/g, '')} className="ms-2 text-sm font-medium text-slate-600 dark:text-gray-300 cursor-pointer hover:text-custom-red transition-colors">
                        {activity}
                    </label>
                    </div>
                ))}
                </div>
            </div>

            {/* Tour Map */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h5 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Tour Map</h5>
                <div className="mt-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    className="w-full h-64 rounded-lg border-0 shadow-sm"
                    allowFullScreen
                    loading="lazy"
                    title="Tour Map"
                ></iframe>
                </div>
            </div>

            {/* Reset Filters Button - Updated to use handleResetFilters */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <button 
                    onClick={handleResetFilters}
                    className="w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset All Filters
                </button>
            </div>
            </div>
        </div>
    )
}

export default TourPackageSidebarSection