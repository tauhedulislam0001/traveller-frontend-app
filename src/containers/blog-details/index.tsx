import React, { useState, useEffect } from "react";
import HeroBlogDetails from "@components/blog-details/blog_details_hero/HeroBlogDetails";
import BlogContent from "@components/blog-details/blog_details_content/BlogContent";
import BlogSidebar from "@components/blog-details/blog_sidebar/BlogSidebar";
import RelatedBlog from "@components/blog-details/related_blog/RelatedBlog";

const BlogDetails: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading Blog Details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Hero Section - Exact design as requested */}
      <HeroBlogDetails />

      {/* Main Content */}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            {/* Blog Content */}
            <BlogContent />

            {/* Sidebar */}
            <div className="lg:col-span-4 md:col-span-6">
                <BlogSidebar />
            </div>
          </div>
        </div>

        {/* Related Blogs Section - Using the Same Card Design */}
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 mb-8 text-center">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Related Blogs
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-3">
              Discover more amazing travel stories and guides
            </p>
          </div>

          <RelatedBlog />
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;