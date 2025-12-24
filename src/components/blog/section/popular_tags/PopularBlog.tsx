import React from 'react'

function PopularBlog() {
    const themeColor = "#fb2c36";

    // Popular Tags
    const tags = ["Travel", "Adventure", "Mountains", "Beaches", "Culture", "Food", "Photography", "Budget", "Luxury", "Hiking"];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                <a 
                    key={index}
                    href="#" 
                    className="popular-tag inline-flex items-center px-4 py-2 bg-gray-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium transition-all duration-300 border border-gray-200 dark:border-slate-600 group"
                    style={{ '--theme-color': themeColor } as React.CSSProperties}
                >
                    {tag}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                ))}
            </div>
            
            <style jsx>{`
                .popular-tag:hover {
                    background-color: var(--theme-color) !important;
                    color: white !important;
                    border-color: var(--theme-color) !important;
                }
            `}</style>
        </div>
    )
}

export default PopularBlog