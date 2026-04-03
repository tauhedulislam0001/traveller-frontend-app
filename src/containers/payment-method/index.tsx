import FollowInstagram from "@components/aboutus/section/follow_instagram/FollowInstagram";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const PaymentMethod: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading Payment Information...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="font-sans">
            {/* Hero Section - Matching AboutHeroSection Style */}
            <section className="relative w-full py-36 bg-top bg-no-repeat bg-cover min-h-[500px]">
                {/* Background Image Container */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/bg/cta.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                
                <div className="container relative mx-auto px-4">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl leading-normal tracking-wider font-semibold text-white">
                            Payment Method
                        </h3>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-4">
                            Simple & Secure Payment Options for Your Travel
                        </p>
                    </div>
                </div>
                
                {/* Breadcrumb Navigation */}
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="inline-block text-base text-white/50 mx-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">
                            Payment Method
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    
                    {/* Main Payment Information - Full width with elegant design */}
                    <div className="w-full mb-20">
                        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-14 border border-gray-200 dark:border-slate-700 shadow-xl">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-900/20 rounded-2xl mb-6 shadow-md">
                                    <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                    Payment Methods
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
                                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                    We accept <span className="font-semibold text-red-500">Cash</span>, 
                                    <span className="font-semibold text-red-500"> Money Exchange Payment</span> or 
                                    <span className="font-semibold text-red-500"> Bank Account Transfer</span>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-2xl">
                                            📝
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            Booking Payment Policy
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        For booking, we need a <span className="font-semibold text-red-500">small amount of advance payment</span> to book hotel and tickets. 
                                        Rest of the payment you can pay <span className="font-semibold text-green-600 dark:text-green-400">cash on arrival day</span> (Before starting the tour).
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-2xl">
                                            💳
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            International Payments
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        As <span className="font-semibold">PayPal</span> is not available in Bangladesh, we prefer 
                                        <span className="font-semibold text-red-500"> Western Union</span> or any other money exchange to send the booking money. 
                                        If you want to pay or transfer the payment to our bank account, that's fine with us.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-2xl p-8 border-l-4 border-red-500">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                                        ⚠️
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Important Notes</h3>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                                <span><span className="font-semibold">Credit Card is not acceptable</span> as we need instant bank deposit & 2% of extra charges.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                                <span className="font-semibold text-red-600 dark:text-red-400">Note: We need 100% of advance payment to run any trip.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods Cards - Preserved original hover styles */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                Available Payment Options
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Choose the payment method that works best for you
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Cash Payment */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-xl text-center group">
                                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">💵</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cash Payment</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Pay directly with cash on arrival day before starting your tour
                                </p>
                            </div>

                            {/* Bank Transfer */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-xl text-center group">
                                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">🏦</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Bank Transfer</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Direct bank account transfer for easy and secure payments
                                </p>
                            </div>

                            {/* Money Exchange */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700 hover:border-red-500 transition-all duration-300 hover:shadow-xl text-center group">
                                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">💱</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Money Exchange</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Western Union or any other money exchange service
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bank Information Section - Full width elegant design */}
                    <div className="w-full mb-20">
                        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 rounded-3xl p-8 md:p-14 border border-red-200 dark:border-red-800 shadow-xl relative overflow-hidden">
                            {/* Decorative background pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -mt-32 -mr-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full -mb-32 -ml-32"></div>
                            
                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 shadow-lg">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                        Bank Account Information
                                    </h3>
                                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
                                        Contact us for our detailed bank account details
                                    </p>
                                </div>
                                
                                <div className="max-w-2xl mx-auto space-y-4 text-center">
                                    <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 backdrop-blur-sm">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <span className="font-semibold text-red-500">Account Name:</span> Pathfriend Tour Operator
                                        </p>
                                    </div>
                                    <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 backdrop-blur-sm">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <span className="font-semibold text-red-500">Bank:</span> Contact us for current bank details
                                        </p>
                                    </div>
                                    <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 backdrop-blur-sm">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <span className="font-semibold text-red-500">SWIFT Code:</span> Available upon request
                                        </p>
                                    </div>
                                    
                                    <div className="pt-6">
                                        <Link href="/contact">
                                            <span className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:shadow-xl cursor-pointer text-lg transform hover:scale-105">
                                                Contact Us for Bank Details
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Important Notice - Full width elegant design */}
                    <div className="w-full">
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10 rounded-2xl p-8 border-l-4 border-yellow-500 shadow-lg">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Important Notice</h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                        Please note that we require 100% advance payment for any trip arrangement. 
                                        Contact our support team for any clarification regarding payment methods.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FollowInstagram />
        </div>
    );
};

export default PaymentMethod;