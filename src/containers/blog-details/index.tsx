// src/containers/blog-details/index.tsx
import React, { useState, useEffect } from "react";
import HeroBlogDetails from "@components/blog-details/blog_details_hero/HeroBlogDetails";
import BlogContent from "@components/blog-details/blog_details_content/BlogContent";
import BlogSidebar from "@components/blog-details/blog_sidebar/BlogSidebar";
import RelatedBlog from "@components/blog-details/related_blog/RelatedBlog";

interface BlogDetailsProps {
  blogData?: any; // Use your proper type here
  relatedData?: any; // Add related data prop
  isLoading: boolean;
  error?: any;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ 
  blogData, 
  relatedData,
  isLoading, 
  error 
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading Blog Details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">Error loading blog details</div>
          <p className="text-gray-600 dark:text-gray-400">Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="text-gray-600 text-xl mb-4">Blog not found</div>
          <p className="text-gray-600 dark:text-gray-400">The blog you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Hero Section - Pass blog data */}
      <HeroBlogDetails blogData={blogData}/>

      {/* Main Content */}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            {/* Blog Content - Pass blog data */}
            <BlogContent blogData={blogData} />

            {/* Sidebar - Pass blog data if needed */}
            <div className="lg:col-span-4 md:col-span-6">
              <BlogSidebar />
            </div>
          </div>
        </div>

        {/* Related Blogs Section - Only show if there are related blogs */}
        {(relatedData && relatedData.length > 0) && (
          <div className="container lg:mt-24 mt-16">
            <div className="grid grid-cols-1 mb-8 text-center">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                Related Blogs
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-3">
                Discover more amazing travel stories and guides
              </p>
            </div>

            {/* Pass relatedData to RelatedBlog component */}
            <RelatedBlog relatedData={relatedData} />
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogDetails;