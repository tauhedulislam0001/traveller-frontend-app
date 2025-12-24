import TourPackageHeroSection from "@components/tour-package/section/hero_section/tour_package_hero_section";
import TourPackageSidebarSection from "@components/tour-package/section/sidebar_section/tour_package_sidebar_section";
import React, { useState, useEffect, useRef } from "react";

const TourPackage: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [priceRange, setPriceRange] = useState({ min: 50, max: 120 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tourPackages = [
    { 
      id: 1, 
      img: "/assets/images/listing/1.jpg", 
      location: "Dubai", 
      title: "Cuba Sailing Adventure", 
      discount: "10% Off",
      price: "$58 / Day"
    },
    { 
      id: 2, 
      img: "/assets/images/listing/2.jpg", 
      location: "Italy", 
      title: "Tour in New York", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 3, 
      img: "/assets/images/listing/3.jpg", 
      location: "Maldivas", 
      title: "Discover Greece", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 4, 
      img: "/assets/images/listing/4.jpg", 
      location: "USA", 
      title: "Museum of Modern Art", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 5, 
      img: "/assets/images/listing/5.jpg", 
      location: "Bali", 
      title: "Peek Mountain View", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 6, 
      img: "/assets/images/listing/6.jpg", 
      location: "Bangkok", 
      title: "Hot Balloon Journey", 
      discount: "25% Off",
      price: "$58 / Day"
    },
    { 
      id: 7, 
      img: "/assets/images/listing/7.jpg", 
      location: "Singapore", 
      title: "Orca Camp Kayaking Trip", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 8, 
      img: "/assets/images/listing/8.jpg", 
      location: "Thailand", 
      title: "Caño Cristales River Trip", 
      discount: "20% Off",
      price: "$58 / Day"
    },
    { 
      id: 9, 
      img: "/assets/images/listing/9.jpg", 
      location: "Pattaya", 
      title: "Osa Peninsula to Dominical", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 10, 
      img: "/assets/images/listing/10.jpg", 
      location: "Lakshadweep", 
      title: "History of The Emporer", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 11, 
      img: "/assets/images/listing/11.jpg", 
      location: "Paris", 
      title: "Wildness of Paris", 
      discount: "",
      price: "$58 / Day"
    },
    { 
      id: 12, 
      img: "/assets/images/listing/12.jpg", 
      location: "London", 
      title: "The Hills and Mountains", 
      discount: "",
      price: "$58 / Day"
    },
  ];

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
    <div className="font-sans">
      {/* Hero Section */}
      <TourPackageHeroSection />

      {/* Tour Packages Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            {/* Sidebar Filters */}
            
            <TourPackageSidebarSection priceRange={priceRange} setPriceRange={setPriceRange}/>
            {/* Tour Packages Grid */}
            <div className="lg:col-span-8 md:col-span-7">
              {/* Results Count */}
              <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Showing {tourPackages.length} of {tourPackages.length} Tours
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Prices filtered: ${priceRange.min} - ${priceRange.max}
                    </p>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <select className="w-full md:w-auto px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-custom-red focus:ring-1 focus:ring-custom-red">
                      <option>Sort by: Popular</option>
                      <option>Sort by: Price Low to High</option>
                      <option>Sort by: Price High to Low</option>
                      <option>Sort by: Rating</option>
                      <option>Sort by: Newest</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {tourPackages.map((tour) => (
                  <div key={tour.id} className="group rounded-xl shadow-lg dark:shadow-gray-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={tour.img} 
                        className="w-full h-56 object-cover scale-110 group-hover:scale-100 duration-500" 
                        alt={tour.title}
                        loading="lazy"
                      />
                      {tour.discount && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-custom-red text-white text-xs px-3 py-1.5 font-semibold rounded-full shadow-lg">
                            {tour.discount}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <button className="size-10 inline-flex justify-center items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg rounded-full text-slate-400 hover:text-custom-red dark:hover:text-custom-red transition-colors hover:bg-white dark:hover:bg-slate-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center text-white bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-custom-red mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs font-medium">3 Days</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-custom-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {tour.location}
                      </div>
                      <a href="#" className="text-xl font-bold text-slate-900 dark:text-white hover:text-custom-red duration-300 block mb-3 line-clamp-1">
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
                          <span className="text-2xl font-bold text-custom-red">{tour.price.split('/')[0]}</span>
                          <span className="text-slate-600 dark:text-slate-400 text-sm ml-1">/ Day</span>
                        </div>
                        <a href="#" className="inline-flex items-center px-4 py-2 bg-custom-red hover:bg-red-600 text-white font-medium rounded-md transition-colors">
                          Book Now
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                  <nav aria-label="Page navigation example" className="inline-flex">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <button className="size-10 inline-flex justify-center items-center text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-s-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      </li>
                      {[1, 2, 3, 4, 5].map((page) => (
                        <li key={page}>
                          <button 
                            className={`size-10 inline-flex justify-center items-center border border-slate-300 dark:border-slate-600 transition-colors ${page === 3 
                              ? 'bg-custom-red text-white border-custom-red' 
                              : 'text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            {page}
                          </button>
                        </li>
                      ))}
                      <li>
                        <button className="size-10 inline-flex justify-center items-center text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-e-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    Showing 1-12 of {tourPackages.length} tours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackage;