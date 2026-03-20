import React, { useState, useEffect, useRef } from 'react';
import { useSearchBlogsQuery } from '@redux/services/blog/api';

interface SearchBlogProps {
    onSearchResults?: (data: any) => void;
}

function SearchBlog({ onSearchResults }: SearchBlogProps) {
    const themeColor = "#fb2c36";
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const previousSearchRef = useRef('');

    // Debounce search to avoid too many API calls
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.length >= 2 || searchTerm === '') {
                setDebouncedSearch(searchTerm);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const { data, isFetching } = useSearchBlogsQuery(
        { search: debouncedSearch },
        { skip: debouncedSearch === '' }
    );

    // Update parent component with search results - ONLY when data or debouncedSearch changes
    useEffect(() => {
        // Prevent infinite loop by checking if the search term actually changed
        if (debouncedSearch !== previousSearchRef.current) {
            previousSearchRef.current = debouncedSearch;
            
            if (onSearchResults) {
                if (data && data.data) {
                    // Pass the data along with the search query
                    onSearchResults({ ...data, query: debouncedSearch });
                } else if (debouncedSearch === '') {
                    // Clear search when empty
                    onSearchResults(null);
                }
            }
        }
    }, [data, debouncedSearch, onSearchResults]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchTerm.length >= 2) {
            setDebouncedSearch(searchTerm);
        }
    };

    const handleSearchClick = () => {
        if (searchTerm.length >= 2) {
            setDebouncedSearch(searchTerm);
        }
    };

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
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        className="w-full px-4 py-3.5 bg-gray-50 dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 focus:border-[#fb2c36] focus:ring-2 focus:ring-[#fb2c36]/30 focus:outline-none transition-all duration-300 pr-14 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                        placeholder="Search articles..."
                    />
                    
                    <button 
                        onClick={handleSearchClick}
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: themeColor }}
                        disabled={searchTerm.length < 2}
                        aria-label="Search"
                    >
                        {isFetching ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
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
                        )}
                    </button>
                </div>
                
                {searchTerm.length > 0 && searchTerm.length < 2 && (
                    <p className="text-xs text-amber-600 mt-2">Enter at least 2 characters to search</p>
                )}
            </div>
        </div>
    )
}

export default SearchBlog;