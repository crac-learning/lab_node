import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import { theme } from "theme";

import { selectAlert } from "Pages/Auth/Redux";
import { useSelector } from "react-redux";

import Router from "Routes";

import Alert from "Components/Alert";
import "./App.css";
import { useEffect } from "react";

function App() {
  const alert = useSelector(selectAlert);
  console.log(alert, "asnkdasjd");

  useEffect(() => {
    
  }, [])

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <Router />
      {alert.message ? (
        <Alert message={alert.message} error={alert.error} />
      ) : null}
    </CssVarsProvider>
  );
}

export default App;
