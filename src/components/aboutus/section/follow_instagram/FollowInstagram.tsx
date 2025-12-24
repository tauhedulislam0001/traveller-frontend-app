import React, { useState, useEffect, useRef } from "react";
import './follow.module.css';

function FollowInstagram() {
    const [isMounted, setIsMounted] = useState(false);
    const instaContainerRef = useRef<HTMLDivElement>(null);
    
    const instaImages = [
        "/assets/images/listing/1.jpg",
        "/assets/images/listing/2.jpg",
        "/assets/images/listing/3.jpg",
        "/assets/images/listing/4.jpg",
        "/assets/images/listing/5.jpg",
        "/assets/images/listing/6.jpg",
        "/assets/images/listing/7.jpg",
        "/assets/images/listing/8.jpg",
        "/assets/images/listing/9.jpg",
        "/assets/images/listing/10.jpg",
        "/assets/images/listing/11.jpg",
        "/assets/images/listing/12.jpg",
        "/assets/images/listing/1.jpg",
        "/assets/images/listing/2.jpg",
        "/assets/images/listing/3.jpg",
        "/assets/images/listing/4.jpg",
        "/assets/images/listing/5.jpg",
        "/assets/images/listing/6.jpg",
        "/assets/images/listing/7.jpg",
        "/assets/images/listing/8.jpg",
        "/assets/images/listing/9.jpg",
        "/assets/images/listing/10.jpg",
        "/assets/images/listing/11.jpg",
        "/assets/images/listing/12.jpg",
    ];
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading About Us...</p>
            </div>
        </div>
        );
    }


    const scrollInstaLeft = () => {
        if (instaContainerRef.current) {
        instaContainerRef.current.scrollLeft -= 300;
        }
    };

    const scrollInstaRight = () => {
        if (instaContainerRef.current) {
        instaContainerRef.current.scrollLeft += 300;
        }
    };
    
    return (
        <div className="container-fluid relative py-12 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
            <div className="grid grid-cols-1 relative px-4">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                Follow Us on Instagram
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Check out our latest travel adventures and get inspired for your next trip
                </p>
            </div>

            <div className="relative overflow-hidden px-12">
                {/* Instagram Scroll Container */}
                <div 
                ref={instaContainerRef}
                className="flex space-x-6 p-4 overflow-x-auto scrollbar-hide transition-all duration-300"
                style={{ scrollBehavior: 'smooth' }}
                >
                {instaImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 group">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                        <img 
                        src={image} 
                        className="w-48 h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                        alt={`Instagram Post ${index + 1}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <div className="flex space-x-4">
                            <div className="flex items-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="ml-1 font-medium">245</span>
                            </div>
                            <div className="flex items-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span className="ml-1 font-medium">42</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                {/* Left Navigation Arrow */}
                <button 
                onClick={scrollInstaLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-700 hover:bg-red-500 text-gray-800 dark:text-white hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 z-10 hover:scale-110 border border-gray-200 dark:border-slate-600"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                </button>
                
                {/* Right Navigation Arrow */}
                <button 
                onClick={scrollInstaRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-700 hover:bg-red-500 text-gray-800 dark:text-white hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 z-10 hover:scale-110 border border-gray-200 dark:border-slate-600"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>

            {/* Instagram Button */}
            <div className="text-center mt-8">
                <a 
                href="https://www.instagram.com/shreethemes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-600"
                >
                <i className="mdi mdi-instagram text-xl mr-2"></i>
                Follow @travosy
                </a>
            </div>
            </div>
        </div>
    )
}

export default FollowInstagram