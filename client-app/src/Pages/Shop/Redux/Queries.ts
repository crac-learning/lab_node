import { API } from "Config/api";
// import { TeamDetails } from "./Types";
// import { ErrorTypes } from "Pages/Teams/Redux/Types";
// import { setAlert } from ".";

export const shop = API.injectEndpoints({
  endpoints: (builder) => ({
    bestSeller: builder.query<any, void>({
      query: () => "/products/best-sellers",
    }),

    searchProduct: builder.mutation({
      query: (searchTerm) => ({
        url: "/products/search-product",
        method: "POST",
        body: { searchTerm },
      }),
    }),
  }),
});

export const { useLazyBestSellerQuery, useSearchProductMutation } = shop;
