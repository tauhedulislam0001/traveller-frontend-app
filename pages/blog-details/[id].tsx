// pages/blog/details/[id].tsx
import { useGetBlogByIdQuery, useGetRelatedBlogQuery } from '@redux/services/blog/api';
import { useRouter } from 'next/router';
import React from 'react';
import BlogDetails from 'src/containers/blog-details';

const BlogDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    
    // Convert id to number
    const blogId = id ? parseInt(id as string) : 0;
    
    console.log('Blog ID from URL:', blogId);
    console.log('Router query:', router.query);
    
    // Fetch blog details with POST request
    const { data, isLoading, error } = useGetBlogByIdQuery({ 
        id: blogId 
    }, {
        skip: !blogId, // Skip the query if no ID
    });
    
    // Fetch related blogs with POST request
    const { data: relatedData, isLoading: relatedLoading, error: relatedError } = useGetRelatedBlogQuery({ 
        id: blogId 
    }, {
        skip: !blogId, // Skip the query if no ID
    });

    return (
        <BlogDetails 
            blogData={data?.data}
            relatedData={relatedData?.data}
            isLoading={isLoading}
            error={error}
        />
    );
};

export default BlogDetailPage;