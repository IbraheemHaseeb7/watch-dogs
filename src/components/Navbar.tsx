import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UserIcon from "./UserIcon";
import HomeOptions from "./HomeOptions";
import { User } from "../types/User";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar({ user }: { user: User | null }) {
  const [isOptions, setIsOptions] = useState<boolean>(false);

  function handleOptions(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();

    setIsOptions(!isOptions);
  }

  return (
    <nav className="bg-gradient fixed top-0 left-0 w-full h-[6.125rem] flex justify-start items-center z-10">
      <div className="w-[20%] flex justify-center items-center">
        <Link to={"/"}>
          <img
            src="navbar_logo.png"
            height="61px"
            width="58px"
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>
      <li className="flex justify-center items-center text-white gap-7 w-[35%]">
        <a className="text-white cursor-pointer">Search</a>
        <a className="text-white cursor-pointer">What is WatchDogs?</a>
      </li>
      <div className="flex justify-center items-center gap-5 w-[20%] ml-[25%]">
        <div className="cursor-pointer text-white" onClick={handleOptions}>
          <IconButton color="secondary">
            <MoreHorizIcon />
          </IconButton>
        </div>
        <div>
          <UserIcon text="An" />
        </div>
      </div>
      {isOptions && <HomeOptions user={user} />}
    </nav>
  );
}
