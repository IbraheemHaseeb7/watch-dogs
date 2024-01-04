import { ActualProfit } from "../../types/ActualProfitUser";

export default function ActualProfitabilityRow({
  user,
}: {
  user: ActualProfit;
}) {
  return (
    <div className="flex justify-center items-center w-full mb-2 p-2 rounded-lg cursor-pointer transition-all ease duration-200 hover:bg-gray-600">
      <div className="flex justify-center items-center w-[20%]">
        <img src={user.img} className="rounded-lg" />
      </div>
      <div className="flex justify-center items-start flex-col w-[60%]">
        <p>{user.username}</p>
        <p className="text-[#F19C44]">{user.lastSeen}</p>
      </div>
      <div className="flex justify-center items-center w-[20%]">
        <p>{user.credits} ETH</p>
      </div>
    </div>
  );
}
