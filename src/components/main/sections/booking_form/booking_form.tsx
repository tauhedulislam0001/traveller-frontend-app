import React, {useEffect, useState }from 'react'

function BookingForm() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    });
    
    // Show loading state while component is mounting
    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Booking Form...</p>
            </div>
        </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 relative -mt-16 z-10">
            <div className="grid grid-cols-1">
                <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-gray-800">
                <div className="registration-form text-slate-900 dark:text-slate-200 text-start">
                    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">Search:</label>
                        <div className="relative mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input 
                            name="name" 
                            type="text" 
                            id="job-keyword" 
                            className="w-full py-2 px-3 pl-10 h-10 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors" 
                            placeholder="Search destination" 
                        />
                        </div>
                    </div>

                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">Check-in Date:</label>
                        <div className="relative mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <input 
                            name="checkin" 
                            type="date" 
                            id="checkin-date" 
                            className="w-full py-2 px-3 pl-10 h-10 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors" 
                        />
                        </div>
                    </div>

                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">Check-out Date:</label>
                        <div className="relative mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <input 
                            name="checkout" 
                            type="date" 
                            id="checkout-date" 
                            className="w-full py-2 px-3 pl-10 h-10 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors" 
                        />
                        </div>
                    </div>

                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">No. of person:</label>
                        <div className="relative mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a5.5 5.5 0 01-5.5 5.5" />
                        </svg>
                        <select className="form-select w-full py-2 px-3 pl-10 h-10 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors appearance-none">
                            <option value="">No. of person</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5+ People</option>
                        </select>
                        </div>
                    </div>

                    <div className="lg:mt-8">
                        <button 
                        type="submit" 
                        className="py-3 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-custom-red hover:bg-red-600 text-white rounded-md w-full cursor-pointer font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-offset-2"
                        >
                        Search
                        </button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default BookingForm