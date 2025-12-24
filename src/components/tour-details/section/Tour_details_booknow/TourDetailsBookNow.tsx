import React, { useState, useEffect } from "react";


function TourDetailsBookNow() {
    const [isMounted, setIsMounted] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const incrementAdult = () => setAdultCount(prev => prev + 1);
    const decrementAdult = () => setAdultCount(prev => prev > 1 ? prev - 1 : 1);
    
    const incrementChild = () => setChildCount(prev => prev + 1);
    const decrementChild = () => setChildCount(prev => prev > 0 ? prev - 1 : 0);

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
        <div className="lg:col-span-4 md:col-span-5">
            <div className="p-4 rounded-md shadow-sm dark:shadow-gray-700 sticky top-20 bg-white dark:bg-slate-900">
            {/* Date Picker */}
            <div>
                <label className="font-semibold block mb-2">Date:</label>
                <input
                type="date"
                className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-800 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors"
                />
            </div>

            {/* Person Counter */}
            <div className="mt-4">
                <div className="md:flex items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <span className="font-medium">Adult:</span>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                    type="button"
                    onClick={decrementAdult}
                    className="size-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                    <span className="text-lg">-</span>
                    </button>
                    <span className="font-semibold text-lg min-w-[2rem] text-center">{adultCount}</span>
                    <button
                    type="button"
                    onClick={incrementAdult}
                    className="size-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                    <span className="text-lg">+</span>
                    </button>
                </div>
                </div>
                
                <div className="md:flex items-center justify-between mt-4">
                <div className="mb-4 md:mb-0">
                    <span className="font-medium">Child:</span>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                    type="button"
                    onClick={decrementChild}
                    className="size-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                    <span className="text-lg">-</span>
                    </button>
                    <span className="font-semibold text-lg min-w-[2rem] text-center">{childCount}</span>
                    <button
                    type="button"
                    onClick={incrementChild}
                    className="size-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                    <span className="text-lg">+</span>
                    </button>
                </div>
                </div>
            </div>

            {/* Search Button */}
            <div className="mt-6">
                <button className="py-3 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-custom-red hover:bg-red-600 text-white rounded-md w-full font-medium transition-colors">
                Book Now
                </button>
            </div>

            {/* Tour Map */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h5 className="text-lg font-medium mb-3">Tour Map</h5>
                <div className="mt-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    className="w-full h-64 rounded-lg border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Tour Map"
                />
                </div>
            </div>
            </div>
        </div>
    )
}

export default TourDetailsBookNow