import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/utils/auth";
import { Constants } from "src/utils/constants";
import { 
    CustomerReview, 
    CustomerReviewResponse, 
    CustomerReviewListResponse,
    CreateReviewRequest,
    CreateReviewResponse,
    GetReviewsByTypeRequest,
    ReviewStatsResponse
} from "./type";

export const CustomerReviewApi = createApi({
    reducerPath: "CustomerReviewApi",
    baseQuery: baseQuery({ auth: "" }),
    tagTypes: ['CustomerReview'],
    endpoints: (builder) => ({

        // Get all approved reviews
        getReviews: builder.query<CustomerReviewListResponse, void>({
            query: () => `${Constants.MAIN_URL_API_ENDPOINT}review`,
            providesTags: ['CustomerReview'],
        }),

        // Get reviews by type (blog or tour_package)
        getReviewsByType: builder.query<CustomerReviewResponse, GetReviewsByTypeRequest>({
            query: ({ type, id, page = 1, per_page = 10 }) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}review/${type}/${id}`,
                method: 'GET',
                params: { page, per_page },
            }),
            providesTags: (result, error, { type, id }) => 
                result ? [{ type: 'CustomerReview', id: `${type}-${id}` }] : ['CustomerReview'],
        }),

        // Create a new review
        createReview: builder.mutation<CreateReviewResponse, CreateReviewRequest>({
            query: (data) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}review/create`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['CustomerReview'],
        }),

        // Get rating statistics for a specific item
        getRatingStats: builder.query<ReviewStatsResponse, { type: string; id: number }>({
            query: ({ type, id }) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}review/stats/${type}/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, { type, id }) => 
                result ? [{ type: 'CustomerReview', id: `stats-${type}-${id}` }] : ['CustomerReview'],
        }),
    }),
});

export const {
    useGetReviewsQuery,
    useGetReviewsByTypeQuery,
    useCreateReviewMutation,
    useGetRatingStatsQuery,
} = CustomerReviewApi;