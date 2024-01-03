import ActualProfitability from "../../components/Dashboard/ActualProfitability";
import DoughnutContainer from "../../components/Dashboard/DoughnutContainer";
import Navbar from "../../components/Gerneral/Navbar";
import Search from "../../components/Gerneral/Search";

export default function DashBoard() {
  return (
    <main className="bg-black w-full min-h-screen">
      <Navbar
        user={{
          fname: "Romain",
          lname: "Bernus",
          email: "romain.bernus@gmail.com",
          credits: 10,
        }}
      />
      <h1 className="text-white pt-[8rem] text-[4.25rem] w-full flex justify-center items-center">
        WatchDogs
      </h1>
      <Search buttonText="Generate" classes="translate-y-[-5rem]" />
      <h1 className="text-white pt-[12rem] text-[2.25rem] w-full flex justify-start items-center pl-[5%]">
        Address:
        <span className="text-[#B8B6B9] text-[1.5rem] translate-y-[3px] translate-x-[1rem]">{`0x123Hdedhei0001223332dju`}</span>
      </h1>
      <div className="mt-5 px-[4%] flex justify-center items-center gap-2">
        <DoughnutContainer />
        <ActualProfitability />
      </div>
    </main>
  );
}
