import React, { useState, useEffect } from "react";

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import custom CSS for your component
import "./Main.module.css"; // Create this file for custom styles
import TourPackage from "@components/main/sections/tour_packages/tour_packages";
import BookingForm from "@components/main/sections/booking_form/booking_form";
import HeroSection from "@components/main/sections/hero_section/hero_section";
import Destination from "@components/main/sections/destination/destination";
import AboutSection from "@components/main/sections/about/about";
import Testimonial from "@components/main/sections/Testimonial/testimonial";
import BlogSection from "@components/main/sections/blog/blog_section";
import { BlogFeatureResponse } from "@redux/services/blog/type";

const Landing: React.FC<{ blogFeaturedData?: BlogFeatureResponse }> = ({ blogFeaturedData }) => {
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
          <p className="text-gray-600 dark:text-gray-400">Loading Traveller BD...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Hero Section with Video Modal */}
      <HeroSection/>

      {/* Booking Form */}
      <BookingForm />

      {/* Top Destinations Slider */}
      <section className="relative md:py-24 py-16 overflow-hidden bg-gray-50 dark:bg-slate-900">
        <Destination />

        {/* Tours Packages */}
        <TourPackage />

        {/* About Section */}
        <AboutSection />        

        {/* Testimonials Slider */}
        <Testimonial />

        <BlogSection data={blogFeaturedData} />
      </section>
    </div>
  );
};

export default Landing;