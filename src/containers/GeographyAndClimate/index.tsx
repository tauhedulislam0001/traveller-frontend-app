import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const GeographyAndClimate: React.FC = () => {
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
                    <p className="text-gray-600 dark:text-gray-400">Loading Geography & Climate Information...</p>
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
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
                            <span className="text-yellow-300 text-lg">🌏</span>
                            <span className="text-white font-medium text-sm uppercase tracking-wider">Explore</span>
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Geography & <span className="text-yellow-300">Climate</span>
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center gap-2 mb-5">
                            <div className="w-12 h-1 bg-yellow-300 rounded-full"></div>
                            <div className="w-6 h-1 bg-white/60 rounded-full"></div>
                            <div className="w-3 h-1 bg-white/40 rounded-full"></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                            Discover the unique geographical features, rivers, seasons, and weather patterns of Bangladesh
                        </p>
                        
                        {/* Breadcrumb Navigation */}
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
                            <span className="text-yellow-300 text-sm font-medium">Geography & Climate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    
                    {/* Geography Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4">
                                <span className="text-3xl">🗺️</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Geography of Bangladesh
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-slate-800 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Bangladesh has an area of approximately <span className="font-semibold text-blue-600 dark:text-blue-400">147,540 square kilometers</span> in the South Asian region. The country is surrounded by India completely in the West, North, and partially in the East sharing a total of <span className="font-semibold">4,053 kilometer</span> border, while the rest <span className="font-semibold">193 kilometers</span> of the Eastern side is bordered by Myanmar. The Bay of Bengal retains its boundary in the South, where we have a <span className="font-semibold">580 kilometer</span> coastline.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                About half the total area is actively deltaic and never higher than <span className="font-semibold text-blue-600 dark:text-blue-400">10 meters</span> from mean sea level. This flat low-lying land is very fertile and is suitable for rice cultivation. The vast river delta area is home to the dominant plains culture.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                In the northeast and the southeast, the land is more hilly and dry, and tea is grown. The hilly areas of the northeast and southeast are occupied by much smaller tribal groups.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                <span className="font-semibold text-blue-600 dark:text-blue-400">Ganges and Brahmaputra</span> are the two main rivers of Bangladesh, carrying tons of silts from the mighty Himalayas that eventually fertilize the plain. Apart from these two rivers, we have hundreds of others comprising a very wide and complex river system.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 mt-6">
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">🌳</div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Sundarbans</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Largest mangrove forest in the world, situated in the southwest</p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">⛰️</div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Chittagong Hill Tracts</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Extensive hardwood forests</p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">🌲</div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Lawachara & Sal Forest</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Semi-evergreen forest in Sri Mangal and Sal forest in Bhawal, Modhupur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Climate Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-4">
                                <span className="text-3xl">☀️</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Climate of Bangladesh
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/10 dark:to-slate-800 rounded-3xl p-8 md:p-12 border border-orange-200 dark:border-orange-800">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Bangladesh has a <span className="font-semibold text-orange-600 dark:text-orange-400">tropical monsoon climate</span> characterized by wide seasonal variations in rainfall, high temperatures, and high humidity. Regional climatic differences in this flat country are minor.
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 text-center">
                                    <div className="text-3xl mb-2">☀️</div>
                                    <h4 className="font-bold text-red-600 dark:text-red-400">Summer</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">March to June<br/>Hot & muggy</p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 text-center">
                                    <div className="text-3xl mb-2">🌧️</div>
                                    <h4 className="font-bold text-blue-600 dark:text-blue-400">Monsoon</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">June to November<br/>Hot, humid & rainy</p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 text-center">
                                    <div className="text-3xl mb-2">❄️</div>
                                    <h4 className="font-bold text-cyan-600 dark:text-cyan-400">Winter</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">December to February<br/>Warm-hot & dry</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                In general, maximum summer temperatures range between <span className="font-semibold text-orange-600 dark:text-orange-400">38 and 41 °C (100.4 and 105.8 °F)</span>. April is the hottest month in most parts of the country. January is the coolest (but still hot) month, when the average temperature for most of the country is <span className="font-semibold">16–20 °C (61–68 °F)</span> during the day and around <span className="font-semibold">10 °C (50 °F)</span> at night.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Winds are mostly from the north and northwest in the winter, blowing gently over the country. From March to May, violent thunderstorms, called <span className="font-semibold text-orange-600 dark:text-orange-400">"northwesters"</span>, produce winds of up to 60 kilometers per hour (37.3 mph).
                            </p>
                            <div className="bg-orange-100 dark:bg-orange-900/20 rounded-xl p-6 border-l-4 border-orange-500 mt-4">
                                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                    <span className="font-semibold text-orange-600 dark:text-orange-400">Heavy rainfall</span> is characteristic of Bangladesh that helps irrigation in the rice fields during the burning months of June – August. About <span className="font-semibold">80% of Bangladesh's rain</span> falls during the monsoon season.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rainfall Section */}
                    <div className="mb-20">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-1.5 mb-4">
                                    <span className="text-blue-500 text-sm font-semibold">Rainfall</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Rainfall Distribution
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Most parts of the country receive at least <span className="font-semibold text-blue-600 dark:text-blue-400">2,300 mm (90.6 in)</span> of rainfall per year, but because of its location just south of the foothills of the Himalayas, <span className="font-semibold">Sylhet</span> in northeastern Bangladesh receives the greatest average precipitation.
                                </p>
                                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-5 border-l-4 border-blue-500">
                                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                                        Annual rainfall in the Sylhet region ranges between <span className="font-semibold text-blue-600 dark:text-blue-400">3,280 and 4,780 mm (129.1 and 188.2 in)</span>.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-lg">
                                    <div className="h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                        <img 
                                            src="/assets/images/meet_bangladesh/Rainfall.jpg" 
                                            alt="Bangladesh Rainfall Map"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/600x400/blue/white?text=Bangladesh+Rainfall+Map";
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Annual Rainfall Distribution in Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Geographical Features Section */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 rounded-3xl p-8 md:p-12 border border-cyan-200 dark:border-cyan-800">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl mb-4">
                                    <span className="text-3xl">🏞️</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    Key Geographical Features
                                </h3>
                                <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🌊</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Ganges River</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">One of the two main rivers carrying silts from the Himalayas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🏔️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Brahmaputra River</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Second main river, essential for the fertility of the plains</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🌿</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Sundarbans</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">World's largest mangrove forest, UNESCO World Heritage site</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">⛰️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Chittagong Hill Tracts</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Hilly region with extensive hardwood forests</p>
                                    </div>
                                </div>
                            </div>
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

export default GeographyAndClimate;