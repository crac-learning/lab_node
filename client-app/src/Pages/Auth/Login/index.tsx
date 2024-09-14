import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import BodyText from "Components/LayoutComponents/BodyText";
import TextInput from "Components/LayoutComponents/Form/TextInput";
import HeadingText from "Components/LayoutComponents/HeadingText";
import SubmitButton from "Components/LayoutComponents/Form/Button";

import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SHOP, SIGNUP } from "Routes/constant";
import { setAlert, setUserDetails } from "../Redux";
import { LOCAL_TOKEN } from "Config/constants";
import { useLoginUserMutation } from "../Redux/queries";

import SideImage from "Assets/images/auth-side-image-2.jpg";

export interface LoginPayload {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().trim().required("Email is required"),
  password: yup.string().trim().required("Password is required"),
});

export type LoginInputType = {
  email: string;
  password: string;
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<LoginPayload>(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    console.log("onsiubmit input data", data);
    await userLogin(data);
  };

  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const userLogin = async (userObject: LoginInputType) => {
    try {
      const response = await loginUser(userObject).unwrap();

      console.log("user logg in", userObject, response);
      if (response.data) {
        dispatch(setUserDetails(response.data.user));
        localStorage.setItem(LOCAL_TOKEN, response.data.token);
        navigate(SHOP);
      }
      // eslint-disable-next-line
    } catch (err: any) {
      console.log("user data after response", error, err);
      const errorMsg =
        err?.data?.error ||
        "Error connecting to server, please check your internet connection";
      dispatch(setAlert({ message: errorMsg, error: true }));
    }
  };

  console.log("isLoading", isLoading);

  return (
    <div className="w-full h-full">
      <div className="login flex gap-8 h-full">
        <div
          className="banner w-2/3 h-full"
          style={{
            backgroundImage: `url('${SideImage}')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="login-form text-left w-1/3 py-12 pr-10">
          <HeadingText text="Log in to Exclusive" />
          <div className="pt-2">
            <BodyText text="Enter your details below" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs mt-8">
              <BodyText text="Email" />
              <div>
                <TextInput
                  error={!!errors?.email?.message}
                  {...register("email", {})}
                  name="email"
                  fullWidth
                  placeholder="Enter email"
                  type="text"
                />
                {errors?.email?.message ? (
                  <p className="text-red-600 text-xs pt-1">
                    {errors?.email?.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6">
                <BodyText text="Password" />
                <TextInput
                  error={!!errors?.password?.message}
                  {...register("password", {})}
                  name="password"
                  fullWidth
                  placeholder="Enter password"
                  type="password"
                />
                {errors?.password?.message ? (
                  <p className="text-red-600 text-xs pt-1">
                    {errors?.password?.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6">
                <SubmitButton />
              </div>
            </div>
          </form>
          <div className="my-6">
            <hr />
            <br />
            <Typography
              sx={{
                fontFamily: "gilroy400",
                fontWeight: 400,
                lineHeight: {
                  xs: "20px",
                },
                fontSize: {
                  xs: "1rem",
                },
                color: "#0C0635",
                mx: "auto",
              }}
            >
              Don't have an account?{" "}
              <Link to={SIGNUP}>
                <span className="text-sky-500 font-semibold font-montserrat cursor-pointer">
                  Signup
                </span>
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
