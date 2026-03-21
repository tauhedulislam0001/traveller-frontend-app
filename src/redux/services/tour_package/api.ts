import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/utils/auth";
import { Constants } from "src/utils/constants";
import {
    TourPackageListResponse,
    TourPackageFeatureResponse,
    TourPackageDetailsRequest,
    TourPackageDetailsResponse,
    TourPackageRelatedResponse,
    TourPackageFilterOptionsResponse,
    BookingSearchResponse,
    BookingSearchRequest,
    TourPackageTopDestinationResponse
} from "./type";

export const TourPackageApi = createApi({
    reducerPath: "TourPackageApi",
    baseQuery: baseQuery({ auth: "" }),
    endpoints: (builder) => ({

        // Get Tour Package List with filters
        getTourPackage: builder.query<TourPackageListResponse, {
            search?: string;
            package_type?: string;
            package_types?: string[];
            min_price?: number;
            max_price?: number;
            price_from?: number;
            price_to?: number;
            duration_type?: string;
            min_duration?: number;
            max_duration?: number;
            month?: string;
            months?: string[];
            tour_available?: string;
            sort_by?: string;
            sort_order?: 'asc' | 'desc';
            price_low_to_high?: boolean;
            price_high_to_low?: boolean;
            per_page?: number;
            page?: number;
        }>({
            query: (params) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}tour-package`,
                method: 'GET',
                params: params,
            }),
        }),

        // Get Featured Tour Packages
        getTourPackageFeatures: builder.query<TourPackageFeatureResponse, {
            limit?: number;
        }>({
            query: (params) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}tour-package/featured`,
                method: 'GET',
                params: params,
            }),
        }),

        // Get Top Destination Tour Packages
        getTourPackageTopDestinations: builder.query<TourPackageTopDestinationResponse, void>({
            query: () => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}tour-package/top-destination`,
                method: 'GET',
            }),
        }),

        // Get Tour Package Details by ID
        getTourPackageById: builder.query<TourPackageDetailsResponse, TourPackageDetailsRequest>({
            query: (data) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}tour-package/details`,
                method: 'POST',
                body: data,
            }),
        }),

        // Get Related Tour Packages
        getRelatedTourPackage: builder.query<TourPackageRelatedResponse, TourPackageDetailsRequest & { limit?: number }>({
            query: (data) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}tour-package/related`,
                method: 'POST',
                body: data,
            }),
        }),

        // Get Filter Options
        getTourPackageFilterOptions: builder.query<TourPackageFilterOptionsResponse, void>({
            query: () => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}tour-package/filter-options`,
                method: 'GET',
            }),
        }),

        // Search Booking - POST request
        searchBooking: builder.query<BookingSearchResponse, BookingSearchRequest>({
            query: (params) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}tour-package/booking-search`,
                method: 'POST',
                body: params,
            }),
        }),
    }),
});

export const {
    useGetTourPackageQuery,
    useGetTourPackageFeaturesQuery,
    useGetTourPackageTopDestinationsQuery,
    useGetTourPackageByIdQuery,
    useGetRelatedTourPackageQuery,
    useGetTourPackageFilterOptionsQuery,
    useSearchBookingQuery,
    useLazySearchBookingQuery,
} = TourPackageApi;