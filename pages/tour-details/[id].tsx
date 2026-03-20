import { useGetTourPackageByIdQuery } from '@redux/services/tour_package/api';
import { useRouter } from 'next/router';
import React from 'react';
import TourDetails from 'src/containers/tour-details';

const TourDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading, error } = useGetTourPackageByIdQuery(
        { id: Number(id) },
        { skip: !id }
    );

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Tour Package Details...</p>
                </div>
            </div>
        );
    }

    if (error || !data?.data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-600 text-xl mb-4">Error loading tour package</div>
                    <p className="text-gray-600 dark:text-gray-400">The requested tour package could not be found.</p>
                    <button
                        onClick={() => router.back()}
                        className="mt-4 px-6 py-2 bg-[#fb2c36] text-white rounded-lg hover:bg-[#d41f28] transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return <TourDetails tourData={data.data} />;
};

export default TourDetail;
