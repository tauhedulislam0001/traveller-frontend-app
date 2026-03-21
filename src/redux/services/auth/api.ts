import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/utils/auth";
import { Constants } from "src/utils/constants";
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  VerifyTvCodeRequest,
  VerifyTvCodeResponse,
  UploadProfileImageResponse,
  LogoutResponse,
  Customer,
} from "./type";
import { setCredentials, clearCredentials } from "@redux/slices/authSlice";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: baseQuery({ auth: true }),
  tagTypes: ["Customer", "Profile"],
  endpoints: (builder) => ({

    // Register
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/register`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Customer"],
    }),

    // Login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Customer"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Login response:', data);
          
          if (data.success && data.data) {
            // Dispatch to Redux store
            dispatch(setCredentials({
              customer: data.data.customer,
              accessToken: data.data.access_token,
              refreshToken: data.data.refresh_token,
            }));
            console.log('Dispatched setCredentials');
          }
        } catch (error) {
          console.error('Login error:', error);
        }
      },
    }),

    // Refresh Token
    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/refresh-token`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.data) {
            // Update tokens in localStorage and Redux
            const customerStr = localStorage.getItem('customer');
            if (customerStr) {
              const customer = JSON.parse(customerStr);
              dispatch(setCredentials({
                customer,
                accessToken: data.data.access_token,
                refreshToken: data.data.refresh_token,
              }));
            } else {
              localStorage.setItem('access_token', data.data.access_token);
              localStorage.setItem('refresh_token', data.data.refresh_token);
            }
          }
        } catch (error) {
          console.error('Refresh token error:', error);
        }
      },
    }),

    // Get Profile
    getProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/profile`,
        method: 'GET',
      }),
      providesTags: ["Profile"],
    }),

    // Update Profile
    updateProfile: builder.mutation<UpdateProfileResponse, UpdateProfileRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/profile`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),

    // Change Password
    changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/change-password`,
        method: 'POST',
        body: data,
      }),
    }),

    // Verify TV Code
    verifyTvCode: builder.mutation<VerifyTvCodeResponse, VerifyTvCodeRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/verify-tv-code`,
        method: 'POST',
        body: data,
      }),
    }),

    // Upload Profile Image
    uploadProfileImage: builder.mutation<UploadProfileImageResponse, FormData>({
      query: (formData) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/upload-profile-image`,
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: ["Profile"],
    }),

    // Logout (Current Device)
    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/logout`,
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearCredentials());
        } catch (error) {
          console.error('Logout error:', error);
          // Still clear credentials on error
          dispatch(clearCredentials());
        }
      },
    }),

    // Logout All Devices
    logoutAll: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}customer/logout-all`,
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearCredentials());
        } catch (error) {
          console.error('Logout all error:', error);
          dispatch(clearCredentials());
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useRefreshTokenMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useVerifyTvCodeMutation,
  useUploadProfileImageMutation,
  useLogoutMutation,
  useLogoutAllMutation,
} = AuthApi;