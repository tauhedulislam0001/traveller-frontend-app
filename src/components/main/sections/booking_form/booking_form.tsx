import React, { useState, useEffect, useMemo } from 'react';
import { useLazySearchBookingQuery } from '@redux/services/tour_package/api';
import { TourPackage } from '@redux/services/tour_package/type';

interface BookingFormProps {
  tourData?: {
    data?: TourPackage[];
  };
  onSearchResults?: (results: TourPackage[]) => void;
  onSearchStart?: () => void;
  onSearchClear?: () => void; // Add this new prop
}

function BookingForm({ tourData, onSearchResults, onSearchStart, onSearchClear }: BookingFormProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    package_type: '',
    title: '',
    duration_type: '',
    duration: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [triggerSearch, { isLoading }] = useLazySearchBookingQuery();

  const uniquePackageTypes = useMemo(() => {
    if (!tourData?.data) return [];
    const types = new Set(tourData.data.map(pkg => pkg.package_type).filter(Boolean));
    return Array.from(types).sort();
  }, [tourData]);

  const uniqueTitles = useMemo(() => {
    if (!tourData?.data) return [];
    const titles = new Set(tourData.data.map(pkg => pkg.title).filter(Boolean));
    return Array.from(titles).sort();
  }, [tourData]);

  const durationTypeOptions = ['day', 'week', 'month'];

  const durationOptions = useMemo(() => {
    if (!formData.duration_type) return [];
    switch(formData.duration_type) {
      case 'day': return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 21, 30];
      case 'week': return [1, 2, 3, 4, 5, 6, 8, 10, 12];
      case 'month': return [1, 2, 3, 4, 5, 6, 8, 10, 12];
      default: return [];
    }
  }, [formData.duration_type]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'duration_type' && { duration: '' })
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleReset = () => {
    setFormData({
      package_type: '',
      title: '',
      duration_type: '',
      duration: ''
    });
    setErrors({});
    // Call onSearchClear to show landing content instead of search results
    if (onSearchClear) {
      onSearchClear();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.package_type && !formData.title && !formData.duration_type && !formData.duration) {
      setErrors({ form: 'Please select at least one search criteria' });
      return;
    }
    
    if (onSearchStart) {
      onSearchStart();
    }
    
    const searchParams: any = {};
    if (formData.package_type) searchParams.package_type = formData.package_type;
    if (formData.title) searchParams.title = formData.title;
    if (formData.duration_type) searchParams.duration_type = formData.duration_type;
    if (formData.duration) searchParams.duration = parseInt(formData.duration);
    
    console.log('Searching with params:', searchParams);
    
    try {
      const result = await triggerSearch(searchParams).unwrap();
      console.log('Search result:', result);
      
      if (result.success && result.data) {
        if (onSearchResults) {
          onSearchResults(result.data);
        }
      } else {
        if (onSearchResults) {
          onSearchResults([]);
        }
      }
    } catch (error) {
      console.error('Search error:', error);
      setErrors({ submit: 'Failed to search packages. Please try again.' });
      if (onSearchResults) {
        onSearchResults([]);
      }
    }
  };

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
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-gray-800">
          <div className="registration-form text-slate-900 dark:text-slate-200 text-start">
            {/* Responsive Grid - Changes based on screen size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {/* Package Type Dropdown */}
              <div className="col-span-1">
                <label className="form-label font-medium text-slate-900 dark:text-white block mb-2 text-sm sm:text-base">
                  Package Type:
                </label>
                <div className="relative">
                  <select 
                    name="package_type"
                    value={formData.package_type}
                    onChange={handleInputChange}
                    className="w-full py-2 px-3 pl-10 h-10 sm:h-11 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Package Type</option>
                    {uniquePackageTypes.map(type => (
                      <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))}
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 absolute top-2.5 sm:top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>

              {/* Title Dropdown */}
              <div className="col-span-1">
                <label className="form-label font-medium text-slate-900 dark:text-white block mb-2 text-sm sm:text-base">
                  Tour Title:
                </label>
                <div className="relative">
                  <select 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full py-2 px-3 pl-10 h-10 sm:h-11 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Tour Title</option>
                    {uniqueTitles.map(title => (
                      <option key={title} value={title}>{title}</option>
                    ))}
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 absolute top-2.5 sm:top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Duration Type Dropdown */}
              <div className="col-span-1">
                <label className="form-label font-medium text-slate-900 dark:text-white block mb-2 text-sm sm:text-base">
                  Duration Type:
                </label>
                <div className="relative">
                  <select 
                    name="duration_type"
                    value={formData.duration_type}
                    onChange={handleInputChange}
                    className="w-full py-2 px-3 pl-10 h-10 sm:h-11 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Duration Type</option>
                    {durationTypeOptions.map(type => (
                      <option key={type} value={type}>
                        {type === 'day' ? 'Days' : type === 'week' ? 'Weeks' : 'Months'}
                      </option>
                    ))}
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 absolute top-2.5 sm:top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Duration Dropdown */}
              <div className="col-span-1">
                <label className="form-label font-medium text-slate-900 dark:text-white block mb-2 text-sm sm:text-base">
                  Duration:
                </label>
                <div className="relative">
                  <select 
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full py-2 px-3 pl-10 h-10 sm:h-11 bg-transparent dark:bg-slate-800 dark:text-slate-200 rounded-md outline-none border border-gray-200 dark:border-gray-700 focus:border-custom-red focus:ring-1 focus:ring-custom-red transition-colors appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Duration</option>
                    {durationOptions.map(duration => (
                      <option key={duration} value={duration}>
                        {duration} {formData.duration_type === 'day' ? 'Day(s)' : formData.duration_type === 'week' ? 'Week(s)' : 'Month(s)'}
                      </option>
                    ))}
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 absolute top-2.5 sm:top-3 left-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>

              {/* Buttons Container - Fixed alignment */}
              <div className="col-span-1 flex items-end gap-2 sm:gap-3">
                {/* Search Button */}
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex-1 py-2 px-3 sm:px-6 h-10 sm:h-11 inline-block tracking-wide align-middle duration-500 text-sm sm:text-base text-center bg-custom-red hover:bg-red-600 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span className="hidden sm:inline">Search</span>
                      <span className="sm:hidden">...</span>
                    </div>
                  ) : (
                    <span>Search</span>
                  )}
                </button>

                {/* Reset Icon */}
                <button 
                  type="button"
                  onClick={handleReset}
                  className="p-2 h-10 sm:h-11 w-10 sm:w-11 flex items-center justify-center text-gray-500 hover:text-custom-red dark:text-gray-400 dark:hover:text-custom-red transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
                  title="Reset Filters"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Error Messages */}
            {errors.form && (
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md text-sm">
                {errors.form}
              </div>
            )}
            {errors.submit && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                {errors.submit}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;