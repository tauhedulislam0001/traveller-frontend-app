import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Constants } from "./constants";

export const baseQuery = (options: { auth: boolean }) => {
  return fetchBaseQuery({
    baseUrl: Constants.MAIN_URL_API_ENDPOINT,
    prepareHeaders: (headers, { getState }) => {
      if (options.auth) {
        const token = localStorage.getItem('access_token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      }
      
      // IMPORTANT: Check if this is a file upload request by looking at the URL
      // This is a workaround since we can't access the body in prepareHeaders
      // You can also use a custom header in the mutation
      
      headers.set('Accept', 'application/json');
      return headers;
    },
  });
};

// Create a separate base query for file uploads
export const fileBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: Constants.MAIN_URL_API_ENDPOINT,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      // DON'T set Content-Type for file uploads
      headers.set('Accept', 'application/json');
      return headers;
    },
  });
};

// Optional: Add a base query with refresh token handling
export const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery({ auth: true })(args, api, extraOptions);
  
  // If unauthorized, try to refresh token
  if (result.error && result.error.status === 401) {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      const refreshResult = await fetch(`${Constants.MAIN_URL_API_ENDPOINT}v1/customer/refresh-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });
      
      const refreshData = await refreshResult.json();
      
      if (refreshData.success && refreshData.data) {
        localStorage.setItem('access_token', refreshData.data.access_token);
        localStorage.setItem('refresh_token', refreshData.data.refresh_token);
        
        // Retry original request
        result = await baseQuery({ auth: true })(args, api, extraOptions);
      } else {
        // Refresh failed, redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      }
    }
  }
  
  return result;
};