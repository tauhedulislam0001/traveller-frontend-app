import React, { useState, useEffect } from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.module.css";
import TourPackage from "@components/main/sections/tour_packages/tour_packages";
import BookingForm from "@components/main/sections/booking_form/booking_form";
import HeroSection from "@components/main/sections/hero_section/hero_section";
import Destination from "@components/main/sections/destination/destination";
import AboutSection from "@components/main/sections/about/about";
import Testimonial from "@components/main/sections/Testimonial/testimonial";
import BlogSection from "@components/main/sections/blog/blog_section";
import { BlogFeatureResponse } from "@redux/services/blog/type";
import { TourPackageFeatureResponse, TourPackageTopDestinationResponse, TourPackage as TourPackageType } from "@redux/services/tour_package/type";

interface LandingProps {
    blogFeaturedData?: BlogFeatureResponse;
    tourFeaturedData?: TourPackageFeatureResponse;
    tourTopDestinationData?: TourPackageTopDestinationResponse;
}

const Landing: React.FC<LandingProps> = ({ blogFeaturedData, tourFeaturedData, tourTopDestinationData }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [searchResults, setSearchResults] = useState<TourPackageType[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle search results from booking form
  const handleSearchResults = (results: TourPackageType[]) => {
    console.log('Received search results:', results);
    setSearchResults(results);
    setShowSearchResults(true);
    setIsSearching(false);
    
    // Scroll to results after a short delay
    setTimeout(() => {
      const resultsSection = document.getElementById('search-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle search start
  const handleSearchStart = () => {
    setIsSearching(true);
    setShowSearchResults(true);
  };

  // Clear search results - THIS IS THE NEW HANDLER
  const handleClearSearch = () => {
    setShowSearchResults(false);
    setSearchResults([]);
    setIsSearching(false);
  };

  // Clear search results from the X button (keeping existing functionality)
  const handleClearResults = () => {
    setShowSearchResults(false);
    setSearchResults([]);
    setIsSearching(false);
  };

  // Show loading state while component is mounting
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading Traveller BD...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Hero Section with Video Modal */}
      <HeroSection/>

      {/* Booking Form - Pass tour data and search handler */}
      <BookingForm 
        tourData={tourFeaturedData} 
        onSearchResults={handleSearchResults}
        onSearchStart={handleSearchStart}
        onSearchClear={handleClearSearch}  // ADD THIS LINE
      />

      {/* Search Results Section - Professional Design */}
      {showSearchResults && (
        <section id="search-results" className="relative md:py-20 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 border-t border-gray-100 dark:border-slate-700">
          <div className="container mx-auto px-4">
            {/* Header with close button */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-slate-700">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {isSearching ? 'Searching...' : 'Search Results'}
                </h2>
                {!isSearching && searchResults.length > 0 && (
                  <p className="text-slate-600 dark:text-slate-400">
                    Found {searchResults.length} tour package(s) matching your criteria
                  </p>
                )}
                {!isSearching && searchResults.length === 0 && (
                  <p className="text-slate-600 dark:text-slate-400">
                    No packages found. Try adjusting your search criteria.
                  </p>
                )}
              </div>
              <button
                onClick={handleClearResults}
                className="p-2 text-gray-400 hover:text-custom-red dark:text-gray-500 dark:hover:text-custom-red transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
                title="Close results"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Loading State */}
            {isSearching && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mb-4"></div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">Searching for packages...</p>
              </div>
            )}

            {/* Results Found */}
            {!isSearching && searchResults.length > 0 && (
              <div className="animate-fadeIn">
                <TourPackage data={{ 
                  success: true, 
                  message: 'Search results', 
                  count: searchResults.length, 
                  data: searchResults 
                }} />
              </div>
            )}

            {/* No Results Found - Professional Empty State */}
            {!isSearching && searchResults.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  No Packages Found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6">
                  We couldn't find any packages matching your search criteria. Try adjusting your filters or browse all our tour packages.
                </p>
                <Link href="/tour-package">
                  <button className="px-6 py-3 bg-custom-red hover:bg-red-600 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                    Browse All Tour Packages
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Top Destinations Slider - Hide when showing search results */}
      {!showSearchResults && (
        <section className="relative md:py-24 py-16 overflow-hidden bg-gray-50 dark:bg-slate-900">
          <Destination data={tourTopDestinationData}/>
          <TourPackage data={tourFeaturedData}/>
          <AboutSection />        
          <Testimonial />
          <BlogSection data={blogFeaturedData} />
        </section>
      )}
    </div>
  );
};

export default Landing;