import { useGetBlogFeaturesQuery } from '@redux/services/blog/api';
import React, { useEffect } from 'react';
import Landing from 'src/containers/landing';

const LandingPage: React.FC = () => {

    const getBlogData = useGetBlogFeaturesQuery('');

    useEffect(() => {
        console.log("Blog data loaded:", getBlogData.data);   // You can handle side effects here if needed
    });

    return (
        <Landing
            blogFeaturedData={getBlogData.data}
        />
    );
};

export default LandingPage;
