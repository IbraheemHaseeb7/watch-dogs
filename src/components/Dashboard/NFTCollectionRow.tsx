import { NFTCollection } from "../../types/NFTCollections";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function NFTCollectionRow({
  data,
  count,
}: {
  data: NFTCollection;
  count: number;
}) {
  return (
    <div className="w-full grid grid-cols-nft-cols justify-start mb-2 max-md:grid-cols-nft-md-cols">
      <p className="flex justify-start items-center">{count}</p>
      <div className="flex justify-start items-center gap-5">
        <img src={data.img} />
        <p>
          {data.username}{" "}
          <VerifiedIcon
            style={{
              color: "#407FDB",
              marginLeft: "1rem",
              marginBottom: "5px",
            }}
          />
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p>{data.floorPrice} ETH</p>
        <span
          className={`${
            data.isProfit ? "text-green-500" : "text-red-500"
          } text-[10px]`}
        >
          {data.isProfit ? "+" : "-"} {data.gainValue}
        </span>
      </div>
      <p className="flex justify-center items-center">{data.profit} ETH</p>
      <p className="flex justify-center items-center">{data.minted}</p>
      <p className="flex justify-center items-center">{data.total}</p>
    </div>
  );
}
