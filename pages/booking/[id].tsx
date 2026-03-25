import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useGetBookingByIdQuery } from '@redux/services/booking/api';
import BookingDetailsContainer from 'src/containers/booking-details';
import Head from 'next/head';
import toast from 'react-hot-toast';

const BookingDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error, isError } = useGetBookingByIdQuery(
    { id: id as string },
    { skip: !id }
  );

  // Debug logging
  useEffect(() => {
    if (data) {
      console.log('Booking Details Data:', data);
    }
    if (error) {
      console.error('Booking Details Error:', error);
      toast.error('Failed to load booking details');
    }
  }, [data, error]);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading Booking Details | TravellerBD</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading booking details...</p>
          </div>
        </div>
      </>
    );
  }

  if (isError || error || !data?.data) {
    return (
      <>
        <Head>
          <title>Booking Not Found | TravellerBD</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 mx-auto mb-6 text-red-500">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-red-600 text-2xl font-bold mb-4 dark:text-red-400">Booking Not Found</div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The booking you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Go Back
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Booking #{data.data.booking_id} | TravellerBD</title>
        <meta name="description" content={`View booking details for ${data.data.title}`} />
      </Head>
      <BookingDetailsContainer bookingData={data.data} />
    </>
  );
};

export default BookingDetails;