import React, { useState, useEffect } from 'react';
import { useGetBlogsQuery } from '@redux/services/blog/api';

interface CategoryBlogProps {
    onCategorySelect?: (categoryId: number | null, categoryName: string | null) => void;
}

function CategoryBlog({ onCategorySelect }: CategoryBlogProps) {
    const themeColor = "#fb2c36";
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [categories, setCategories] = useState<{ id: number; name: string; count: number }[]>([]);
    
    const { data: blogsData } = useGetBlogsQuery();

    useEffect(() => {
        if (blogsData?.data) {
            // Count blogs per category
            const categoryMap = new Map<number, { name: string; count: number }>();
            
            blogsData.data.forEach((blog: any) => {
                const categoryId = blog.category_id;
                const categoryName = blog.category_name;
                
                if (categoryId && categoryName) {
                    if (categoryMap.has(categoryId)) {
                        categoryMap.get(categoryId)!.count++;
                    } else {
                        categoryMap.set(categoryId, { name: categoryName, count: 1 });
                    }
                }
            });
            
            // Convert to array and sort by count
            const categoryArray = Array.from(categoryMap.entries()).map(([id, data]) => ({
                id,
                name: data.name,
                count: data.count
            })).sort((a, b) => b.count - a.count);
            
            setCategories(categoryArray);
        }
    }, [blogsData]);

    const handleCategoryClick = (categoryId: number, categoryName: string) => {
        const newSelected = selectedCategory === categoryId ? null : categoryId;
        setSelectedCategory(newSelected);
        
        if (onCategorySelect) {
            onCategorySelect(newSelected, newSelected ? categoryName : null);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Categories
            </h3>
            
            {/* All Blogs Option */}
            <div className="mb-2">
                <button 
                    onClick={() => {
                        setSelectedCategory(null);
                        if (onCategorySelect) onCategorySelect(null, null);
                    }}
                    className={`category-item w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 ${
                        selectedCategory === null 
                            ? 'bg-[#fb2c36]/10 border border-[#fb2c36]/20' 
                            : ''
                    }`}
                >
                    <span className={`font-medium transition-colors duration-300 ${
                        selectedCategory === null ? 'text-[#fb2c36]' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                        All Posts
                    </span>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === null 
                            ? 'bg-[#fb2c36] text-white' 
                            : 'bg-gray-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                    }`}>
                        {blogsData?.count || 0}
                    </span>
                </button>
            </div>
            
            {categories.map((category) => (
                <div key={category.id} className="mb-2">
                    <button 
                        onClick={() => handleCategoryClick(category.id, category.name)}
                        className={`category-item w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 ${
                            selectedCategory === category.id 
                                ? 'bg-[#fb2c36]/10 border border-[#fb2c36]/20' 
                                : ''
                        }`}
                    >
                        <span className={`font-medium transition-colors duration-300 ${
                            selectedCategory === category.id ? 'text-[#fb2c36]' : 'text-slate-700 dark:text-slate-300'
                        }`}>
                            {category.name}
                        </span>
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category.id 
                                ? 'bg-[#fb2c36] text-white' 
                                : 'bg-gray-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                        }`}>
                            {category.count}
                        </span>
                    </button>
                </div>
            ))}
            
            <style jsx>{`
                .category-item {
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .category-item:hover {
                    background-color: rgba(251, 44, 54, 0.1);
                }
                .category-item:hover span:first-child {
                    color: #fb2c36;
                }
                .category-item:hover span:last-child {
                    background-color: #fb2c36;
                    color: white;
                }
                /* Active state - uses the same styles as hover */
                .category-item.bg-\\[\\#fb2c36\\]\\/10,
                .category-item[class*="bg-[#fb2c36]/10"] {
                    background-color: rgba(251, 44, 54, 0.1);
                }
                .category-item[class*="bg-[#fb2c36]/10"] span:first-child {
                    color: #fb2c36;
                }
                .category-item[class*="bg-[#fb2c36]/10"] span:last-child {
                    background-color: #fb2c36;
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default CategoryBlog;