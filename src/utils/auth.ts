import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Constants } from "./constants";

export const baseQuery = (options: { auth: boolean }) => {
  return fetchBaseQuery({
    baseUrl: Constants.MAIN_URL_API_ENDPOINT,
    prepareHeaders: (headers) => {
      if (options.auth) {
        const token = localStorage.getItem('access_token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      }
      headers.set('Content-Type', 'application/json');
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