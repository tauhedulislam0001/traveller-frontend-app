import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const AboutBangladesh: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    const aboutCards = [
        {
            id: 1,
            title: "Meet Bangladesh",
            description: "Discover the beauty, culture, and hospitality of Bangladesh - the land of rivers and natural wonders.",
            icon: "🇧🇩",
            link: "/meet-bangladesh",
            bgColor: "from-red-500 to-orange-500"
        },
        {
            id: 2,
            title: "History of Bangladesh",
            description: "Explore the rich historical journey from ancient Bengal to modern independent Bangladesh.",
            icon: "📜",
            link: "/history-of-bangladesh",
            bgColor: "from-amber-500 to-red-500"
        },
        {
            id: 3,
            title: "Language, Culture & Religion",
            description: "Experience the diverse linguistic heritage, vibrant culture, and religious harmony of Bangladesh.",
            icon: "🎭",
            link: "/language-culture-religion-bangladesh",
            bgColor: "from-green-500 to-teal-500"
        },
        {
            id: 4,
            title: "Geography & Climate",
            description: "Learn about Bangladesh's unique geographical features, rivers, seasons, and weather patterns.",
            icon: "🌏",
            link: "/geography-and-climate-bangladesh",
            bgColor: "from-blue-500 to-cyan-500"
        }
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Bangla Information...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="relative w-full py-36 bg-top bg-no-repeat bg-cover min-h-[500px]">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/bg/cta.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                
                <div className="container relative mx-auto px-4">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl leading-normal tracking-wider font-semibold text-white">
                            About Bangladesh
                        </h3>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-4">
                            Discover the Heart of Bengal - A Land of Natural Beauty & Rich Heritage
                        </p>
                    </div>
                </div>
                
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="inline-block text-base text-white/50 mx-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">
                            About Bangladesh
                        </li>
                    </ul>
                </div>
            </section>

            {/* About Bangladesh Cards Section */}
            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Explore Bangladesh</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                            Discover Bangladesh
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Dive deep into the heart of Bangladesh and explore its fascinating aspects
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
                        {aboutCards.map((card) => (
                            <Link href={card.link} key={card.id}>
                                <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    
                                    <div className="p-8 md:p-10">
                                        {/* Icon */}
                                        <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                                            <span className="text-5xl">{card.icon}</span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                            {card.description}
                                        </p>
                                        
                                        {/* Read More Link */}
                                        <div className="flex items-center gap-2 text-red-500 font-semibold group-hover:gap-3 transition-all duration-300">
                                            <span>Learn More</span>
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative Border Bottom */}
                                    <div className={`h-1 bg-gradient-to-r ${card.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Additional Information Section */}
                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl mb-4">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Why Visit Bangladesh?
                            </h3>
                            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <div className="text-3xl mb-2">🏔️</div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium">World's Largest Mangrove Forest</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Sundarbans - UNESCO World Heritage</p>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl mb-2">🏖️</div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium">Longest Unbroken Sea Beach</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Cox's Bazar - 120 km stretch</p>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl mb-2">🍛</div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium">Rich Culinary Heritage</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Authentic Bengali Cuisine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FollowInstagram />
        </div>
    );
};

export default AboutBangladesh;