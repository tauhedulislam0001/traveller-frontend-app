import TourPackage from 'src/containers/tour-package';
import React from 'react';
import { useGetTourPackageQuery } from '@redux/services/tour_package/api';

const Tour: React.FC = () => {
    const { data, isLoading, error } = useGetTourPackageQuery({
        per_page: 12,
        page: 1
    });

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Tour Packages...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-600 text-xl mb-4">Error loading tour packages</div>
                    <p className="text-gray-600 dark:text-gray-400">Please try again later.</p>
                </div>
            </div>
        );
    }
    console.log(data);
    return <TourPackage tourData={data} />;
};

export default Tour;