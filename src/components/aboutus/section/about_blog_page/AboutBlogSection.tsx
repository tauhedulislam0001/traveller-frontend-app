import Link from "next/link";
import React, { useState, useEffect } from "react";

function AboutBlogSection() {
    const [isMounted, setIsMounted] = useState(false);

    const blogs = [
        { 
        id: 1, 
        title: "This Spanish city is a feast for the eyes: Travosy", 
        category: "Travel", 
        image: "/assets/images/blog/1.jpg",
        desc: "This is required when, for example, the final text is not yet available.",
        date: "Jan 15, 2024",
        readTime: "5 min read",
        author: "Travosy"
        },
        { 
        id: 2, 
        title: "New Zealand's South Island brims with majestic", 
        category: "Tour", 
        image: "/assets/images/blog/2.jpg",
        desc: "This is required when, for example, the final text is not yet available.",
        date: "Feb 22, 2024",
        readTime: "7 min read",
        author: "Travosy"
        },
        { 
        id: 3, 
        title: "When you visit the Eternal Rome City: Travosy", 
        category: "Tourist", 
        image: "/assets/images/blog/3.jpg",
        desc: "This is required when, for example, the final text is not yet available.",
        date: "Mar 10, 2024",
        readTime: "6 min read",
        author: "Travosy"
        },
    ];
    
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
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Travel Blogs & Inspiration</h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                Discover amazing travel stories, tips, and inspiration for your next adventure.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-8">
                {blogs.map((blog) => (
                <div key={blog.id} className="group">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col border border-gray-100 dark:border-slate-700">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-64">
                        <img 
                        src={blog.image} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        alt={blog.title}
                        />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                            {blog.category}
                        </span>
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Date Badge */}
                        <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-sm font-medium px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-slate-600">
                        {blog.date}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow">
                        {/* Meta Info */}
                        <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 mr-1.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {blog.readTime}
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 mr-1.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            by {blog.author}
                        </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                        <a href="#" className="hover:text-red-500">
                            {blog.title}
                        </a>
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                        {blog.desc}
                        </p>

                        {/* Read More Button */}
                        <div className="mt-auto">
                        <a 
                            href="#" 
                            className="inline-flex items-center text-red-500 font-semibold group-hover:text-red-600 transition-colors duration-300"
                        >
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
                <Link href="/blog">
                <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-red-600">
                View All Blogs
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default AboutBlogSection