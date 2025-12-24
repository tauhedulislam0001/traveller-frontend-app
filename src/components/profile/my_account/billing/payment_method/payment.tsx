import React from 'react'

function Payment() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                </div>
                <div>
                <h6 className="font-semibold text-gray-800 dark:text-white">Credit Card</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">**** **** **** 4242</p>
                </div>
            </div>
            <span className="text-sm font-medium text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">Default</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
            Expires: 12/2025
            </div>
        </div>
        
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <div>
                <h6 className="font-semibold text-gray-800 dark:text-white">PayPal</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">jesus@paypal.com</p>
                </div>
            </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
            Connected
            </div>
        </div>
        </div>
  )
}

export default Payment