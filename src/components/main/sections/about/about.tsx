import React, {useEffect, useState }from 'react'


function AboutSection() {
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
            <p className="text-gray-600 dark:text-gray-400">Loading Travel Agency...</p>
            </div>
        </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 lg:gap-12 relative">
            <div className="md:col-span-5 relative">
                <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    className="mx-auto rounded-2xl shadow-xl w-full max-w-md" 
                    alt="About Travosy"
                    loading="lazy"
                />
                
                <div className="absolute bottom-6 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 w-60">
                    <div className="flex items-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-custom-red/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-custom-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a5.5 5.5 0 01-5.5 5.5" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Happy Visitors</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">4,589+</p>
                    </div>
                    </div>
                </div>

                <div className="absolute top-6 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 w-64">
                    <div className="flex items-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-custom-red/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-custom-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Travel Packages</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">50+</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="md:col-span-7">
                <div className="lg:ml-8">
                <h3 className="mb-6 md:text-3xl text-2xl font-bold text-slate-900 dark:text-white">
                    World's Best Travel Agency
                    <span className="block text-custom-red mt-2">Travosy</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                    Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Travosy network, and much more with just a few taps.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                    We provide exceptional travel experiences with personalized service, ensuring every journey is memorable and stress-free. Our expert team handles all the details so you can focus on making memories.
                </p>
                <a href="#" className="inline-flex items-center px-6 py-3 bg-custom-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-offset-2">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutSection