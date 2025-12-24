import React, {useEffect, useState }from 'react'


function TourPackage() {

    const tours = [
        { id: 1, img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", location: "Dubai", title: "Cuba Sailing Adventure", discount: "10% Off" },
        { id: 2, img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", location: "Italy", title: "Tour in New York" },
        { id: 3, img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", location: "Maldivas", title: "Discover Greece" },
        { id: 4, img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", location: "USA", title: "Museum of Modern Art" },
        { id: 5, img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", location: "Bali", title: "Peek Mountain View" },
        { id: 6, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", location: "Bangkok", title: "Hot Balloon Journey", discount: "25% Off" },
    ];

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    });
    
    // Show loading state while component is mounting
    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Tour Package...</p>
            </div>
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
        {tours.map((tour) => (
            <div key={tour.id} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-gray-800 overflow-hidden transition-transform duration-300 hover:shadow-xl dark:hover:shadow-gray-700">
            <div className="relative overflow-hidden">
                <img 
                src={tour.img} 
                className="w-full h-56 object-cover scale-110 group-hover:scale-100 duration-500" 
                alt={tour.title}
                loading="lazy"
                />
                {tour.discount && (
                <div className="absolute top-4 left-4">
                    <span className="bg-custom-red text-white text-xs px-3 py-1 font-semibold rounded-full">
                    {tour.discount}
                    </span>
                </div>
                )}
                <button className="absolute top-4 right-4 size-10 inline-flex justify-center items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full shadow-md hover:bg-custom-red hover:text-white transition-all">
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
                {tour.location}
                </div>
                <a href="#" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-custom-red duration-300 block mb-3">
                {tour.title}
                </a>

                <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ))}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">5.0 (30 reviews)</span>
                </div>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <div>
                    <span className="text-lg font-bold text-custom-red">$58</span>
                    <span className="text-slate-600 dark:text-slate-400 text-sm ml-1">/ Day</span>
                </div>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-custom-red font-medium text-sm flex items-center">
                    Explore Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        ))}
        </div>

        <div className="mt-10 text-center">
        <a href="#" className="inline-flex items-center text-custom-red hover:text-red-600 font-semibold">
            View All Tours
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
        </div>
    </div>
  )
}

export default TourPackage