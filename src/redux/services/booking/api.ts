import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/utils/auth";
import { Constants } from "src/utils/constants";
import {
    BookingListResponse,
    BookingDetailsResponse,
    BookingStoreRequest,
    BookingStoreResponse,
    BookingCancelRequest,
    BookingCancelResponse,
    Booking,
} from "./type";

export const BookingApi = createApi({
    reducerPath: "BookingApi",
    baseQuery: baseQuery({ auth: true }),
    tagTypes: ["Booking", "MyBookings"],
    endpoints: (builder) => ({

        // Get all bookings (admin) or user's bookings
        getBookings: builder.query<BookingListResponse, {
            page?: number;
            per_page?: number;
            status?: string;
            payment_status?: string;
        }>({
            query: (params) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}customer/booking/list`,
                method: 'GET',
                params: params,
            }),
            providesTags: ["Booking"],
        }),

        // Get user's own bookings - FIXED URL
        getMyBookings: builder.query<BookingListResponse, {
            page?: number;
            per_page?: number;
            status?: string;
        }>({
            query: (params) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}customer/booking/list`,
                method: 'GET',
                params: params,
            }),
            providesTags: ["MyBookings"],
        }),

        // Get single booking details - FIXED URL
        getBookingById: builder.query<BookingDetailsResponse, { id: number | string }>({
            query: (data) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}customer/booking/${data.id}`,
                method: 'GET',
            }),
            providesTags: ["Booking"],
        }),

        // Create new booking
        storeBooking: builder.mutation<BookingStoreResponse, BookingStoreRequest>({
            query: (data) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}customer/booking/store`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Booking", "MyBookings"],
        }),

        // Cancel booking - FIXED URL
        cancelBooking: builder.mutation<BookingCancelResponse, BookingCancelRequest>({
            query: (data) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}customer/booking/${data.id}/cancel`,
                method: 'POST',
                body: { cancellation_reason: data.cancellation_reason },
            }),
            invalidatesTags: ["Booking", "MyBookings"],
        }),

        // Update booking (admin only)
        updateBooking: builder.mutation<BookingStoreResponse, Partial<Booking> & { id: number }>({
            query: (data) => ({
                url: `${Constants.MAIN_URL_API_ENDPOINT}customer/booking/${data.id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["Booking"],
        }),
    }),
});

export const {
    useGetBookingsQuery,
    useGetMyBookingsQuery,
    useGetBookingByIdQuery,
    useStoreBookingMutation,
    useCancelBookingMutation,
    useUpdateBookingMutation,
} = BookingApi;