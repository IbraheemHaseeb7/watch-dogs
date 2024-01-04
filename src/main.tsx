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
import Wallet from "./routes/Wallet/Wallet.tsx";
import SignIn from "./routes/SignIn/SignIn.tsx";
import DashBoard from "./routes/Dashboard/Dashboard.tsx";
import SignedIn from "./components/Gerneral/SignedIn.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

// routes for the react router
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
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);

// custom theme for MUI components
const theme = createTheme({
  palette: {
    secondary: {
      main: "#AA48CD",
    },
    info: {
      main: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SignedIn />
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
