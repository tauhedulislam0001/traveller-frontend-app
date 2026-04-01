export type CustomerReview = {
    id: number;
    full_name: string;
    email: string;
    rating: number | string;
    review_type: string;
    review_type_id: number;
    review: string;
    status: number;
    created_at: string;
    updated_at: string;
};

export type CustomerReviewListResponse = {
    success: boolean;
    data: CustomerReview[];
}

export type CustomerReviewResponse = {
    status: number;
    success: boolean;
    message: string;
    data: {
        current_page: number;
        data: CustomerReview[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: any[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
    meta: {
        review_type: string;
        item_id: number;
        total_reviews: number;
        average_rating: number;
    };
}

export type CreateReviewRequest = {
    full_name: string;
    email: string;
    rating: number;
    review_type: string;
    review_type_id: number;
    review: string;
}

export type CreateReviewResponse = {
    status: number;
    success: boolean;
    message: string;
    data: CustomerReview;
}

export type GetReviewsByTypeRequest = {
    type: string;
    id: number;
    page?: number;
    per_page?: number;
}

export type ReviewStatsResponse = {
    status: number;
    success: boolean;
    data: {
        total_reviews: number;
        average_rating: number;
        rating_distribution: {
            [key: number]: {
                count: number;
                percentage: number;
            };
        };
    };
}