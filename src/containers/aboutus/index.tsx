import AboutBlogSection from "@components/aboutus/section/about_blog_page/AboutBlogSection";
import CustomerReview from "@components/aboutus/section/customer_review/CustomerReview";
import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import AboutHeroSection from "@components/aboutus/section/hero_section/AboutHeroSection";
import AboutIntroduction from "@components/aboutus/section/introduction/AboutIntroduction";
import AboutOurTeam from "@components/aboutus/section/our_team/AboutOurTeam";
import React, { useState, useEffect } from "react";

export const Aboutus: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Define data arrays before useEffect

    const testimonials = [
        { 
        id: 1, 
        name: "Calvin Carlo", 
        role: "Manager", 
        image: "/assets/images/client/01.jpg",
        quote: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
        rating: 5
        },

        { 
        id: 2, 
        name: "Christa Smith", 
        role: "Manager", 
        image: "/assets/images/client/02.jpg",
        quote: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        rating: 5
        },

        { 
        id: 3, 
        name: "Jemina CLone", 
        role: "Manager", 
        image: "/assets/images/client/03.jpg",
        quote: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
        rating: 5
        },

        { 
        id: 4, 
        name: "Smith Vodka", 
        role: "Manager", 
        image: "/assets/images/client/04.jpg",
        quote: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
        rating: 5
        },

        { 
        id: 5, 
        name: "Cristino Murfi", 
        role: "Manager", 
        image: "/assets/images/client/05.jpg",
        quote: "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        rating: 5
        },

        { 
        id: 6, 
        name: "Cristino Murfi", 
        role: "Manager", 
        image: "/assets/images/client/06.jpg",
        quote: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
        rating: 5
        },
    ];

  // Group testimonials for carousel (3 per slide)
    const testimonialSlides = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        testimonialSlides.push(testimonials.slice(i, i + 3));
    }

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

    return (
        <div className="font-sans">
        {/* Hero Section - Fixed with proper background image */}
        <AboutHeroSection />

        {/* Main Content */}
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                {/* About Introduction */}
                <AboutIntroduction />

                {/* Our Team Section */}
                <AboutOurTeam />

                {/* Enhanced Testimonials Section - Wider with Borders */}
                <CustomerReview />

                {/* Enhanced Travel Blogs Section - Beautiful Cards */}
                <AboutBlogSection />
                </div>
            </section>

        {/* Instagram Section - Horizontal Scroll with Manual Navigation */}
        <FollowInstagram/>
        </div>
    );
};

export default Aboutus;
