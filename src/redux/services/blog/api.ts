import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/utils/auth";
import { Constants } from "src/utils/constants";
import { BlogDetailsRequest, BlogDetailsResponse, BlogFeatureResponse, BlogRelatedBlogResponse, BlogResponse } from "./type";

export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: baseQuery({ auth: "" }),
  endpoints: (builder) => ({

    // Get Blog List Content
    getBlogs: builder.query<BlogResponse, void>({
      query: () => `${Constants.MAIN_URL_API_ENDPOINT}blog`,
    }),
    
    // Get Blog Feature List Content
    getBlogFeatures: builder.query<BlogFeatureResponse, void>({
      query: () => `${Constants.MAIN_URL_API_ENDPOINT}blog/featured`,
    }),

    // Search Blogs
    searchBlogs: builder.query<BlogResponse, { search: string }>({
      query: (params) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}blog/search`,
        method: 'POST',
        body: params,
      }),
    }),

    // Get blog details by id
    getBlogById: builder.query<BlogDetailsResponse, BlogDetailsRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}blog/details`,
        method: 'POST',
        body: data,
      }),
    }),

    // Get related blog by id
    getRelatedBlog: builder.query<BlogRelatedBlogResponse, BlogDetailsRequest>({
      query: (data) => ({
        url: `${Constants.MAIN_URL_API_ENDPOINT}blog/related`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
    useGetBlogsQuery,
    useGetBlogFeaturesQuery,
    useSearchBlogsQuery,
    useGetBlogByIdQuery,
    useGetRelatedBlogQuery,
} = BlogApi;