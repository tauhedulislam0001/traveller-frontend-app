import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

interface BookingDetailsHeroSectionProps {
    bookingId?: string;
    title?: string;
    packageType?: string;
    tourStatus?: string;
    showBackButton?: boolean;
}

const BookingDetailsHeroSection: React.FC<BookingDetailsHeroSectionProps> = ({ 
    bookingId, 
    title, 
    packageType, 
    tourStatus,
    showBackButton = true 
}) => {
    const router = useRouter();

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            confirmed: 'bg-green-500/20 text-green-200',
            pending: 'bg-yellow-500/20 text-yellow-200',
            cancelled: 'bg-red-500/20 text-red-200',
            completed: 'bg-blue-500/20 text-blue-200',
        };
        return colors[status] || 'bg-gray-500/20 text-gray-200';
    };

    const handleBack = () => {
        router.push('/profile?tab=bookings');
    };

    return (
        <section className="relative table w-full items-center py-36 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/10 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
            
            {/* Content */}
            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    {showBackButton && (
                        <button
                            onClick={handleBack}
                            className="inline-flex items-center gap-2 text-white hover:text-red-200 mb-6 transition-colors mx-auto"
                            aria-label="Go back to bookings"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Bookings
                        </button>
                    )}
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-normal tracking-wider font-bold text-white mb-4 drop-shadow-lg">
                        Booking Details
                    </h1>
                    
                    {title && (
                        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-4 drop-shadow-md font-semibold">
                            {title}
                        </p>
                    )}
                    
                    <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
                        {bookingId && (
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                Booking ID: {bookingId}
                            </span>
                        )}
                        {tourStatus && (
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(tourStatus)}`}>
                                {tourStatus.charAt(0).toUpperCase() + tourStatus.slice(1)}
                            </span>
                        )}
                        {packageType && (
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                {packageType} Package
                            </span>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Breadcrumb */}
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white hover:text-white/80">
                        <Link href="/">Traveller BD</Link>
                    </li>
                    <li className="inline-block text-base text-white mx-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/80">
                        <Link href="/profile">My Account</Link>
                    </li>
                    <li className="inline-block text-base text-white mx-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white">
                        Booking Details
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BookingDetailsHeroSection;