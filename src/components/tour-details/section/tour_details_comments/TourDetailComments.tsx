import React, { useState, useEffect } from 'react';
import { useGetReviewsByTypeQuery, useCreateReviewMutation, useGetRatingStatsQuery } from 'src/redux/services/customer_review/api';
import { toast } from 'react-hot-toast';

interface Props {
    type: 'blog' | 'tour_package';
    id: number;
}

interface Review {
    id: number;
    full_name: string;
    email: string;
    rating: number;
    review: string;
    created_at: string;
}

const TourDetailComments: React.FC<Props> = ({ type, id }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        review: ''
    });

    // Fetch reviews
    const { data: reviewsData, isLoading: reviewsLoading, refetch } = useGetReviewsByTypeQuery({
        type,
        id,
        page: currentPage,
        per_page: 10
    });

    // Fetch rating stats
    const { data: statsData } = useGetRatingStatsQuery({ type, id });

    // Create review mutation
    const [createReview, { isLoading: isSubmitting }] = useCreateReviewMutation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (rating === 0) {
            toast.error('Please select a rating');
            return;
        }

        try {
            const response = await createReview({
                full_name: formData.full_name,
                email: formData.email,
                rating: rating,
                review_type: type === 'blog' ? 'blog' : 'tour_package',
                review_type_id: id,
                review: formData.review
            }).unwrap();

            if (response.success) {
                toast.success(response.message || 'Review submitted successfully!');
                // Reset form
                setRating(0);
                setFormData({
                    full_name: '',
                    email: '',
                    review: ''
                });
                // Refresh reviews
                refetch();
            } else {
                toast.error('Failed to submit review');
            }
        } catch (error: any) {
            console.error('Error submitting review:', error);
            if (error?.data?.errors) {
                const errors = error.data.errors;
                Object.values(errors).forEach((err: any) => {
                    toast.error(err[0]);
                });
            } else {
                toast.error(error?.data?.message || 'Failed to submit review');
            }
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    // Render stars
    const renderStars = (ratingValue: number) => {
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <svg
                            key={index}
                            className={`w-4 h-4 ${
                                starValue <= ratingValue ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    );
                })}
            </div>
        );
    };

    // Render rating distribution
    const renderRatingDistribution = () => {
        if (!statsData?.data) return null;
        
        const { rating_distribution, total_reviews, average_rating } = statsData.data;
        
        return (
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <div className="text-2xl font-bold text-gray-900">{average_rating}</div>
                        <div className="flex items-center gap-1 mt-1">
                            {renderStars(Math.round(average_rating))}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                            Based on {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}
                        </div>
                    </div>
                </div>
                
                <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(ratingValue => (
                        <div key={ratingValue} className="flex items-center gap-2">
                            <div className="w-12 text-sm text-gray-600">{ratingValue} star</div>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{ width: `${rating_distribution[ratingValue]?.percentage || 0}%` }}
                                />
                            </div>
                            <div className="w-12 text-sm text-gray-500">
                                {rating_distribution[ratingValue]?.count || 0}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Reviews Section */}
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <svg className="w-6 h-6 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Customer Reviews
                </h3>
            </div>

            {/* Rating Statistics */}
            {renderRatingDistribution()}

            {/* Existing Reviews */}
            <div className="p-6 border-b border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What our customers say</h4>
                
                {reviewsLoading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-custom-red"></div>
                    </div>
                ) : reviewsData?.data?.data?.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No reviews yet. Be the first to review!
                    </div>
                ) : (
                    <div className="space-y-6">
                        {reviewsData?.data?.data?.map((review: Review) => (
                            <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <div className="font-semibold text-gray-900">{review.full_name}</div>
                                        <div className="text-sm text-gray-500 mt-1">{formatDate(review.created_at)}</div>
                                    </div>
                                    <div>
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-2">{review.review}</p>
                            </div>
                        ))}
                    </div>
                )}
                
                {/* Pagination */}
                {reviewsData?.data?.last_page > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                            Previous
                        </button>
                        <span className="px-3 py-1 text-sm">
                            Page {currentPage} of {reviewsData?.data?.last_page}
                        </span>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(reviewsData?.data?.last_page || 1, p + 1))}
                            disabled={currentPage === reviewsData?.data?.last_page}
                            className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            {/* Write Review Form */}
            <div className="p-6 border-b border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Write a Review</h4>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Rating Stars */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Your Rating <span className="text-custom-red">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setRating(ratingValue)}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                        className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <svg
                                            className={`w-8 h-8 transition-colors ${
                                                ratingValue <= (hover || rating)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                );
                            })}
                            {rating > 0 && (
                                <span className="ml-2 text-sm font-medium text-gray-600">
                                    {rating} out of 5 stars
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Name Input */}
                    <div>
                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name <span className="text-custom-red">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleInputChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-red/20 focus:border-custom-red transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-custom-red">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-red/20 focus:border-custom-red transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    {/* Review Textarea */}
                    <div>
                        <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Review <span className="text-custom-red">*</span>
                        </label>
                        <textarea
                            id="review"
                            name="review"
                            rows={5}
                            value={formData.review}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-red/20 focus:border-custom-red transition-all resize-none"
                            placeholder="Share your experience... What did you like? What could be improved?"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={() => {
                                setRating(0);
                                setFormData({
                                    full_name: '',
                                    email: '',
                                    review: ''
                                });
                            }}
                            className="px-6 py-2.5 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2.5 bg-custom-red hover:bg-red-600 text-white font-medium rounded-xl transition-colors shadow-lg shadow-custom-red/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Review Guidelines */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Review Guidelines</h4>
                <p className="text-xs text-gray-500">
                    Your review helps other travelers make informed decisions. Please keep it honest, respectful, and relevant to the tour experience.
                </p>
            </div>
        </div>
    );
};

export default TourDetailComments;