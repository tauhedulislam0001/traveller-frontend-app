import { BlogResponse } from "@redux/services/blog/type";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";

const BlogList: React.FC<{ data?: BlogResponse; filteredData?: BlogResponse; searchTerm?: string }> = ({ 
    data, 
    filteredData,
    searchTerm 
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const themeColor = "#fb2c36";
    
    // Use useMemo to prevent unnecessary recalculations
    const blogs = useMemo(() => {
        if (filteredData?.data && filteredData.data.length > 0) {
            return filteredData.data;
        }
        if (data?.data && data.data.length > 0) {
            return data.data;
        }
        return [];
    }, [filteredData, data]);

    useEffect(() => {
        setIsMounted(true);
        setActivePage(1); // Reset to page 1 when blogs change
    }, [blogs.length]);

    const itemsPerPage = 6;
    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogs = blogs.slice(startIndex, endIndex);

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevPage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNextPage = () => {
        if (activePage < totalPages) {
            setActivePage(activePage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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

    // No results state
    if (blogs.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="mb-4">
                    <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No blogs found</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    {searchTerm ? `No results found for "${searchTerm}"` : 'No blog posts available at the moment.'}
                </p>
            </div>
        );
    }

    return (
        <div>
            {/* Blog Grid */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10 gap-8">
                {currentBlogs.map((blog) => (
                    <div key={blog.id} className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-gray-800 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700 transition-all duration-300 border border-gray-200 dark:border-slate-700 cursor-pointer">
                        <Link href={`/blog-details/${blog.id}`} className="block">
                            <div>
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={blog.feature_image || blog.featured_image} 
                                        className="w-full h-56 object-cover group-hover:scale-105 duration-500" 
                                        alt={blog.title}
                                        loading="lazy"
                                        width={400}
                                        height={224}
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://via.placeholder.com/800x400?text=No+Image';
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span 
                                            className="text-white text-xs px-3 py-1.5 font-semibold rounded-full"
                                            style={{ backgroundColor: themeColor }}
                                        >
                                            {blog.category_name || 'Travel'}
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

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-custom-red duration-300 block mb-3">
                                        {blog.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-slate-400 mb-5 line-clamp-2">
                                        {blog.short_des}
                                    </p>

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

            {/* Pagination - Only show if there are multiple pages */}
            {totalPages > 1 && (
                <div className="mt-12">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-slate-700">
                        <nav aria-label="Page navigation" className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                            {/* Previous Button */}
                            <div className="w-full md:w-auto order-1">
                                <button 
                                    onClick={handlePrevPage}
                                    disabled={activePage === 1}
                                    className={`w-full md:w-auto flex items-center justify-center px-6 py-3 bg-gray-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all duration-300 border border-gray-200 dark:border-slate-600 ${
                                        activePage !== 1 
                                            ? 'hover:!bg-[#fb2c36] hover:!text-white hover:!border-[#fb2c36] group cursor-pointer' 
                                            : 'opacity-50 cursor-not-allowed'
                                    }`}
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
                                    {(() => {
                                        const pages = [];
                                        const maxVisible = 5;
                                        let startPage = Math.max(1, activePage - 2);
                                        let endPage = Math.min(totalPages, startPage + maxVisible - 1);
                                        
                                        if (endPage - startPage + 1 < maxVisible) {
                                            startPage = Math.max(1, endPage - maxVisible + 1);
                                        }
                                        
                                        for (let i = startPage; i <= endPage; i++) {
                                            pages.push(i);
                                        }
                                        
                                        if (startPage > 1) {
                                            pages.unshift('...');
                                            pages.unshift(1);
                                        }
                                        
                                        if (endPage < totalPages) {
                                            pages.push('...');
                                            pages.push(totalPages);
                                        }
                                        
                                        return pages.map((page, idx) => (
                                            page === '...' ? (
                                                <span key={`dots-${idx}`} className="px-2 md:px-3 text-slate-500 dark:text-slate-400 flex items-center">...</span>
                                            ) : (
                                                <button
                                                    key={page}
                                                    onClick={() => handlePageClick(page as number)}
                                                    className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-semibold rounded-xl transition-all duration-300 border ${
                                                        activePage === page
                                                            ? 'text-white border-[#fb2c36] shadow-lg scale-105'
                                                            : 'bg-gray-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-gray-200 dark:border-slate-600 hover:!bg-[#fb2c36] hover:!text-white hover:!border-[#fb2c36]'
                                                    }`}
                                                    style={activePage === page ? { backgroundColor: themeColor } : {}}
                                                >
                                                    {page}
                                                </button>
                                            )
                                        ));
                                    })()}
                                </div>
                            </div>

                            {/* Next Button */}
                            <div className="w-full md:w-auto order-2 md:order-3">
                                <button 
                                    onClick={handleNextPage}
                                    disabled={activePage === totalPages}
                                    className={`w-full md:w-auto flex items-center justify-center px-6 py-3 bg-gray-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all duration-300 border border-gray-200 dark:border-slate-600 ${
                                        activePage !== totalPages 
                                            ? 'hover:!bg-[#fb2c36] hover:!text-white hover:!border-[#fb2c36] group cursor-pointer' 
                                            : 'opacity-50 cursor-not-allowed'
                                    }`}
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
            )}
        </div>
    );
};

export default BlogList;