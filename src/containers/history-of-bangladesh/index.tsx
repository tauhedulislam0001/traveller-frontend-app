import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const HistoryOfBangladesh: React.FC = () => {
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
                    <p className="text-gray-600 dark:text-gray-400">Loading History Information...</p>
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
                            <span className="text-yellow-300 text-lg">📜</span>
                            <span className="text-white font-medium text-sm uppercase tracking-wider">Explore</span>
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            History of <span className="text-yellow-300">Bangladesh</span>
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center gap-2 mb-5">
                            <div className="w-12 h-1 bg-yellow-300 rounded-full"></div>
                            <div className="w-6 h-1 bg-white/60 rounded-full"></div>
                            <div className="w-3 h-1 bg-white/40 rounded-full"></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                            From Ancient Bengal to Modern Independence - A Journey Through Time
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
                            <span className="text-yellow-300 text-sm font-medium">History of Bangladesh</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    
                    {/* History Introduction Section */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Historical Journey</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                                History of Bangladesh
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Bangladesh officially known as the <span className="font-semibold text-red-500">People's Republic of Bangladesh</span> is an independent nation located in South Asia. It makes up the eastern and largest portion of the ethnolinguistic region of Bengal. It is situated at the zenith of the Bay of Bengal and is bordered by Myanmar and India, and separated from Bhutan and Nepal by the thin Siliguri Corridor.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Present-day Bangladesh came out as a sovereign country in <span className="font-semibold text-red-500">1971</span> after breaking away and gaining independence from Pakistan in the Bangladesh liberation war. Its early history was characterized by internal fighting, a succession of Indian empires, and a scuffle between Buddhism and Hinduism for dominance.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                The borders of modern Bangladesh were formed after the partition of India and Bengal on <span className="font-semibold text-red-500">August 1947</span>, when the area became East Pakistan as a section of the newly established State of Pakistan following the Radcliff Line.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                The name Bangladesh was initially written as two words, Bangla Desh. Bangla is a keyword for both the Bengali language and the Bengal region. The exact origin of the term is, however, not known. Below, some of the key events in the history of Bangladesh have been explained in brief.
                            </p>
                        </div>
                    </div>

                    {/* Bangladesh War of Independence Section */}
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-1.5 mb-4">
                                    <span className="text-red-500 text-sm font-semibold">1971</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Bangladesh War of Independence
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    On <span className="font-semibold text-red-500">23 March 1971</span>, the Bangladeshi flag was raised for the first time. Operation Searchlight was, however, launched on <span className="font-semibold text-red-500">26 March 1971</span> by the Pakistani military junta who massacred Bengali politicians, students, intellectuals, military defectors, and civil servants during the 1971 Bangladesh genocide.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    During the liberation war, Bengali locals proclaimed a declaration of independence and created the <span className="font-semibold text-red-500">Mukti Bahini</span>, the Bangladeshi National Liberation Army. During the war, the army held Bengali's countryside and waged guerilla operations against the Pakistani forces.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    India offered support to the army during the war. The United States and the Soviet Union also sent naval forces to the Bengal Bay to offer support. The war lasted for nine months and it came to an end when the Pakistani military surrendered to the Bangladesh-India Allied Forces on <span className="font-semibold text-red-500">16th December 1971</span>.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-lg">
                                    <div className="h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                        <img 
                                            src="/assets/images/meet_bangladesh/history3.jpg" 
                                            alt="The Liberation War of Bangladesh - 1971"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/600x400/red/white?text=Liberation+War+1971";
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">The Liberation War of Bangladesh - 1971</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Post Independence Section */}
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-lg">
                                    <div className="h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                        <img 
                                            src="/assets/images/meet_bangladesh/history.jpg" 
                                            alt="Signing of Independence - 1971"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/600x400/green/white?text=Signing+of+Independence";
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Signing of Independence - 1971</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-1.5 mb-4">
                                    <span className="text-red-500 text-sm font-semibold">1971-1975</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Signing of Independence & Early Years
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    After gaining its independence, Bangladesh became a republic within the Commonwealth and a secular democracy. In <span className="font-semibold text-red-500">1973</span>, Bangladesh joined the OIC and the Non-Aligned Movement, and later joined the United Nations in <span className="font-semibold text-red-500">1974</span>.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    In 1973, Bangladesh, Pakistan and India signed a tripartite agreement calling for stability and peace in the sub-continent. The government at that time was led by Mujib who was assassinated together with the majority of his family members on <span className="font-semibold text-red-500">15 August 1975</span>. In the same year, two army uprisings took place and they led to a reorganized system of power.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Refugees Section */}
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-1.5 mb-4">
                                    <span className="text-red-500 text-sm font-semibold">1971</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Refugees Crisis 1971
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    The 1971 Bangladesh Liberation War created a massive refugee crisis. Millions of Bangladeshis fled to India to escape the violence and genocide perpetrated by the Pakistani military. The refugee camps became symbols of the humanitarian tragedy, and India's support for the refugees and the Mukti Bahini played a crucial role in the eventual victory and independence of Bangladesh.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-lg">
                                    <div className="h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                        <img 
                                            src="/assets/images/meet_bangladesh/history2.jpg" 
                                            alt="Refugees during the Liberation War - 1971"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/600x400/orange/white?text=Refugees+1971";
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Refugees during the Liberation War - 1971</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Political Era Section */}
                    <div className="mb-16">
                        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                Political Era & Leadership
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ziaur Rahman Era (1977-1981)</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        In 1977, Lieutenant General Ziaur Rahman took over the presidency and in 1979 he restored civilian rule and reinstated multi-party politics. He formed the Bangladesh National Party and promoted free markets. He also reinstated the country's foreign policy and sought out closer ties with the West. His tenure ended in 1981 when he was assassinated by the military.
                                    </p>
                                </div>
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hussain Muhammad Ershad Era (1982-1990)</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Lieutenant General Hussain Muhammad Ershad pursued executive reforms, including a devolution scheme which partitioned the nation into 64 districts and 5 divisions. In 1985, he held the founding summit of SAARC in Dhaka, bringing together 7 South Asian nations into a regional union. He also extended Bangladesh's road network and began significant projects, for instance, the Jamuna Bridge.
                                    </p>
                                </div>
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Khaleda Zia Era (1991-1996, 2001-2006)</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        In 1991, former first lady Khaleda Zia led the Bangladesh Nationalists Party and was elected as the first female Prime Minister in the country's history. BNP's tenure came to an end in October 2006 and a caretaker government worked to ensure elections.
                                    </p>
                                </div>
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sheikh Hasina Era (1996-2001, 2009-Present)</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        In 1996, the Awami League led by Sheikh Hasina came back to power after 20 years. In 1999, she held a trilateral summit between Bangladesh, Pakistan, and India and helped form the D8 grouping with Turkey. The Awami League won the 2008 general elections and has been leading since.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modern Bangladesh Section */}
                    <div className="mb-16">
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-3xl p-8 md:p-12 border border-red-200 dark:border-red-800">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl mb-4">
                                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Modern Bangladesh: Progress & Challenges
                                </h3>
                                <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-5">
                                    <div className="text-3xl mb-3">📈</div>
                                    <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Economic Progress</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Over the years, Bangladesh has reduced poverty significantly with the rate lowering from <span className="font-semibold">57% in 1990 to 25.6% in 2014</span>. Per-capita income has doubled and the country has acquired success in human development.
                                    </p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-5">
                                    <div className="text-3xl mb-3">⚠️</div>
                                    <h4 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">Remaining Challenges</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Bangladesh, however, still faces challenges of <span className="font-semibold">climate change, inequality, religious extremism, and unstable politics</span>.
                                    </p>
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

export default HistoryOfBangladesh;