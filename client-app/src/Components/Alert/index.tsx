import { setAlert } from "Pages/Auth/Redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {
  message: string;
  error: boolean;
};

function Alert({ message, error }: Props) {
  const dispatch = useDispatch();

  const closeNotification = () => {
    dispatch(setAlert({ message: null, error: false }));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAlert({ message: null, error: false }));
    }, 4000);
  });

  console.log("props", message, error);
  return (
    <div className="fixed top-8 right-12 w-fit bg-white z-[999999]">
      <div
        className={`flex items-center justify-stretch border border-1 ${
          error ? "border-alert" : "border-green"
        } pl-8 pr-1.5 py-3 relative rounded before:block ${
          error ? "before:bg-error-shade" : "before:bg-green-400"
        } before:h-full before:w-[6px] before:absolute before:top-0 before:left-0`}
      >
        <div className={`${error ? "text-error-shade" : "text-green"} mr-8`}>
          {message}
        </div>
        <div
          className={`close border-l ${
            error ? "border-alert" : "border-green"
          } pl-1 cursor-pointer ${
            error ? "text-alert" : "text-green"
          } hover:text-error-shade`}
        >
          <CloseRoundedIcon onClick={closeNotification} />
        </div>
      </div>
    </div>
  );
}

export default Alert;
