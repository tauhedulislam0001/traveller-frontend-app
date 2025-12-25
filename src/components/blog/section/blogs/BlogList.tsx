import { BlogResponse } from "@redux/services/blog/type";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const BlogList: React.FC<{ data?: BlogResponse }> = ({ data }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [activePage, setActivePage] = useState(3); // Current active page
    const router = useRouter(); // Initialize router
    
    // Theme color
    const themeColor = "#fb2c36";

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Blogs...</p>
            </div>
        </div>
        );
    }

    return (
        <div>
            {/* Blog Grid */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10 gap-8">
                {data?.data.map((blog) => (
                <div key={blog.id} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-gray-800 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700 transition-all duration-300 border border-gray-200 dark:border-slate-700 cursor-pointer">
                    <Link href={`/blog-details/${blog.id}`} className="block">
                        {/* Single wrapper div for all content */}
                        <div>
                            <div className="relative overflow-hidden">
                                <img 
                                    src={blog.feature_image} 
                                    className="w-full h-56 object-cover group-hover:scale-105 duration-500" 
                                    alt={blog.title}
                                    loading="lazy"
                                    width={400}
                                    height={224}
                                />
                                <div className="absolute top-4 left-4">
                                    <span 
                                    className="text-white text-xs px-3 py-1.5 font-semibold rounded-full"
                                    style={{ backgroundColor: themeColor }}
                                    >
                                    {blog.category_name}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="mr-4">{blog.duration} min read</span>
                                    <span>by <span className="font-medium text-slate-900 dark:text-white">{blog.created_by_name}</span></span>
                                </div>

                                {/* Blog Title - Bold but NOT as Link (since whole card is clickable) */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-custom-red duration-300 block mb-3">
                                    {blog.title}
                                </h3>
                                
                                <p className="text-slate-600 dark:text-slate-400 mb-5 line-clamp-2">
                                    {blog.short_des}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-200 dark:border-slate-700">
                                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        {blog.views} views
                                    </div>
                                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        32 comments
                                    </div>
                                </div>

                                <div className="inline-flex items-center text-custom-red group-hover:text-red-600 font-semibold">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-slate-700">
                    <nav aria-label="Page navigation" className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                        {/* Previous Button */}
                        <div className="w-full md:w-auto order-1">
                            <button 
                                className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-gray-50 dark:bg-slate-700 hover:!bg-[#fb2c36] hover:!text-white text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all duration-300 border border-gray-200 dark:border-slate-600 hover:!border-[#fb2c36] group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </button>
                        </div>

                        {/* Page Numbers */}
                        <div className="order-3 md:order-2 w-full md:w-auto flex justify-center">
                            <div className="flex flex-wrap justify-center gap-2">
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageClick(page)}
                                        className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-semibold rounded-xl transition-all duration-300 border ${
                                            activePage === page
                                            ? 'text-white border-[#fb2c36] shadow-lg scale-105'
                                            : 'bg-gray-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-gray-200 dark:border-slate-600 hover:!bg-[#fb2c36] hover:!text-white hover:!border-[#fb2c36]'
                                        }`}
                                        style={activePage === page ? { backgroundColor: themeColor } : {}}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <span className="px-2 md:px-3 text-slate-500 dark:text-slate-400 flex items-center">...</span>
                                <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-semibold rounded-xl bg-gray-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-600 hover:!bg-[#fb2c36] hover:!text-white hover:!border-[#fb2c36] transition-all duration-300">
                                    10
                                </button>
                            </div>
                        </div>

                        {/* Next Button */}
                        <div className="w-full md:w-auto order-2 md:order-3">
                            <button 
                                className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-gray-50 dark:bg-slate-700 hover:!bg-[#fb2c36] hover:!text-white text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all duration-300 border border-gray-200 dark:border-slate-600 hover:!border-[#fb2c36] group"
                            >
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default BlogList;