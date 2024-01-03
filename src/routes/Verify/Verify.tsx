import { Link, useNavigate } from "react-router-dom";
import SignButton from "../../components/SignButton";

export default function Verify() {
  const nav = useNavigate();

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center text-black">
      <div className="flex justify-center items-start flex-col w-1/3">
        <div className="flex justify-start items-center w-full gap-2">
          <Link to="/">
            <img src="navbar_logo.png" alt="logo" />
          </Link>
          <h1 className="text-black text-[2rem] font-extrabold">WatchDogs</h1>
        </div>
        <h1 className="mt-[3rem] text-[2rem] font-extrabold">
          Verify your email address
        </h1>
        <p className="text-[14px] mt-[1rem]">
          To continute setting up your WatchDogs account, please verify that
          this is your email address.
        </p>
        <SignButton
          onClick={() => nav("/about")}
          text="Verify email address"
          classes="mt-[2rem] w-2/3 h-[3.5rem] rounded bg-button-gradient"
        />
        <p className="text-[#949292] text-[14px] mt-[2rem]">
          This link will expire in 5 days. If you did not make this request,
          please disregard this email. For help, contact us through our{" "}
          <a>Help center.</a>
        </p>
      </div>
    </div>
  );
}
