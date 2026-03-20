import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TourPackageFeatureResponse } from '@redux/services/tour_package/type';

interface PricingOption {
    cost_type: string;
    regular_amount?: number;
    final_amount: number;
    formatted_regular?: string;
    formatted_final: string;
    has_discount: boolean;
    saved_percent?: number;
    saved_amount?: number;
}

interface TourPackageData {
    id: number;
    title: string;
    package_type: string;
    short_description: string;
    featured_image: string | null;
    duration_text: string;
    formatted_price: string;
    rating: number;
    review_count: number;
    price_range?: {
        min_final: number;
        max_final: number;
    };
    pricing?: PricingOption[];
}

interface TourPackageProps {
    data?: TourPackageFeatureResponse;
}

function TourPackage({ data }: TourPackageProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [displayCount, setDisplayCount] = useState(6);
    
    // Get tours data from props instead of fetching
    const toursData = data?.data || [];
    const totalTours = toursData.length;

    useEffect(() => {
        setIsMounted(true);
        
        // Debug: Log the data received from props
        if (data) {
            console.log('TourPackage received data:', data);
            console.log('Tours data:', toursData);
        }
    }, [data]);

    // Function to get display price
    const getDisplayPrice = (tour: TourPackageData) => {
        try {
            if (tour.formatted_price) {
                return tour.formatted_price;
            }
            if (tour.price_range) {
                if (tour.price_range.min_final === tour.price_range.max_final) {
                    return `$${tour.price_range.min_final.toFixed(2)}`;
                }
                return `$${tour.price_range.min_final.toFixed(2)} - $${tour.price_range.max_final.toFixed(2)}`;
            }
            return 'Contact';
        } catch (err) {
            console.error('Error getting display price:', err);
            return 'Contact';
        }
    };

    // Function to calculate discount percentage from regular and final amounts
    const calculateDiscountPercent = (option: PricingOption): number => {
        if (option.saved_percent && option.saved_percent > 0) {
            return option.saved_percent;
        }
        
        if (option.regular_amount && option.regular_amount > option.final_amount) {
            const saved = option.regular_amount - option.final_amount;
            const percent = Math.round((saved / option.regular_amount) * 100);
            return percent;
        }
        
        return 0;
    };

    // Function to get maximum discount percentage
    const getMaxDiscountPercent = (tour: TourPackageData) => {
        try {
            if (!tour.pricing || tour.pricing.length === 0) {
                return 0;
            }
            
            const discounts = tour.pricing
                .filter(p => p.has_discount === true)
                .map(p => calculateDiscountPercent(p));
            
            return discounts.length > 0 ? Math.max(...discounts) : 0;
        } catch (err) {
            console.error('Error getting max discount:', err);
            return 0;
        }
    };

    // Function to check if tour has any discount
    const hasDiscount = (tour: TourPackageData) => {
        try {
            return tour.pricing?.some(p => p.has_discount === true) || false;
        } catch (err) {
            console.error('Error checking discount:', err);
            return false;
        }
    };

    // Show loading state
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

    // Show empty state
    if (!toursData || toursData.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <p className="text-gray-600">No tour packages available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-bold text-slate-900 dark:text-white">Tours Packages</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-6">
                {toursData.slice(0, displayCount).map((tour: TourPackageData) => {
                    const discountPercent = getMaxDiscountPercent(tour);
                    const hasDiscountValue = hasDiscount(tour);
                    
                    return (
                        <div key={tour.id} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-gray-800 overflow-hidden transition-transform duration-300 hover:shadow-xl dark:hover:shadow-gray-700">
                            <div className="relative overflow-hidden">
                                <img 
                                    src={tour.featured_image || 'https://via.placeholder.com/800x400?text=No+Image'} 
                                    className="w-full h-56 object-cover scale-110 group-hover:scale-100 duration-500" 
                                    alt={tour.title}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/800x400?text=No+Image';
                                    }}
                                />
                                {hasDiscountValue && discountPercent > 0 && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-custom-red text-white text-xs px-3 py-1 font-semibold rounded-full shadow-lg">
                                            {discountPercent}% OFF
                                        </span>
                                    </div>
                                )}
                                <button className="absolute top-4 right-4 size-10 inline-flex justify-center items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full shadow-md hover:bg-custom-red hover:text-white transition-all z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-custom-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {tour.package_type || 'Tour Package'}
                                </div>
                                
                                {/* Tour Title Link */}
                                <Link href={`/tour-details/${tour.id}`}>
                                    <span className="text-lg font-semibold text-slate-900 dark:text-white hover:text-custom-red duration-300 block mb-3 cursor-pointer line-clamp-1">
                                        {tour.title}
                                    </span>
                                </Link>

                                {/* Short Description */}
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                                    {tour.short_description ? tour.short_description.replace(/<[^>]*>/g, '').substring(0, 100) : 'No description available'}...
                                </p>

                                <div className="flex items-center mb-4">
                                    <div className="flex text-amber-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                        {tour.rating || '5.0'} ({tour.review_count || 0} reviews)
                                    </span>
                                </div>
                                
                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                    <div>
                                        <span className="text-lg font-bold text-custom-red">
                                            {getDisplayPrice(tour)}
                                        </span>
                                        <span className="text-slate-600 dark:text-slate-400 text-sm ml-1">/ person</span>
                                    </div>
                                    
                                    {/* Explore Now Link */}
                                    <Link href={`/tour-details/${tour.id}`} className="group/link">
                                        <span className="inline-flex items-center text-slate-600 dark:text-slate-400 group-hover/link:text-custom-red font-medium text-sm transition-colors duration-300 cursor-pointer">
                                            Explore Now
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Load More Tours Button */}
            {totalTours > displayCount && (
                <div className="mt-10 text-center">
                    <button 
                        onClick={() => setDisplayCount(prev => prev + 3)}
                        className="group/view-all inline-block"
                    >
                        <span className="inline-flex items-center text-custom-red group-hover/view-all:text-red-600 font-semibold transition-colors duration-300 cursor-pointer">
                            Load More Tours
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform group-hover/view-all:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            )}

            {/* View All Tours Link */}
            <div className="mt-6 text-center">
                <Link href="/tour-package" className="group/view-all inline-block">
                    <span className="inline-flex items-center text-custom-red group-hover/view-all:text-red-600 font-semibold transition-colors duration-300 cursor-pointer">
                        View All Tours
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform group-hover/view-all:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default TourPackage;