import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import { TourPackageTopDestinationResponse } from "@redux/services/tour_package/type";

interface DestinationProps {
    data?: TourPackageTopDestinationResponse;
}

const Destination: React.FC<DestinationProps> = ({ data }) => {
    const [isMounted, setIsMounted] = useState(false);
    const sliderRef1 = useRef<Slider>(null);

    // Get destinations from API data
    const destinations = data?.data || [];

    const handleNextSlide1 = () => {
        if (sliderRef1.current) {
            sliderRef1.current.slickNext();
        }
    };

    const handlePrevSlide1 = () => {
        if (sliderRef1.current) {
            sliderRef1.current.slickPrev();
        }
    };

    // Slider settings for "Top Destinations"
    const sliderSettings1 = {
        dots: false,
        infinite: destinations.length > 3,
        speed: 500,
        slidesToShow: Math.min(5, destinations.length),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: Math.min(4, destinations.length),
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(3, destinations.length),
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(2, destinations.length),
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Show loading state while component is mounting
    if (!isMounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Top Destination...</p>
                </div>
            </div>
        );
    }

    // Show empty state if no destinations
    if (destinations.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <p className="text-gray-500">No top destinations available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-bold text-slate-900 dark:text-white">
                    Top Destinations
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Explore our most popular travel destinations
                </p>
            </div>

            <div className="relative mt-10">
                {/* Custom Navigation Buttons */}
                {destinations.length > 1 && (
                    <>
                        <button 
                            onClick={handlePrevSlide1}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-custom-red hover:text-white transition-all focus:outline-none"
                            aria-label="Previous destinations"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <button 
                            onClick={handleNextSlide1}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-custom-red hover:text-white transition-all focus:outline-none"
                            aria-label="Next destinations"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                <Slider ref={sliderRef1} {...sliderSettings1}>
                    {destinations.map((destination) => (
                        <div key={destination.id} className="px-2">
                            <div className="group relative overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800">
                                <img 
                                    src={destination.featured_image || 'https://via.placeholder.com/800x500?text=No+Image'} 
                                    className="w-full h-64 object-cover scale-125 group-hover:scale-100 duration-500" 
                                    alt={destination.title}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/800x500?text=No+Image';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90 opacity-0 group-hover:opacity-100 duration-500"></div>
                                <div className="absolute p-4 bottom-0 start-0 w-full">
                                    <Link href={`/tour-details/${destination.id}`}>
                                        <span className="text-lg font-semibold text-white hover:text-custom-red duration-300 block cursor-pointer">
                                            {destination.title}
                                        </span>
                                    </Link>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-white/80 text-xs group-hover:text-white duration-300">
                                            {destination.package_type}
                                        </span>
                                        <span className="text-white/50 text-xs">•</span>
                                        <span className="text-white/80 text-xs group-hover:text-white duration-300">
                                            {destination.duration_text}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Destination;