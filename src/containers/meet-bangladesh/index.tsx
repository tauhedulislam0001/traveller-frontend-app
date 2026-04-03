import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const MeetBangladesh: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    const aboutCards = [
        // {
        //     id: 1,
        //     title: "Meet Bangladesh",
        //     description: "Discover the beauty, culture, and hospitality of Bangladesh - the land of rivers and natural wonders.",
        //     icon: "🇧🇩",
        //     link: "/meet-bangladesh",
        //     bgColor: "from-red-500 to-orange-500"
        // },
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

    // Bangladesh scenic images
    const bangladeshImages = [
        { id: 1, src: "/assets/images/meet_bangladesh/sundarban.avif", alt: "Sundarbans Mangrove Forest", title: "Sundarbans" },
        { id: 2, src: "/assets/images/meet_bangladesh/cox_seach_beach.avif", alt: "Cox's Bazar Sea Beach", title: "Cox's Bazar" },
        { id: 3, src: "/assets/images/meet_bangladesh/saint_martin.jpg", alt: "Saint Martin's Island", title: "Saint Martin's" },
        { id: 4, src: "/assets/images/meet_bangladesh/bandarban_sajke.jpg", alt: "Bandarban Hill Tracts", title: "Bandarban" },
        { id: 5, src: "/assets/images/meet_bangladesh/rangamati.jpg", alt: "Rangamati Lake City", title: "Rangamati" },
        { id: 6, src: "/assets/images/meet_bangladesh/kuakata.jpg", alt: "Kuakata Sea Beach", title: "Kuakata" }
    ];

    // River images
    const riverImages = [
        { id: 1, src: "/assets/images/meet_bangladesh/padma.jpeg", alt: "River Life in Bangladesh" },
        { id: 2, src: "/assets/images/meet_bangladesh/megna.webp", alt: "Fishing in Bangladeshi Rivers" },
        { id: 3, src: "/assets/images/meet_bangladesh/jamuna.webp", alt: "Boat Journey on River" },
        { id: 4, src: "/assets/images/meet_bangladesh/kornofuli.jpg", alt: "Traditional Boat" }
    ];

    // People images
    const peopleImages = [
        { id: 1, src: "/assets/images/meet_bangladesh/shatgomvuj.avif", alt: "Friendly Bangladeshi People" },
        { id: 2, src: "/assets/images/meet_bangladesh/noukaimage.avif", alt: "Bangladeshi Culture" },
        { id: 3, src: "/assets/images/meet_bangladesh/forest.avif", alt: "Welcoming Smiles" }
    ];

    // National Symbols
    const nationalSymbols = [
        { id: 1, name: "National Flag", icon: "🇧🇩", image: null },
        { id: 2, name: "National Emblem", icon: null, image: "/assets/images/meet_bangladesh/national_emblade.png" },
        { id: 3, name: "Government Seal", icon: null, image: "/assets/images/meet_bangladesh/government_seal.png" },
        { id: 4, name: "Bangladesh Map", icon: "🗺️", image: null },
        { id: 5, name: "Orthographic Projection", icon: null, image: "/assets/images/meet_bangladesh/Bangladesh_orthographic_projection.png" }
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
            {/* Hero Section - Theme Wise Redesign */}
            <section className="relative w-full overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700"></div>
                
                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-30 -mt-30"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full"></div>
                
                {/* Decorative Dots Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }}></div>
                
                <div className="relative container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Welcome Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                            <span className="text-yellow-300 text-lg">🇧🇩</span>
                            <span className="text-white font-medium text-sm uppercase tracking-wider">Welcome to</span>
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Meet <span className="text-green-700">Bangladesh</span>
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center gap-2 mb-5">
                            <div className="w-12 h-1 bg-yellow-300 rounded-full"></div>
                            <div className="w-6 h-1 bg-white/60 rounded-full"></div>
                            <div className="w-3 h-1 bg-white/40 rounded-full"></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                            Discover the Heart of Bengal - A Land of Natural Beauty & Rich Heritage
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
                                <div className="text-xl md:text-2xl font-bold text-yellow-300">700+</div>
                                <div className="text-xs text-white/70">Rivers</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
                                <div className="text-xl md:text-2xl font-bold text-yellow-300">120km</div>
                                <div className="text-xs text-white/70">Longest Beach</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
                                <div className="text-xl md:text-2xl font-bold text-yellow-300">3</div>
                                <div className="text-xs text-white/70">UNESCO Sites</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
                                <div className="text-xl md:text-2xl font-bold text-yellow-300">4+</div>
                                <div className="text-xs text-white/70">Seasons</div>
                            </div>
                        </div>
                        
                        {/* Breadcrumb Navigation - Inside Hero Section */}
                        <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Link href="/" className="text-white hover:text-yellow-300 text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <Link href="/about-bangladesh" className="text-white hover:text-yellow-300 text-sm font-medium transition-colors">
                                About Bangladesh
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-yellow-300 text-sm font-medium">Meet Bangladesh</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    
                    {/* Meet Bangladesh Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Discover</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                                Meet Bangladesh
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                    Bangladesh is a South-Asia greenest bijou - a land plaited with rivers & smiling peoples and exhilarating mix with fascinating history, vibrant cultures, panoramic beauties, historical ruins, flora and fauna, hills and forests, sandy sea beaches and wildlife, is waiting to welcome you.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                    The world's longest sandy beach - <span className="font-semibold text-red-500">Cox's Bazar</span>, the world's single largest mangrove forest - <span className="font-semibold text-red-500">Sundarbans Forest</span> - the home of man-eating tigers, Oceanic <span className="font-semibold text-red-500">Kuakata</span>, Coral island - <span className="font-semibold text-red-500">Saint Martin's</span>, the home of colorful Indigenous group Chittagong Hill Tracts <span className="font-semibold text-red-500">Bandarban</span> and Lake City <span className="font-semibold text-red-500">Rangamati</span>, the scenic beauty of the hilly regions, historic and archaeological sites etc. are lifetime experiences for travelers.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Bangladesh, a land for tourists, researchers, and wildlife and nature lovers.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {bangladeshImages.map((img) => (
                                    <div key={img.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                        <img 
                                            src={img.src} 
                                            alt={img.alt}
                                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/600x400/red/white?text=Image+Not+Found";
                                            }}
                                        />
                                        <div className="p-2 bg-gray-50 dark:bg-slate-800 text-center">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{img.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* A Land of Rivers Section */}
                    <div className="mb-20 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4">
                                <span className="text-3xl">🌊</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                A Land of Rivers
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Bangladesh is a country braided together by more than <span className="font-semibold text-blue-600 dark:text-blue-400">700 rivers</span>, creating a green landscape that will surprise you. This is one of the world's most densely populated countries, but its charm will surpass the turbulence.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Whatever you have imagined about the country, if you go through the river, your perspective will let you point to a graceful experience. Not only the beauty of waves and the tides, the lives surrounding the river will fill your empty mind and help you to be merged with people.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    The lifestyle, fishing techniques, small bazaar beside rivers, making small boats, cultivation on the bank, festivals and cultural events, and the smiling faces of riverside people will never disappoint you.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-blue-600 dark:text-blue-400">
                                    So if you want to know the riverain Bangladesh, get a plan to jump to the wave. Boat small or big will help you to explore the country with the same pleasure.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {riverImages.map((img) => (
                                    <div key={img.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <img 
                                            src={img.src} 
                                            alt={img.alt}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/800x500/blue/white?text=River+Image";
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Welcoming People Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Welcoming People
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                                {peopleImages.map((img) => (
                                    <div key={img.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <img 
                                            src={img.src} 
                                            alt={img.alt}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/600x400/green/white?text=People+Image";
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="order-1 lg:order-2">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                    Bangladeshi culture is famously <span className="font-semibold text-green-600 dark:text-green-400">welcoming and hospitable</span>. If you enjoy making friends, blending with people, and traveling without any disturbance, this is apparently the best country to explore. You could be served by being the center of attention very easily here, with full of joy and smiling faces.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Facts Section */}
                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl mb-4">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Quick Facts
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                        </div>

                        {/* National Symbols Grid - 5 items in one row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                            {nationalSymbols.map((symbol) => (
                                <div key={symbol.id} className="text-center p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-20 h-20 mx-auto mb-2 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                        {symbol.icon ? (
                                            <span className="text-4xl">{symbol.icon}</span>
                                        ) : (
                                            <img 
                                                src={symbol.image || ""} 
                                                alt={symbol.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = "https://placehold.co/80x80/red/white?text=" + symbol.name.charAt(0);
                                                }}
                                            />
                                        )}
                                    </div>
                                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{symbol.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Facts Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Official Name:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">The People's Republic of Bangladesh</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">State Language:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">Bengali</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Capital:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">Dhaka</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Nationality:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">Bangladeshi</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Currency:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">Taka (TK)</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Area:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">56,977 sq. miles / 147,570 sq. km</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Territorial Water:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">200 nautical miles</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Population (2016):</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">162,951,560</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Density:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">1,106/ sq. km</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">State Religion:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">Islam (with religious harmony)</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Drives:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">On the left</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Time Zone:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">UTC +6 (BST)</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">Calling Code:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">+880</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3">
                                <span className="font-bold text-red-500">ISO 3166 Code:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">BD</span>
                            </div>
                            <div className="border-b border-gray-200 dark:border-slate-700 py-3 col-span-1 md:col-span-2 lg:col-span-1">
                                <span className="font-bold text-red-500">Geographical Location:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">North, West & South-India, East-India and Myanmar</span>
                            </div>
                        </div>

                        {/* National Anthem */}
                        <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/10 rounded-xl border-l-4 border-red-500">
                            <p className="font-semibold text-red-500 mb-2">National Anthem:</p>
                            <p className="text-gray-700 dark:text-gray-300 italic">"Amar Sonar Bangla" - Written by Nobel Laureate Rabindranath Tagore (first ten lines)</p>
                        </div>
                    </div>

                    {/* About Bangladesh Cards Section */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Explore More</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                                Discover Bangladesh
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Dive deeper into the heart of Bangladesh and explore its fascinating aspects
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {aboutCards.map((card) => (
                                <Link href={card.link} key={card.id}>
                                    <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                        
                                        <div className="p-8 md:p-10">
                                            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                                                <span className="text-5xl">{card.icon}</span>
                                            </div>
                                            
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                                                {card.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                                {card.description}
                                            </p>
                                            
                                            <div className="flex items-center gap-2 text-red-500 font-semibold group-hover:gap-3 transition-all duration-300">
                                                <span>Learn More</span>
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                        
                                        <div className={`h-1 bg-gradient-to-r ${card.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FollowInstagram />
        </div>
    );
};

export default MeetBangladesh;