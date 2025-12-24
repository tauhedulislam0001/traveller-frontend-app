import { useGetBlogsQuery } from '@redux/services/blog/api';
import React from 'react';
import Blogs from 'src/containers/blog';

const Blog: React.FC = () => {
    
    const getBlogData = useGetBlogsQuery('');

    return (
        <Blogs
            blogData={getBlogData.data}
        />
    );
};

export default Blog;
