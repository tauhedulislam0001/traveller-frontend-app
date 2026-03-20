import TourDetailsBookNow from "@components/tour-details/section/Tour_details_booknow/TourDetailsBookNow";
import TourDetailComments from "@components/tour-details/section/tour_details_comments/TourDetailComments";
import TourDetailsQA from "@components/tour-details/section/tour_details_question_answer/TourDetailsQA";
import TourDetailsHeroSection from "@components/tour-details/section/tour_hero_section/TourDetailsHeroSection";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useGetRelatedTourPackageQuery } from "@redux/services/tour_package/api";
import { TourPackageDetails } from "@redux/services/tour_package/type";

interface TourDetailsProps {
    tourData: TourPackageDetails;
}

export const TourDetails: React.FC<TourDetailsProps> = ({ tourData }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'pricing' | 'itinerary' | 'highlights' | 'faq'>('overview');

    const { data: relatedData } = useGetRelatedTourPackageQuery(
        { id: tourData.id, limit: 4 },
        { skip: !tourData.id }
    );

    useEffect(() => {
        setIsMounted(true);
        
        console.log('TourDetails - tourData:', tourData);
        console.log('TourDetails - pricing:', tourData?.pricing);
        console.log('TourDetails - price_range:', tourData?.price_range);
    }, [tourData]);

    if (!isMounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-custom-red rounded-full animate-spin border-t-transparent"></div>
                    </div>
                    <p className="text-lg font-medium text-gray-600">Loading tour details...</p>
                </div>
            </div>
        );
    }

    const allImages = [
        tourData.featured_image,
        ...(tourData.gallery_images || [])
    ].filter(Boolean);

    const rating = tourData.rating || 4.5;
    const reviewCount = tourData.review_count || 0;

    const formatHtml = (html: string) => {
        return { __html: html };
    };

    // Get available plan types from pricing
    const hasPerPerson = tourData.pricing?.some(p => p.cost_type === 'per_person') || false;
    const hasGroupTour = tourData.pricing?.some(p => p.cost_type === 'group_tour') || false;
    
    // Get all unique group sizes
    const groupSizes = tourData.pricing
        ?.filter(p => p.cost_type === 'group_tour' && p.person_count)
        .map(p => p.person_count)
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort((a, b) => (a || 0) - (b || 0)) || [];

    // Gallery layout based on number of images
    const renderGallery = () => {
        const imageCount = allImages.length;
        
        if (imageCount === 0) return null;
        
        const galleryLayouts = {
            1: (
                <div className="grid grid-cols-1 gap-4">
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[0])}>
                        <img src={allImages[0]} alt="Tour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            ),
            
            2: (
                <div className="grid grid-cols-2 gap-4">
                    {allImages.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            ),
            
            3: (
                <div className="grid grid-cols-3 gap-4">
                    {allImages.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            ),
            
            4: (
                <div className="grid grid-cols-2 gap-4">
                    {allImages.map((img, idx) => (
                        <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            ),
            
            5: (
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 row-span-2 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[0])}>
                        <img src={allImages[0]} alt="Tour 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[1])}>
                        <img src={allImages[1]} alt="Tour 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[2])}>
                        <img src={allImages[2]} alt="Tour 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[3])}>
                        <img src={allImages[3]} alt="Tour 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[4])}>
                        <img src={allImages[4]} alt="Tour 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            ),
            
            6: (
                <div className="grid grid-cols-3 gap-4">
                    {allImages.slice(0, 3).map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                    {allImages.slice(3, 6).map((img, idx) => (
                        <div key={idx + 3} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 4}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            ),
            
            7: (
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2 row-span-2 aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[0])}>
                        <img src={allImages[0]} alt="Tour 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    {allImages.slice(1, 4).map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                    {allImages.slice(4, 7).map((img, idx) => (
                        <div key={idx + 4} className="col-span-1 aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 5}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            ),
            
            8: (
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1 row-span-2 aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[0])}>
                        <img src={allImages[0]} alt="Tour 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-2 row-span-2 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[1])}>
                        <img src={allImages[1]} alt="Tour 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-2 space-y-4">
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[2])}>
                            <img src={allImages[2]} alt="Tour 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(allImages[3])}>
                            <img src={allImages[3]} alt="Tour 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                    {allImages.slice(4, 8).map((img, idx) => (
                        <div key={idx + 4} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 5}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            ),
            
            9: (
                <div className="grid grid-cols-3 gap-4">
                    {allImages.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Tour ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            )
        };

        const defaultLayout = (
            <div className="grid grid-cols-3 gap-4">
                {allImages.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
                        <img src={img} alt={`Tour ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        {idx === 8 && allImages.length > 9 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">+{allImages.length - 9}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );

        return galleryLayouts[imageCount] || defaultLayout;
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <TourDetailsHeroSection 
                featuredImage={tourData.featured_image}
                title={tourData.title}
                packageType={tourData.package_type}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Gallery Section */}
                        {allImages.length > 0 && (
                            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-semibold text-gray-900">Gallery</h2>
                                </div>
                                <div className="p-6">
                                    {renderGallery()}
                                </div>
                            </div>
                        )}

                        {/* Quick Info Cards - Updated with dynamic group size */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-gray-500">Duration</div>
                                <div className="text-lg font-semibold text-gray-900 mt-1">{tourData.duration_text}</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-gray-500">Type</div>
                                <div className="text-lg font-semibold text-gray-900 mt-1">{tourData.package_type}</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-gray-500">Plan Types</div>
                                <div className="text-sm font-semibold text-gray-900 mt-1">
                                    {hasPerPerson && <span className="inline-block mr-2">👤 Per Person</span>}
                                    {hasGroupTour && <span>👥 Group Tour</span>}
                                    {!hasPerPerson && !hasGroupTour && 'N/A'}
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-gray-500">Rating</div>
                                <div className="text-lg font-semibold text-gray-900 mt-1">{rating} ({reviewCount})</div>
                            </div>
                        </div>

                        {/* Group Sizes Badges */}
                        {groupSizes.length > 0 && (
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-sm text-gray-500">Available Group Sizes:</span>
                                {groupSizes.map((size, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                        {size} persons
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Tabs */}
                        <div className="border-b border-gray-200">
                            <nav className="flex flex-wrap gap-2 md:gap-4">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`py-3 px-4 text-sm font-medium transition-colors relative ${
                                        activeTab === 'overview'
                                            ? 'text-custom-red after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-custom-red'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    Overview
                                </button>
                                {tourData.pricing && tourData.pricing.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab('pricing')}
                                        className={`py-3 px-4 text-sm font-medium transition-colors relative ${
                                            activeTab === 'pricing'
                                                ? 'text-custom-red after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-custom-red'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        Pricing Options
                                    </button>
                                )}
                                {tourData.tour_itinerary?.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab('itinerary')}
                                        className={`py-3 px-4 text-sm font-medium transition-colors relative ${
                                            activeTab === 'itinerary'
                                                ? 'text-custom-red after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-custom-red'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        Itinerary
                                    </button>
                                )}
                                {tourData.tour_highlights?.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab('highlights')}
                                        className={`py-3 px-4 text-sm font-medium transition-colors relative ${
                                            activeTab === 'highlights'
                                                ? 'text-custom-red after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-custom-red'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        Highlights
                                    </button>
                                )}
                                {tourData.faq?.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab('faq')}
                                        className={`py-3 px-4 text-sm font-medium transition-colors relative ${
                                            activeTab === 'faq'
                                                ? 'text-custom-red after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-custom-red'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        FAQ
                                    </button>
                                )}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="py-4">
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div 
                                        className="text-gray-600 leading-relaxed prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: tourData.short_description }}
                                    />

                                    {tourData.best_time_to_go?.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 mb-3">Best Time to Visit</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {tourData.best_time_to_go.map((month, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                        {month}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {tourData.next_scheduled_tour && (
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 mb-2">Next Available Tour</h3>
                                            <p className="text-green-600 font-medium">{tourData.next_scheduled_tour}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Pricing Tab Content */}
                            {activeTab === 'pricing' && tourData.pricing && tourData.pricing.length > 0 && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {tourData.pricing.map((option, index) => {
                                            const isPerPerson = option.cost_type === 'per_person';
                                            const isGroupTour = option.cost_type === 'group_tour';
                                            const hasDiscount = option.has_discount;
                                            
                                            return (
                                                <div key={index} className={`border rounded-xl overflow-hidden transition-all hover:shadow-md ${
                                                    hasDiscount ? 'border-green-200 bg-gradient-to-br from-white to-green-50' : 'border-gray-200'
                                                }`}>
                                                    <div className="p-5">
                                                        <div className="flex justify-between items-start mb-3">
                                                            <div>
                                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                                                    isPerPerson 
                                                                        ? 'bg-blue-100 text-blue-700' 
                                                                        : 'bg-purple-100 text-purple-700'
                                                                }`}>
                                                                    {isPerPerson ? '👤 Per Person' : `👥 Group Tour (${option.person_count} persons)`}
                                                                </span>
                                                            </div>
                                                            {hasDiscount && (
                                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                                    🔥 {option.saved_percent}% OFF
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="mt-4">
                                                            <div className="flex items-baseline gap-2">
                                                                {hasDiscount ? (
                                                                    <>
                                                                        <span className="text-2xl font-bold text-custom-red">
                                                                            {option.formatted_final}
                                                                        </span>
                                                                        <span className="text-sm line-through text-gray-400">
                                                                            {option.formatted_regular}
                                                                        </span>
                                                                    </>
                                                                ) : (
                                                                    <span className="text-2xl font-bold text-custom-red">
                                                                        {option.formatted_final}
                                                                    </span>
                                                                )}
                                                                <span className="text-sm text-gray-500">/ person</span>
                                                            </div>
                                                            
                                                            {hasDiscount && (
                                                                <p className="text-sm text-green-600 mt-2">
                                                                    Save {option.formatted_saved} ({option.saved_percent}% off)
                                                                </p>
                                                            )}
                                                        </div>

                                                        {isGroupTour && option.total_price && (
                                                            <div className="mt-4 pt-3 border-t border-gray-100">
                                                                <div className="flex justify-between items-center">
                                                                    <span className="text-sm text-gray-600">Total for {option.person_count} persons:</span>
                                                                    <span className="text-lg font-semibold text-custom-red">
                                                                        {option.formatted_total}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Price Range Summary */}
                                    {tourData.price_range && (
                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Price Summary</h4>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Price Range:</span>
                                                <span className="font-semibold text-gray-900">
                                                    {tourData.price_range.min_final === tourData.price_range.max_final 
                                                        ? `$${tourData.price_range.min_final.toFixed(2)}`
                                                        : `$${tourData.price_range.min_final.toFixed(2)} - $${tourData.price_range.max_final.toFixed(2)}`
                                                    }
                                                </span>
                                            </div>
                                            {tourData.price_range.min !== tourData.price_range.min_final && (
                                                <div className="flex justify-between items-center mt-1">
                                                    <span className="text-sm text-gray-600">Regular Price Range:</span>
                                                    <span className="text-sm text-gray-500 line-through">
                                                        ${tourData.price_range.min.toFixed(2)} - ${tourData.price_range.max.toFixed(2)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'itinerary' && tourData.tour_itinerary && (
                                <div className="space-y-6">
                                    {tourData.tour_itinerary.map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-custom-red rounded-full flex items-center justify-center text-sm font-medium text-gray-700">
                                                {idx + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-custom-red mb-2">{item.title}</h4>
                                                <div 
                                                    className="text-gray-600 text-sm leading-relaxed prose prose-sm max-w-none"
                                                    dangerouslySetInnerHTML={formatHtml(item.description)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'highlights' && tourData.tour_highlights && (
                                <div className="space-y-6">
                                    {tourData.tour_highlights.map((highlight, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-medium text-gray-900 mb-3">{highlight.name}</h4>
                                            <ul className="space-y-2">
                                                {highlight.points?.map((point, pIdx) => (
                                                    <li key={pIdx} className="flex items-start gap-2 text-gray-600">
                                                        <span className="w-1.5 h-1.5 bg-custom-red rounded-full mt-2"></span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'faq' && tourData.faq && (
                                <TourDetailsQA faqs={tourData.faq} />
                            )}
                        </div>

                        {/* Includes/Excludes - Only once */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {tourData.includes?.length > 0 && (
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                                        <i className="fas fa-check-circle text-green-500"></i>
                                        What's Included
                                    </h3>
                                    <ul className="space-y-2">
                                        {tourData.includes.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="text-green-500">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {tourData.excludes?.length > 0 && (
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                                        <i className="fas fa-times-circle text-red-500"></i>
                                        What's Excluded
                                    </h3>
                                    <ul className="space-y-2">
                                        {tourData.excludes.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="text-red-500">✕</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Important Notes */}
                        {tourData.notes?.length > 0 && (
                            <div className="bg-amber-50/50 rounded-xl p-6 border border-amber-100">
                                <h3 className="text-sm font-medium text-amber-800 mb-3">Important Notes</h3>
                                <ul className="space-y-1">
                                    {tourData.notes.map((note, idx) => (
                                        <li key={idx} className="text-sm text-amber-700 flex items-start gap-2">
                                            <span className="w-1 h-1 bg-amber-500 rounded-full mt-2"></span>
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Reviews */}
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Reviews</h3>
                            <TourDetailComments tourId={tourData.id} />
                        </div>
                    </div>

                    {/* Right Column - Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <TourDetailsBookNow 
                                pricing={tourData.pricing}
                                price_range={tourData.price_range}
                                price={tourData.formatted_price}
                                duration={tourData.duration_text}
                                tourId={tourData.id}
                                tourTitle={tourData.title}
                            />
                        </div>
                    </div>
                </div>

                {/* Related Tours */}
                {relatedData?.data && relatedData.data.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">You Might Also Like</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedData.data.map((tour) => (
                                <Link href={`/tour-details/${tour.id}`} key={tour.id}>
                                    <div className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all overflow-hidden cursor-pointer">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={tour.featured_image || '/assets/images/placeholder.jpg'}
                                                alt={tour.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">{tour.title}</h4>
                                            <p className="text-sm text-gray-500 mb-2">{tour.duration_text}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-custom-red font-semibold">{tour.formatted_price}</span>
                                                <span className="text-sm text-gray-500">{tour.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-6xl w-full">
                        <img src={selectedImage} alt="Full size" className="w-full h-auto" />
                        <button className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl" onClick={() => setSelectedImage(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TourDetails;