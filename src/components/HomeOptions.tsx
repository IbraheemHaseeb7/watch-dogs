import { Link } from "react-router-dom";
import { User } from "../types/User";

export default function HomeOptions({ user }: { user: User | null }) {
  const options: { title: string; link: string; secondText?: string }[] = [
    { title: "My Portfolio", link: "" },
    { title: "What is WatchDogs?", link: "" },
    {
      title: "Sign Up",
      link: "sign-up",
      secondText: "Get 10 extra such credits",
    },
    { title: "Sign in", link: "sign-in" },
  ];

  return (
    <div className="w-[14.125rem] h-[15.188rem] rounded-lg bg-white fixed top-[6rem] right-0 mr-[8rem] text-black">
      {/* Username and email container */}
      <div className="w-full h-[2rem] flex justify-center items-start flex-col gap-2 px-2 py-[1.5rem]">
        {user === null ? (
          <p>You're currently Anonymous...</p>
        ) : (
          <>
            <p className="p-0 m-0 h-[16px]">{user?.username}</p>
            <p className="p-0 m-0 text-[10px] h-[10px] text-[#837F7F]">
              {user?.email}
            </p>
          </>
        )}
      </div>

      <div className="flex justify-between items-center h-[2rem] p-2">
        <div className="flex justify-center items-center">
          <img src="home_option_logo.png" alt="coin_logo" />
          <p>{user?.credits}</p>
        </div>
        <button className="bg-[#CCCCCC] ring-1 ring-gray-500 ring-opacity-25 px-[0.75rem] py-[0.25rem] rounded-lg text-[12px] font-bold">
          Buy Credits
        </button>
      </div>

      {/* options rendered dynamically based on list above */}
      {/* list is kept local since we it is not needed anywhere else */}
      <div className="h-[calc(100%-5rem)] flex flex-col justify-center items">
        {options.map(({ title, link, secondText }) => {
          return (
            <button
              key={title}
              className="p-2 flex justify-start text-left text-[14px] w-full items-center gap-1 h-[20%] hover:bg-[#cccccc]"
            >
              <Link to={link}>
                {title}
                {secondText && (
                  <span className="text-[10px]">{`(${secondText})`}</span>
                )}
              </Link>
            </button>
          );
        })}
        <div className="border-t-[1px] text-[10px] flex justify-start items-center gap-2 h-full">
          <a className="ml-2 cursor-pointer text-[#797777]">Content Policy</a>
          <a className="cursor-pointer text-[#797777]">Terms</a>
          <a className="cursor-pointer text-[#797777]">About</a>
        </div>
      </div>
    </div>
  );
}
