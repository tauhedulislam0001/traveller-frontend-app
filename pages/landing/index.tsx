import { useGetBlogFeaturesQuery } from '@redux/services/blog/api';
import { useGetTourPackageFeaturesQuery, useGetTourPackageTopDestinationsQuery } from '@redux/services/tour_package/api';
import React, { useEffect } from 'react';
import Landing from 'src/containers/landing';

const LandingPage: React.FC = () => {

    const getBlogData = useGetBlogFeaturesQuery('');
    const getTourPackageData = useGetTourPackageFeaturesQuery('');
    const getTopDestinationData = useGetTourPackageTopDestinationsQuery('');

    useEffect(() => {
        console.log("Blog data loaded:", getBlogData.data);   // You can handle side effects here if needed
        console.log("tour data loaded:", getTourPackageData.data);   // You can handle side effects here if needed
    });

    return (
        <Landing
            blogFeaturedData={getBlogData.data}
            tourFeaturedData={getTourPackageData.data}
            tourTopDestinationData={getTopDestinationData.data}
        />
    );
};

export default LandingPage;
