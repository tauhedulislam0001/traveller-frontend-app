// pages/blog/index.tsx
import { useGetBlogsQuery } from '@redux/services/blog/api';
import Blogs from 'src/containers/blog'; // Your Blogs container
import React from 'react';

const BlogPage: React.FC = () => {
    const { data, isLoading, error } = useGetBlogsQuery();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Blogs...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-600 text-xl mb-4">Error loading blogs</div>
                    <p className="text-gray-600 dark:text-gray-400">Please try again later.</p>
                </div>
            </div>
        );
    }

    return <Blogs blogData={data} />;
};

export default BlogPage;