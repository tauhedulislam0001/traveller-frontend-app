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

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: baseQuery({ auth: true }), // Set auth: true for protected routes
  tagTypes: ["Customer", "Profile"],
  endpoints: (builder) => ({

    // Register
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/register`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Customer"],
    }),

    // Login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Customer"],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          // Store tokens in localStorage
          if (data.success && data.data) {
            localStorage.setItem('access_token', data.data.access_token);
            localStorage.setItem('refresh_token', data.data.refresh_token);
            localStorage.setItem('customer', JSON.stringify(data.data.customer));
          }
        } catch (error) {
          console.error('Login error:', error);
        }
      },
    }),

    // Refresh Token
    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/refresh-token`,
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.data) {
            // Update tokens in localStorage
            localStorage.setItem('access_token', data.data.access_token);
            localStorage.setItem('refresh_token', data.data.refresh_token);
          }
        } catch (error) {
          console.error('Refresh token error:', error);
        }
      },
    }),

    // Get Profile
    getProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/profile`,
        method: 'GET',
      }),
      providesTags: ["Profile"],
    }),

    // Update Profile
    updateProfile: builder.mutation<UpdateProfileResponse, UpdateProfileRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/profile`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),

    // Change Password
    changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/change-password`,
        method: 'POST',
        body: data,
      }),
    }),

    // Verify TV Code
    verifyTvCode: builder.mutation<VerifyTvCodeResponse, VerifyTvCodeRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/verify-tv-code`,
        method: 'POST',
        body: data,
      }),
    }),

    // Upload Profile Image
    uploadProfileImage: builder.mutation<UploadProfileImageResponse, FormData>({
      query: (formData) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/upload-profile-image`,
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
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/logout`,
        method: 'POST',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          // Clear all auth data
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('customer');
          dispatch(AuthApi.util.resetApiState());
        } catch (error) {
          console.error('Logout error:', error);
        }
      },
    }),

    // Logout All Devices
    logoutAll: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}v1/customer/logout-all`,
        method: 'POST',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          // Clear all auth data
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('customer');
          dispatch(AuthApi.util.resetApiState());
        } catch (error) {
          console.error('Logout all error:', error);
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