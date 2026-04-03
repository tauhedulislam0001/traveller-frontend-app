import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import AboutHeroSection from "@components/aboutus/section/hero_section/AboutHeroSection";
import React, { useState, useEffect } from "react";

export const Aboutus: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

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
            <AboutHeroSection />

            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    
                    {/* Winning Awards Section */}
                    <div className="text-center mb-24">
                        <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Achievements</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                            Our Winning Awards
                        </h2>
                        <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-12">
                            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-800 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-red-500/20 hover:shadow-lg">
                                <img 
                                    src="/assets/images/winning_awards/winners_badge.png" 
                                    alt="Winners Badge" 
                                    className="h-28 md:h-36 w-auto object-contain"
                                />
                            </div>
                            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-800 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-red-500/20 hover:shadow-lg">
                                <img 
                                    src="/assets/images/winning_awards/wta_steal.png" 
                                    alt="WTA Steal" 
                                    className="h-28 md:h-36 w-auto object-contain"
                                />
                            </div>
                        </div>
                        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8 md:p-10 shadow-md hover:shadow-red-500/20 hover:shadow-lg transition-all duration-300">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                <span className="font-bold text-red-500">Pathfriend Tour Operator</span> is a leading local tour operator in Bangladesh, 
                                won <span className="font-bold text-red-500">World Travel Award 2020-2023</span> & 
                                <span className="font-bold text-red-500"> Travel and Hospitality Award 2021</span> for excellent services. 
                                We started our journey in 2000. We present the notable difference between Travel Service and <span className="italic font-medium">'Hospitality'</span>.
                            </p>
                        </div>
                    </div>

                    {/* Why Us Section */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Benefits</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                                Why Choose Us
                            </h2>
                            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Free Cancellation</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Free cancellation & booking policy for any tour. Cancel or book the day before it starts.</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Safe & Sustainable</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Safety on every step with healthy food. Focus on sustainability and eco-friendly travel.</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quality Assurance</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Best tour plans, high-rated accommodations, transportations, and quality food.</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Veteran Agency</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Years of experience, good local relationships, 100% secured and conductive.</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Local Experiences</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Traditional attractions, foods, rides, and festivals of Bangladeshi culture.</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Group Tour Offer</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Best rates for group tours with private arrangements for comfort.</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Private & Small Group</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Private trips or small groups up to 6 people for better experience.</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Best Price Deal</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Guaranteed lower prices with direct local owners and services.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Motive Section */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-10 md:p-14 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-red-500/20 hover:shadow-lg transition-all duration-300">
                        <div className="text-center mb-10">
                            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Mission</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                                Our Motive
                            </h2>
                            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                We are fully experienced in private and group tours in Bangladesh, offering solutions to make your travel pleasant. 
                                We focus on meeting expectations of every guest and help organize your stay in the best way.
                            </p>
                            <p>
                                Our unique custom tours give you the opportunity to see Bangladesh from unusual viewpoints. 
                                We provide complete information before you make any travel arrangements.
                            </p>
                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-500 mt-6">
                                <p className="text-gray-800 dark:text-gray-200 font-medium">
                                    Our aim is to make your stay in Bangladesh an unforgettable experience. We also invite cooperation from travel agencies worldwide who wish to work with high-quality services in Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FollowInstagram />
        </div>
    );
};

export default Aboutus;