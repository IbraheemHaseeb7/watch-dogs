import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Home/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/Error/Error.tsx";
import SignUp from "./routes/SignUp/SignUp.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import Verify from "./routes/Verify/Verify.tsx";
import About from "./routes/About/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/verify-email",
    element: <Verify />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const theme = createTheme({
  palette: {
    secondary: {
      main: "#AA48CD",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
