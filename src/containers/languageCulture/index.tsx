import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const LanguageCulture: React.FC = () => {
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
                    <p className="text-gray-600 dark:text-gray-400">Loading Language & Culture Information...</p>
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
                            <span className="text-yellow-300 text-lg">🎭</span>
                            <span className="text-white font-medium text-sm uppercase tracking-wider">Discover</span>
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Language, Culture & <span className="text-yellow-300">Religion</span>
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center gap-2 mb-5">
                            <div className="w-12 h-1 bg-yellow-300 rounded-full"></div>
                            <div className="w-6 h-1 bg-white/60 rounded-full"></div>
                            <div className="w-3 h-1 bg-white/40 rounded-full"></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                            Experience the diverse linguistic heritage, vibrant culture, and religious harmony of Bangladesh
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
                            <span className="text-yellow-300 text-sm font-medium">Language, Culture & Religion</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    
                    {/* Language Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4">
                                <span className="text-3xl">🗣️</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Language
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-slate-800 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                The official language of Bangladesh is <span className="font-semibold text-blue-600 dark:text-blue-400">Bangla (or, Bengali)</span>. Dated even before the birth of Christ, Bangla was widely spoken in this region, and now spoken by more than <span className="font-semibold">200 million people</span> all over the world. It has various dialects with different accents, pronunciations and minor grammatical changes in different regions of Bangladesh.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Based on usage, Bangla is divided into two forms: <span className="font-semibold text-blue-600 dark:text-blue-400">sadhu bhasha</span> (formal language) and <span className="font-semibold text-blue-600 dark:text-blue-400">cholito bhasha</span> (common language). If opting for a second language, most Bangladeshi people choose English as they have practical efficiency in English and its interactive usage in common situations.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Apart from our official language, a significant number of <span className="font-semibold text-blue-600 dark:text-blue-400">tribal languages</span> are spoken by the tribes of Bangladesh. The major and well-known tribal languages are Garo, Khashia, Magh, Manipuri, Munda, Chakma, Tipra, etc.
                            </p>
                        </div>
                    </div>

                    {/* Culture Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-4">
                                <span className="text-3xl">🎨</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Culture
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Bangladesh has a rich and diverse culture which is reflected in the architecture, literature, music, painting, clothing, discourse, etc. Even in this era of rock 'n' roll, Bangladeshi culture is still being cherished and respected by people all over the world. Even the culture of the tribes is rich and diverse too.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    <span className="font-semibold text-green-600 dark:text-green-400">Clothing</span>, one of the most important aspects of the culture of Bangladesh, defines the Bangladeshi people very skillfully. <span className="font-semibold text-green-600 dark:text-green-400">Saree</span> — a finely embroidered cloth worn by Bangladeshi women and made by the skilled hands of Bangladeshi artisans — is now a global fashion trend.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-green-600 dark:text-green-400">Festivals</span>, held throughout the year with great zeal and zest, play a significant role in our culture. Some festivals are so intensely rooted in our cultural and social base that they are still being continued after centuries.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Some festivals are based on social and political significances marking our communal and national value, some are religious, and some are even observed seasonally. Bangladeshi people have so many reasons to cheer their life and soul.
                                </p>
                                <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6 border-l-4 border-green-500 mt-4">
                                    <p className="text-gray-800 dark:text-gray-200 font-medium italic">
                                        "This is why this land is called the Land of Festivals."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Religion Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-4">
                                <span className="text-3xl">🕊️</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Religion
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/10 dark:to-slate-800 rounded-3xl p-8 md:p-12 border border-purple-200 dark:border-purple-800">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                In the matter of faith and belief, the majority of the Bangladeshi population is <span className="font-semibold text-purple-600 dark:text-purple-400">Muslims</span>. The remaining population consists of Hindus, Buddhists, Christians, and others. Even though religion is one of the major things that constitutes human identity, in Bangladesh, there exists no boundary between people of various religions.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                In happiness, sadness, or even celebration, we live here like the perpetual siblings of a common motherland. With some powerful Islamic architectural heritage, Muslims in Bangladesh are unique for their peaceful values and devotions.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-5">
                                    <h4 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">🛕 Hinduism</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        A century-old traditional root and continuing faith is still keeping the Hindu culture and ritual in Bangladesh as unique as in the neighboring country.
                                    </p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-5">
                                    <h4 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">☸️ Buddhism</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        The age-old background of Buddhism in Bangladesh is clearly noticeable in many of our archaeological wonders. The ritualistic practice of Buddhism is still intact and as astonishing as in many other countries.
                                    </p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-5 md:col-span-2">
                                    <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">✝️ Christianity</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Even though the era of Christianity in Bangladesh started during the late sixteenth to early seventeenth century, the union and togetherness of the Bangladeshi Christian population is well-built; not to mention the togetherness as one nation is unbroken.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Religious Harmony Section */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-3xl p-8 md:p-12 border border-red-200 dark:border-red-800 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
                                <span className="text-4xl">🤝</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Religious Harmony in Bangladesh
                            </h3>
                            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
                                Bangladesh is a shining example of religious harmony where people of all faiths celebrate each other's festivals together. 
                                This unity in diversity is the cornerstone of Bangladeshi culture and society.
                            </p>
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

export default LanguageCulture;