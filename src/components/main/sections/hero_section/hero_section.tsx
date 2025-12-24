import React, { useState, useEffect } from "react";


function HeroSection() {

    const [showVideo, setShowVideo] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
  
    const handleVideoPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowVideo(true);
    };

    const closeVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setShowVideo(false);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
        setShowVideo(false);
        }
    };
    
    useEffect(() => {
        // Set mounted state to true after component mounts
        setIsMounted(true);
        
        const handleEscKey = (e: KeyboardEvent) => {
          if (e.key === 'Escape' && showVideo) {
            setShowVideo(false);
          }
        };
    
        if (showVideo) {
          document.addEventListener('keydown', handleEscKey);
          document.body.style.overflow = 'hidden';
        }
    
        return () => {
          document.removeEventListener('keydown', handleEscKey);
          document.body.style.overflow = 'unset';
        };
    }, [showVideo]);

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Travel Agency...</p>
            </div>
        </div>
        );
    }
  
  return (
    <div>
        <section 
            className="relative md:pt-72 md:pb-60 py-36 w-full flex items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.4)), url('/assets/images/bg/1.jpg')`
        }}
        >
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-8">
                <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                <h5 className="text-3xl font-dancing text-white mb-4">Beauty of Discover</h5>
                <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6">
                    Let's Leave The Road, <br /> And Take The Travosy
                </h4>
                <p className="text-white/80 text-lg text-white md:text-xl max-w-xl">
                    Planning for a trip? We will organize your trip with the best places and within best budget!
                </p>
                </div>

                <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                <button
                    onClick={handleVideoPlay}
                    className="lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg shadow-gray-800/50 inline-flex items-center justify-center bg-white hover:bg-custom-red text-custom-red hover:text-white duration-500 ease-in-out mx-auto cursor-pointer border-none transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-offset-2"
                    aria-label="Play video"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </section>

        {/* Video Modal */}
        {showVideo && (
            <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={handleBackdropClick}
            >
            <div className="relative w-full max-w-4xl">
                <button
                onClick={closeVideo}
                className="absolute -top-10 right-0 md:-right-12 text-white hover:text-custom-red text-3xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Close video"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
                <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/xLTCivIB4kU?autoplay=1&mute=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
  )
}

export default HeroSection