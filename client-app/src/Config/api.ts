import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LOCAL_TOKEN } from "Config/constants";
import { LOCAL_DEV_DOMAIN } from "Config/constants";

export const API = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: LOCAL_DEV_DOMAIN,
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem(LOCAL_TOKEN);
      if (accessToken) {
        headers.set("authorization", `${accessToken}`);
        if (!headers.get("Content-Type"))
          headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    userLogin: builder.mutation({
      // The URL for the request is '/fakeApi/posts'
      query: (userObject) => ({
        url: "/user/signup",
        method: "POST",
        body: userObject,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useUserLoginMutation } = API;
