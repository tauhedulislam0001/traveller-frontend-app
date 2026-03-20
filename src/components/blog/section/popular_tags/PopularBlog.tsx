import React, { useState, useEffect } from 'react';
import { useGetBlogsQuery } from '@redux/services/blog/api';

interface PopularBlogProps {
    onTagSelect?: (tag: string | null) => void;
}

function PopularBlog({ onTagSelect }: PopularBlogProps) {
    const themeColor = "#fb2c36";
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [tags, setTags] = useState<{ name: string; count: number }[]>([]);
    
    const { data: blogsData } = useGetBlogsQuery();

    useEffect(() => {
        if (blogsData?.data) {
            // Extract and count tags from blog content and titles
            const tagMap = new Map<string, number>();
            const commonWords = ['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'in', 'is', 'it', 'of', 'on', 'or', 'the', 'to', 'with'];
            
            blogsData.data.forEach((blog: any) => {
                // Extract words from title and short description
                const text = `${blog.title} ${blog.short_des}`.toLowerCase();
                const words = text.split(/\s+/);
                
                words.forEach(word => {
                    // Clean the word
                    const cleanWord = word.replace(/[^\w]/g, '');
                    if (cleanWord.length > 3 && !commonWords.includes(cleanWord)) {
                        tagMap.set(cleanWord, (tagMap.get(cleanWord) || 0) + 1);
                    }
                });
            });
            
            // Convert to array, sort by count, and take top 10
            const tagArray = Array.from(tagMap.entries())
                .map(([name, count]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), count }))
                .sort((a, b) => b.count - a.count)
                .slice(0, 10);
            
            setTags(tagArray);
        }
    }, [blogsData]);

    const handleTagClick = (tag: string) => {
        const newSelected = selectedTag === tag ? null : tag;
        setSelectedTag(newSelected);
        
        if (onTagSelect) {
            onTagSelect(newSelected);
        }
    };

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
                    <button 
                        key={index}
                        onClick={() => handleTagClick(tag.name)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                            selectedTag === tag.name
                                ? 'bg-[#fb2c36] text-white border-[#fb2c36]'
                                : 'bg-gray-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-600 hover:bg-[#fb2c36] hover:text-white hover:border-[#fb2c36]'
                        }`}
                    >
                        {tag.name}
                        <span className={`ml-1.5 text-xs ${selectedTag === tag.name ? 'text-white/80' : 'text-gray-400'}`}>
                            ({tag.count})
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default PopularBlog;