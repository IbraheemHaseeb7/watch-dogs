import { NFTTransactions } from "../../types/NFTTransactions";

export default function NFTTransactionsRow({
  transaction,
}: {
  transaction: NFTTransactions;
}) {
  return (
    <div className="grid grid-cols-nft-tran justify-items-center border-b-[1px] border-[#898787] h-[4rem] items-center">
      <p className="justify-self-start bg-text-gradient bg-clip-text text-transparent">
        {transaction.txnhash}
      </p>
      <p>{transaction.date}</p>
      <p>{transaction.from}</p>
      <p>{transaction.to}</p>
      <p>{transaction.tokenID}</p>
      <p
        className={`${
          transaction.profitLoss !== 0
            ? transaction.profitLoss > 0
              ? "text-green-500"
              : "text-red-500"
            : "text-[white]"
        }`}
      >
        {transaction.profitLoss === 0 ? "None" : transaction.profitLoss}
      </p>
      <p>{transaction.type}</p>
    </div>
  );
}
