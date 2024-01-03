import { ChangeEvent, useState } from "react";

export default function SearchAndLogo({
  imgLink,
  buttonText,
}: {
  imgLink: string;
  buttonText: string;
}) {
  const [search, setSearch] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setSearch(e.target.value);
  }

  return (
    <div className="flex justify-center items-center w-full relative top-[15rem]">
      <img
        src={imgLink}
        alt="HomePage Logo"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1 w-full flex justify-center items-center h-[3.375rem]">
        <input
          className="w-[75%] h-full rounded-l-md bg-black border-[1px] border-[#838080] outline-none pl-[1rem] drop-shadow-search-and-logo"
          value={search}
          onChange={handleChange}
          placeholder="Type in ETH Address"
        />
        <button className="h-full bg-black flex justify-center items-center px-[2rem] rounded-r-md drop-shadow-search-and-logo border-t-[1px] border-r-[1px] border-b-[1px] border-[#838080]">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
