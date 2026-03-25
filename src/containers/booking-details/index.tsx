import React, { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Booking } from '@redux/services/booking/type';
import { useCancelBookingMutation } from '@redux/services/booking/api';
import toast from 'react-hot-toast';
import BookingDetailsHeroSection from '@components/tour-details/section/booking_details_hero_section/BookingDetailsHeroSection';

interface BookingDetailsContainerProps {
  bookingData: Booking;
}

const BookingDetailsContainer: React.FC<BookingDetailsContainerProps> = ({ bookingData }) => {
  const router = useRouter();
  const booking = bookingData;
  const [cancelBooking, { isLoading: isCancelling }] = useCancelBookingMutation();
  const [imageError, setImageError] = useState(false);

  // Helper functions
  const getImageUrl = useCallback((imagePath: string | null) => {
    if (!imagePath || imageError) return '/assets/images/placeholder.jpg';
    if (imagePath.startsWith('http')) return imagePath;
    return `http://traveller-bd.xyz/${imagePath}`;
  }, [imageError]);

  const getStatusColor = useCallback((status: string) => {
    const colors: Record<string, string> = {
      confirmed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
  }, []);

  const getPaymentStatusColor = useCallback((status: string) => {
    const colors: Record<string, string> = {
      paid: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      failed: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      refunded: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
  }, []);

  // Formatted dates
  const formattedDates = useMemo(() => ({
    tourStart: booking.tour_start_date ? new Date(booking.tour_start_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Not scheduled',
    tourEnd: booking.tour_end_date ? new Date(booking.tour_end_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'TBD',
    booking: booking.booking_date ? new Date(booking.booking_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Unknown',
  }), [booking.tour_start_date, booking.tour_end_date, booking.booking_date]);

  // Handlers
  const handleMakePayment = useCallback(() => {
    toast.success('Payment gateway will be integrated here');
  }, []);

  const handleCancelBooking = useCallback(async () => {
    if (!confirm('Are you sure you want to cancel this booking? This action cannot be undone.')) return;
    
    try {
      const result = await cancelBooking({ id: booking.id }).unwrap();
      if (result.success) {
        toast.success('Booking cancelled successfully');
        setTimeout(() => router.push('/profile?tab=bookings'), 1500);
      } else {
        toast.error(result.message || 'Failed to cancel booking');
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to cancel booking');
    }
  }, [cancelBooking, booking.id, router]);

  if (!booking) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <BookingDetailsHeroSection
        bookingId={booking.booking_id}
        title={booking.title}
        packageType={booking.package_type}
        tourStatus={booking.tour_status}
        showBackButton={true}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tour Image & Details Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-80 md:h-96 bg-gray-100 dark:bg-gray-700">
                <img
                  src={getImageUrl(booking.featured_image)}
                  alt={booking.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/placeholder.jpg';
                    setImageError(true);
                  }}
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {booking.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{booking.package_type}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Tour Start Date</span>
                      <p className="font-semibold text-gray-900 dark:text-white mt-1">
                        {formattedDates.tourStart}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Number of Guests</span>
                      <p className="font-semibold text-gray-900 dark:text-white mt-1">
                        {booking.number_of_guests} {booking.number_of_guests === 1 ? 'Guest' : 'Guests'}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Tour End Date</span>
                      <p className="font-semibold text-gray-900 dark:text-white mt-1">
                        {formattedDates.tourEnd}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Booking Date</span>
                      <p className="font-semibold text-gray-900 dark:text-white mt-1">
                        {formattedDates.booking}
                      </p>
                    </div>
                  </div>
                </div>

                {booking.special_requests && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Special Requests
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{booking.special_requests}</p>
                  </div>
                )}

                {booking.cancellation_reason && (
                  <div className="mt-6 pt-6 border-t border-red-200 dark:border-red-800">
                    <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Cancellation Reason
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{booking.cancellation_reason}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tour Package Details */}
            {booking.tourPackage && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tour Package Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Duration</span>
                    <p className="font-semibold text-gray-900 dark:text-white mt-1">
                      {booking.tourPackage.duration_text || `${booking.tourPackage.duration} days`}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Package Type</span>
                    <p className="font-semibold text-gray-900 dark:text-white mt-1">
                      {booking.tourPackage.package_type}
                    </p>
                  </div>
                  {booking.tourPackage.short_description && (
                    <div className="md:col-span-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Description</span>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{booking.tourPackage.short_description}</p>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <Link 
                    href={`/tour-details/${booking.package_id}`}
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
                  >
                    View Full Tour Package Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Information Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Payment Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Total Amount</span>
                  <span className="text-3xl font-bold text-red-500 dark:text-red-400">
                    ${parseFloat(booking.amount.toString()).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400">Payment Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPaymentStatusColor(booking.payment_status)}`}>
                    {booking.payment_status.charAt(0).toUpperCase() + booking.payment_status.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Invoice ID</span>
                  <span className="font-mono text-sm text-gray-900 dark:text-white">{booking.invoice_id}</span>
                </div>
              </div>
            </div>

            {/* Customer Information Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Customer Information
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Name</span>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">
                    {booking.customer?.full_name || booking.customer_name}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Email</span>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 break-all">
                    {booking.customer?.email || booking.customer_email}
                  </p>
                </div>
                {(booking.customer?.mobile || booking.customer_mobile) && (
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Mobile</span>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {booking.customer?.mobile || booking.customer_mobile}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions Card */}
            {booking.tour_status === 'pending' && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleMakePayment}
                    className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg"
                  >
                    Make Payment
                  </button>
                  <button
                    onClick={handleCancelBooking}
                    disabled={isCancelling}
                    className="w-full py-3 border-2 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCancelling ? 'Cancelling...' : 'Cancel Booking'}
                  </button>
                </div>
              </div>
            )}

            {/* Help Card */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Need Help?</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Have questions about your booking? Our support team is here to help you 24/7.
              </p>
              <div className="space-y-2">
                <a 
                  href="mailto:travellerbdofficial@gmail.com"
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  travellerbdofficial@gmail.com
                </a>
                <a 
                  href="tel:+880123456789"
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +880 1234-567890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookingDetailsContainer);