import React, {useRef, useEffect, useState} from 'react'
import Slider from "react-slick";
    
function Destination() {
  const [isMounted, setIsMounted] = useState(false);

  const sliderRef1 = useRef<Slider>(null);

  const destinations = [
      { id: 1, img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Rome, Italy", hotels: "3 Hotels" },
      { id: 2, img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Singapore", hotels: "3 Hotels" },
      { id: 3, img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Paris, France", hotels: "3 Hotels" },
      { id: 4, img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Goa, India", hotels: "3 Hotels" },
      { id: 5, img: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80", title: "Whistler, Canada", hotels: "3 Hotels" },
      { id: 6, img: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Kuala Lumpur, Malaysia", hotels: "3 Hotels" },
      { id: 7, img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Sydney, Australia", hotels: "3 Hotels" },
  ];

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

  // Slider settings for "Top Destinations" (5 items visible)
  const sliderSettings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
  });
  
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

  return (
    <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-bold text-slate-900 dark:text-white">Top Destinations</h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
        </div>

        <div className="relative mt-10">
        {/* Custom Navigation Buttons */}
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

        <Slider ref={sliderRef1} {...sliderSettings1}>
            {destinations.map((destination) => (
            <div key={destination.id} className="px-2">
                <div className="group relative overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800">
                <img 
                    src={destination.img} 
                    className="w-full h-64 object-cover scale-125 group-hover:scale-100 duration-500" 
                    alt={destination.title}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90 opacity-0 group-hover:opacity-100 duration-500"></div>
                <div className="absolute p-4 bottom-0 start-0 w-full">
                    <a href="#" className="text-lg font-semibold text-white hover:text-custom-red duration-300 block">
                    {destination.title}
                    </a>
                    <p className="text-white/80 group-hover:text-white text-sm duration-300">{destination.hotels}</p>
                </div>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

export default Destination