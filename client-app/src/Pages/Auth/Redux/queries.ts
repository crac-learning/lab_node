import { API } from "Config/api";

export const auth = API.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (userObject) => ({
        url: "/auth/signup",
        method: "POST",
        body: userObject,
      }),
    }),
    loginUser: builder.mutation({
      query: (userCreds) => ({
        url: "/auth/login",
        method: "POST",
        body: userCreds,
      }),
    }),
  }),
});

export const { useSignupUserMutation, useLoginUserMutation } = auth;
