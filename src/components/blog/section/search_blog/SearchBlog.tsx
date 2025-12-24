import React from 'react'

function SearchBlog() {
    const themeColor = "#fb2c36";

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Blog
            </h3>
            
            <div className="relative group">
                <div className="relative">
                    <input 
                    type="text" 
                    className="w-full px-4 py-3.5 bg-gray-50 dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 focus:border-[#fb2c36] focus:ring-2 focus:ring-[#fb2c36]/30 focus:outline-none transition-all duration-300 pr-14 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="Search articles..."
                    />
                    
                    <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: themeColor }}
                    aria-label="Search"
                    >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </button>
                </div>
                
                {/* Optional: Add focus indicator for button */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-[#fb2c36]/10 scale-0 group-focus-within:scale-100 transition-transform duration-300"></div>
            </div>
        </div>
    )
}

export default SearchBlog