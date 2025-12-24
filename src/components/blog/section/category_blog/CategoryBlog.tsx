import React from 'react'

function CategoryBlog() {
    const themeColor = "#fb2c36";
    
    // Popular Categories
    const categories = [
        { name: "All", count: 36 },
        { name: "Travel", count: 12 },
        { name: "Adventure", count: 8 },
        { name: "Culture", count: 7 },
        { name: "Photography", count: 6 },
        { name: "Backpacking", count: 3 }
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Categories
            </h3>
            <ul className="space-y-2">
                {categories.map((category, index) => (
                <li key={index}>
                    <a 
                    href="#" 
                    className="category-item flex items-center justify-between p-3.5 rounded-xl group transition-all duration-300"
                    style={{ '--theme-color': themeColor } as React.CSSProperties}
                    >
                    <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">
                        {category.name}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium transition-all duration-300">
                        {category.count}
                    </span>
                    </a>
                </li>
                ))}
            </ul>
            
            <style jsx>{`
                .category-item:hover {
                    background-color: var(--theme-color)/0.1 !important;
                    border: 1px solid var(--theme-color)/0.2 !important;
                }
                
                .category-item:hover span:first-child {
                    color: var(--theme-color) !important;
                }
                
                .category-item:hover span:last-child {
                    background-color: var(--theme-color) !important;
                    color: white !important;
                }
            `}</style>
        </div>
    )
}

export default CategoryBlog