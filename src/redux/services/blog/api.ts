import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/utils/auth";
import { Constants } from "src/utils/constants";
import { BlogFeatureResponse, BlogResponse } from "./type";


export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: baseQuery({ auth: "" }),
  endpoints: (builder) => ({

    // Get Blog List Content
    getBlogs: builder.query<BlogResponse, string>({
      query: () => `${Constants.MAIN_URL_API_ENDPOINT}blog`,
    }),
    
    // Get Blog Feature List Content
    getBlogFeatures: builder.query<BlogFeatureResponse, string>({
      query: () => `${Constants.MAIN_URL_API_ENDPOINT}blog/featured`,
    }),
  }),
});

export const {
    useGetBlogsQuery,
    useGetBlogFeaturesQuery,
} = BlogApi;