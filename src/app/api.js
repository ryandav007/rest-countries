import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => ({ url: "all" }),
    }),
    searchCountryByName: builder.query({
      query: (name) => ({ url: `/name/${name}` }),
    }),
  }),
});

export const { useGetAllCountriesQuery, useSearchCountryByNameQuery } =
  apiSlice;
export default apiSlice;
