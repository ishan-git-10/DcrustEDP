import { FILES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const pyqsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    displayPyqsSemWise: builder.query({
      query: ({branch, sem}) => ({
        url: FILES_URL+"/sem-wise/" + branch + "/" + sem,
      }),
    }),
    downloadPYQ: builder.query({
        query: (id) => ({
          url: FILES_URL+"/downloads/" + id,
        }),
      }),
  }),
});

export const {
    useDisplayPyqsSemWiseQuery,
    useDownloadPYQQuery,
} = pyqsApiSlice;