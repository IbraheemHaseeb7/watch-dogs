import ActualProfitability from "../../components/Dashboard/ActualProfitability";
import DotplotContainer from "../../components/Dashboard/DotplotContainer";
import DoughnutContainer from "../../components/Dashboard/DoughnutContainer";
import NFTCollectionContainer from "../../components/Dashboard/NFTCollectionContainer";
import NFTTransactions from "../../components/Dashboard/NFTTransactions";
import Navbar from "../../components/Gerneral/Navbar";
import Search from "../../components/Gerneral/Search";

export default function DashBoard() {
  return (
    <main className="bg-black w-full min-h-screen pb-5">
      <Navbar
        user={{
          fname: "Romain",
          lname: "Bernus",
          email: "romain.bernus@gmail.com",
          credits: 10,
        }}
      />
      <h1 className="text-white pt-[8rem] text-[4.25rem] w-full flex justify-center items-center max-md:text-[3.5rem]">
        WatchDogs
      </h1>
      <Search buttonText="Generate" classes="translate-y-[-5rem]" />
      <h1 className="text-white pt-[12rem] text-[2.25rem] w-full flex justify-start items-center pl-[5%] max-md:text-[1.5rem]">
        Address:
        <span className="text-[#B8B6B9] text-[1.5rem] translate-y-[3px] translate-x-[1rem]  max-md:text-[0.75rem]">{`0x123Hdedhei0001223332dju`}</span>
      </h1>
      <div className="mt-5 px-[4%] flex justify-center items-center gap-2 max-md:flex-col">
        <DoughnutContainer />
        <ActualProfitability />
      </div>
      <div className="w-full mt-2 px-[4%] flex justify-center items-center gap-2 flex-col">
        <NFTCollectionContainer />
        <DotplotContainer />
        <NFTTransactions />
      </div>
    </main>
  );
}
