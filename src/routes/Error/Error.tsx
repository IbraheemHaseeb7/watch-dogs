import { useRouteError } from "react-router-dom";
import Navbar from "../../components/Gerneral/Navbar";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <Navbar />
      <img src="navbar_logo.png" alt="logo.png" />
      <h1 className="mt-3">Oops, An error occurred</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
