import Link from "next/link";
import React, { useState, useEffect } from "react";

const Service: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    const services = [
        { id: 1, title: "Permissions", description: "All necessary permits and permissions", icon: "📋" },
        { id: 2, title: "Camera Rental", description: "ARRI, RED and other filmmaking pro Camera", icon: "🎥" },
        { id: 3, title: "Location Management", description: "Best locations for your film", icon: "📍" },
        { id: 4, title: "Accommodation", description: "Comfortable stay for your crew", icon: "🏨" },
        { id: 5, title: "Transportation", description: "Reliable transport services", icon: "🚌" },
        { id: 6, title: "Food", description: "Quality catering services", icon: "🍽️" },
        { id: 7, title: "Logistics Support", description: "Track, Steady Cam, Crane, Drone & other equipment", icon: "📦" },
        { id: 8, title: "Production Manager & Support", description: "Professional management support", icon: "👨‍💼" },
        { id: 9, title: "Professional Crew Support", description: "Experienced crew members", icon: "👥" },
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-slate-900">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900">
            {/* Hero Section - Red 500 Background */}
            <div className="relative bg-red-500 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Filmmaking Support in Bangladesh
                    </h1>
                    <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                        Pathfriend Tours offering you the best support for any kind of filmmaking in Bangladesh. 
                        We have worked for some professional films including feature film, Documentary film and 
                        Wildlife projects in around Bangladesh.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Our Support Services
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Comprehensive support for all your filmmaking needs
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-red-500/30 hover:-translate-y-1 group"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-red-500">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            {service.title}
                                        </h3>
                                        {service.description && (
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {service.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Alternative CTA with button tags instead of Link */}
                        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Create Magic?
                            </h3>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Contact us for your filmmaking support and experience the quality management.
                            </p>
                            {/* Alternative: Using regular anchor tags with Next.js Link */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" passHref legacyBehavior>
                                    <a className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-500 font-semibold rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-200">
                                        Contact Us
                                    </a>
                                </Link>
                                <Link href="/aboutus" passHref legacyBehavior>
                                    <a className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-500 transition-all duration-200">
                                        View Portfolio
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;