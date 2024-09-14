import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import BodyText from "Components/LayoutComponents/BodyText";
import TextInput from "Components/LayoutComponents/Form/TextInput";
import HeadingText from "Components/LayoutComponents/HeadingText";
import SubmitButton from "Components/LayoutComponents/Form/Button";

import SideImage from "Assets/images/auth-side-image-2.jpg";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN, SHOP } from "Routes/constant";
import { setAlert, setUserDetails } from "../Redux";
import { LOCAL_TOKEN } from "Config/constants";
import { useDispatch } from "react-redux";
import { useSignupUserMutation } from "../Redux/queries";

export interface SignupFormPayload {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const schema = yup.object().shape({
  fullName: yup.string().trim().required("full name is required"),
  email: yup.string().trim().required("Email is required"),
  password: yup.string().trim().required("Password is required"),
  confirmPassword: yup.string().trim().required("Re enter your password"),
});

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver<SignupFormPayload>(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<SignupFormPayload> = async (data) => {
    console.log("onsiubmit input data", data);
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "custom",
        message: "Password and Confirm password does not match",
      });
    } else {
      userSignup(data);
    }
  };

  const userSignup = async (userObject: SignupFormPayload) => {
    try {
      delete userObject.confirmPassword;
      const response = await signupUser(userObject).unwrap();

      console.log("user logg in", userObject, response);
      if (response.data) {
        dispatch(setUserDetails(response.data.user));
        localStorage.setItem(LOCAL_TOKEN, response.data.token);
        navigate(SHOP);
      }
      // eslint-disable-next-line
    } catch (err: any) {
      console.log("user data after response", error, err.data?.error);
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
        <div className="login-form text-left w-1/3 pb-12 pt-2 pr-10">
          <HeadingText text="Register to Exclusive" />
          <div className="pt-2">
            <BodyText text="Enter your details below" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs mt-8">
              <BodyText text="Full Name" />
              <div>
                <TextInput
                  error={!!errors?.fullName?.message}
                  {...register("fullName", {})}
                  name="fullName"
                  fullWidth
                  placeholder="Enter fullName"
                  type="text"
                />
                {errors?.fullName?.message ? (
                  <p className="text-red-600 text-xs pt-1">
                    {errors?.fullName?.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6">
                <BodyText text="Email" />
                <TextInput
                  error={!!errors?.password?.message}
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
                <BodyText text="Confirm Password" />
                <TextInput
                  error={!!errors?.password?.message}
                  {...register("confirmPassword", {})}
                  name="confirmPassword"
                  fullWidth
                  placeholder="Re-enter password"
                  type="password"
                />
                {errors?.confirmPassword?.message ? (
                  <p className="text-red-600 text-xs pt-1">
                    {errors?.confirmPassword?.message}
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
              Already have an account?{" "}
              <Link to={LOGIN}>
                <span className="text-sky-500 font-semibold font-montserrat cursor-pointer">
                  Login
                </span>
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
