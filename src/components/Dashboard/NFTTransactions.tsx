import { nftTransactions } from "../../data/NFTTrasactions";
import withDashboard from "./DashboardHOC";
import NFTTransactionsRow from "./NFTTransactionsRow";

function NFTTransactions() {
  let count = 0;
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="w-full h-[35rem] overflow-y-scroll max-md:overflow-x-scroll custom-scroll">
        <div className="grid grid-cols-nft-tran max-md:grid-cols-nft-md-tran justify-items-center">
          <p className="justify-self-start">Txn Hash</p>
          <p>Date</p>
          <p>From</p>
          <p>To</p>
          <p>Token ID</p>
          <p>Profit / Loss</p>
          <p>Type</p>
        </div>
        {nftTransactions.map((transaction) => {
          return <NFTTransactionsRow transaction={transaction} key={count++} />;
        })}
      </div>
    </div>
  );
}

export default withDashboard(
  NFTTransactions,
  "NFT Transactions",
  undefined,
  "h-[50rem]"
);
