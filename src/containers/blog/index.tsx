import React, { useState, useEffect, useMemo, useCallback } from "react";
import BlogHeroSection from "@components/blog/section/hero_blog/BlogHeroSection";
import SearchBlog from "@components/blog/section/search_blog/SearchBlog";
import CategoryBlog from "@components/blog/section/category_blog/CategoryBlog";
import PopularBlog from "@components/blog/section/popular_tags/PopularBlog";
import NewsletterBlog from "@components/blog/section/newsletter_blog/NewsletterBlog";
import BlogList from "@components/blog/section/blogs/BlogList";
import { useGetBlogsQuery, useSearchBlogsQuery } from "@redux/services/blog/api";
import { BlogResponse } from "@redux/services/blog/type";

const Blogs: React.FC<{ blogData?: BlogResponse }> = ({ blogData: initialData }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [activeFilters, setActiveFilters] = useState({
        search: '',
        categoryId: null as number | null,
        categoryName: null as string | null,
        tag: null as string | null
    });
    
    const { data: allBlogsData, isLoading: isLoadingBlogs } = useGetBlogsQuery();
    const { data: searchResults } = useSearchBlogsQuery(
        { search: activeFilters.search },
        { skip: activeFilters.search === '' || activeFilters.search.length < 2 }
    );

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Filter blogs based on all filters - Use useMemo to prevent infinite loops
    const filteredData = useMemo(() => {
        let filteredBlogs = allBlogsData?.data || [];
        
        // If there's a search term with results, use search results
        if (activeFilters.search && activeFilters.search.length >= 2 && searchResults?.data) {
            filteredBlogs = searchResults.data;
        }
        
        // Filter by category
        if (activeFilters.categoryId && filteredBlogs.length > 0) {
            filteredBlogs = filteredBlogs.filter(blog => blog.category_id === activeFilters.categoryId);
        }
        
        // Filter by tag
        if (activeFilters.tag && filteredBlogs.length > 0) {
            const tagLower = activeFilters.tag.toLowerCase();
            filteredBlogs = filteredBlogs.filter(blog => 
                blog.title.toLowerCase().includes(tagLower) || 
                blog.short_des?.toLowerCase().includes(tagLower)
            );
        }
        
        return {
            ...allBlogsData,
            data: filteredBlogs,
            count: filteredBlogs.length
        } as BlogResponse;
    }, [allBlogsData, searchResults, activeFilters.search, activeFilters.categoryId, activeFilters.tag]);

    // Use useCallback to prevent recreation of functions
    const handleSearch = useCallback((data: BlogResponse | null) => {
        if (data && data.query) {
            setActiveFilters(prev => ({ ...prev, search: data.query }));
        } else if (data === null) {
            setActiveFilters(prev => ({ ...prev, search: '' }));
        }
    }, []);

    const handleCategorySelect = useCallback((categoryId: number | null, categoryName: string | null) => {
        setActiveFilters(prev => ({ 
            ...prev, 
            categoryId, 
            categoryName,
            tag: null
        }));
    }, []);

    const handleTagSelect = useCallback((tag: string | null) => {
        setActiveFilters(prev => ({ 
            ...prev, 
            tag,
            categoryId: null,
            categoryName: null
        }));
    }, []);

    const handleClearAllFilters = useCallback(() => {
        setActiveFilters({
            search: '',
            categoryId: null,
            categoryName: null,
            tag: null
        });
    }, []);

    if (!isMounted || isLoadingBlogs) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Blogs...</p>
                </div>
            </div>
        );
    }

    const activeFiltersCount = [activeFilters.categoryId, activeFilters.tag, activeFilters.search].filter(Boolean).length;

    return (
        <div className="font-sans">
            <BlogHeroSection />
            
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <SearchBlog onSearchResults={handleSearch} />
                                <CategoryBlog onCategorySelect={handleCategorySelect} />
                                <NewsletterBlog />
                            </div>
                        </div>
                        
                        {/* Blog Posts Grid */}
                        <div className="lg:col-span-3">
                            {/* Header */}
                            <div className="grid grid-cols-1 pb-8 text-center">
                                <h3 className="mb-4 md:text-3xl text-2xl font-bold text-slate-900 dark:text-white">
                                    Travel Blogs
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                                    {activeFilters.search ? `Search results for "${activeFilters.search}"` : 
                                     activeFilters.categoryName ? `Posts in category: ${activeFilters.categoryName}` :
                                     activeFilters.tag ? `Posts tagged with: ${activeFilters.tag}` :
                                     'Discover inspiring travel stories and tips'}
                                </p>
                                
                                {/* Active Filters Display */}
                                {activeFiltersCount > 0 && (
                                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                                        {activeFilters.categoryName && (
                                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-[#fb2c36]/10 text-[#fb2c36]">
                                                Category: {activeFilters.categoryName}
                                                <button 
                                                    onClick={() => handleCategorySelect(null, null)}
                                                    className="ml-2 hover:text-red-600"
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                        {activeFilters.tag && (
                                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-[#fb2c36]/10 text-[#fb2c36]">
                                                Tag: {activeFilters.tag}
                                                <button 
                                                    onClick={() => handleTagSelect(null)}
                                                    className="ml-2 hover:text-red-600"
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                        {activeFilters.search && (
                                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-[#fb2c36]/10 text-[#fb2c36]">
                                                Search: {activeFilters.search}
                                                <button 
                                                    onClick={() => handleSearch(null)}
                                                    className="ml-2 hover:text-red-600"
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                        {activeFiltersCount > 1 && (
                                            <button 
                                                onClick={handleClearAllFilters}
                                                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
                                            >
                                                Clear All
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                            
                            {/* Blog Cards Grid */}
                            <BlogList 
                                data={allBlogsData} 
                                filteredData={filteredData}
                                searchTerm={activeFilters.search}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .line-clamp-2 {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Blogs;