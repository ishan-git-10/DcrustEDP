import { ADMIN_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: ADMIN_URL+"/register",
        method: "POST",
        body: data,
      }),
    }),
    addPyq: builder.mutation({
      query: (data) => ({
        url: ADMIN_URL+"/pyqs",
        method: "POST",
        body: data,
      }),
    }),
    uploadPdf: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
    useRegisterMutation,
    useAddPyqMutation,
    useUploadPdfMutation
} = adminApiSlice;