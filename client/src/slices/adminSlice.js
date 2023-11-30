import { ADMIN_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPyq: builder.mutation({
      query: (data) => ({
        url: ADMIN_URL+"/pyqs",
        method: "POST",
        body: data,
      }),
    }),
    // deleteProduct: builder.mutation({
    //   query: (productId) => ({
    //     url: PRODUCTS_URL + "/" + productId,
    //     method: "DELETE",
    //   }),
    //   providesTags: ["Product"],
    // }),
    // updateProduct: builder.mutation({
    //   query: (data) => ({
    //     url: PRODUCTS_URL + "/" + data.productId,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Products"],
    // }),
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
    useAddPyqMutation,
    useUploadPdfMutation
} = adminApiSlice;