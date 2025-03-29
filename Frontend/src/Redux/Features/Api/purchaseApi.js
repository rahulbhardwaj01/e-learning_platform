import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PURCHASE_API = "https://e-learning-platform-rixn.onrender.com/api/v1/purchase";

export const purchaseApi = createApi({
  reducerPath: "purchaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: PURCHASE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createCheckOutSession: builder.mutation({
      query: ({ courseId }) => ({
        url: "/checkout/create-checkout-session",
        method: "POST",
        body: { courseId },
      }),
    }),
    getCourseDetailswithStatus: builder.query({
      query: (courseId) => ({
        url: `/course/${courseId}/detail-with-status`,
        method: "GET",
      }),
    }),
    getPurchasedCourse: builder.query({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCheckOutSessionMutation,
  useGetCourseDetailswithStatusQuery,
  useGetPurchasedCourseQuery,
} = purchaseApi;