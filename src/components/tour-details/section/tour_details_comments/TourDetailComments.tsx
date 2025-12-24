import React, { useState, useEffect } from "react";

function TourDetailComments() {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Tour Details...</p>
            </div>
        </div>
        );
    }
  return (
    <div className="mt-6">
        <h5 className="text-lg font-semibold">Leave A Comment:</h5>
        <form className="mt-6">
            <div className="grid lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6 mb-5">
                <div className="text-left">
                <label htmlFor="name" className="font-semibold block mb-2">Your Name:</label>
                <input
                    id="name"
                    type="text"
                    className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-800 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors"
                    placeholder="Name"
                />
                </div>
            </div>
            <div className="lg:col-span-6 mb-5">
                <div className="text-left">
                <label htmlFor="email" className="font-semibold block mb-2">Your Email:</label>
                <input
                    id="email"
                    type="email"
                    className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-800 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors"
                    placeholder="Email"
                />
                </div>
            </div>
            </div>
            <div className="grid grid-cols-1">
            <div className="mb-5">
                <div className="text-left">
                <label htmlFor="comments" className="font-semibold block mb-2">Your Comment:</label>
                <textarea
                    id="comments"
                    className="w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-800 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors resize-none"
                    placeholder="Message"
                />
                </div>
            </div>
            </div>
            <button
            type="submit"
            className="py-3 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-custom-red hover:bg-red-600 text-white rounded-md w-full font-medium transition-colors"
            >
            Send Message
            </button>
        </form>
        </div>
  )
}

export default TourDetailComments