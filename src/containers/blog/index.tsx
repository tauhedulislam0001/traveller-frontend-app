import React, { useState, useEffect } from "react";
import BlogHeroSection from "@components/blog/section/hero_blog/BlogHeroSection";
import SearchBlog from "@components/blog/section/search_blog/SearchBlog";
import CategoryBlog from "@components/blog/section/category_blog/CategoryBlog";
import PopularBlog from "@components/blog/section/popular_tags/PopularBlog";
import NewsletterBlog from "@components/blog/section/newsletter_blog/NewsletterBlog";
import BlogList from "@components/blog/section/blogs/BlogList";
import { BlogResponse } from "@redux/services/blog/type";

const Blogs: React.FC<{ blogData?: BlogResponse }> = ({ blogData }) => {
    const [isMounted, setIsMounted] = useState(false);

    // Theme color
    const themeColor = "#fb2c36";

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
        <div className="font-sans">
        {/* Hero Section */}
        <BlogHeroSection />

        {/* Main Content with Sidebar */}
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Search Box */}
                            <SearchBlog/>

                            {/* Categories */}
                            <CategoryBlog />

                            {/* Popular Tags */}
                            <PopularBlog />

                            {/* Newsletter */}
                            <NewsletterBlog />
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="lg:col-span-3">
                    {/* Header */}
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl text-2xl font-bold text-slate-900 dark:text-white">Travel Blogs</h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        This is just a simple text made for this unique and awesome template, you can replace it with any text.
                        </p>
                    </div>

                    {/* Blog Cards Grid */}
                    <BlogList data={blogData}/>
                    </div>
                </div>
            </div>
        </section>

        {/* Custom Styles */}
        <style jsx>{`
            .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            }
            
            /* Custom scrollbar */
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
