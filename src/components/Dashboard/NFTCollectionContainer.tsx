import { nftCollection } from "../../data/NFTCollectionRows";
import withDashboard from "./DashboardHOC";
import NFTCollectionRow from "./NFTCollectionRow";
import "./Scrollbar.css";

function NFTCollectionContainer() {
  let count = 0;

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full grid grid-cols-nft-cols font-medium text-[12px] mb-5">
        <p>#</p>
        <p>COLLECTION</p>
        <p className="flex justify-center items-center">FLOOR PRICE</p>
        <p className="flex justify-center items-center">PROFIT</p>
        <p className="flex justify-center items-center">MINTED</p>
        <p className="flex justify-center items-center">TOTAL</p>
      </div>
      <div className="w-full h-[30rem] overflow-y-scroll custom-scroll">
        {nftCollection.map((data) => {
          return <NFTCollectionRow data={data} count={++count} key={count} />;
        })}
      </div>
    </div>
  );
}

export default withDashboard(
  NFTCollectionContainer,
  "NFT Collections",
  "OWNED BY WALLET: 0x123Hdedhei0001223332dju",
  "h-[40rem]"
);
