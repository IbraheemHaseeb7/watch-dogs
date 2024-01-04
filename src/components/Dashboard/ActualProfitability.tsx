import { actualProfitabilityRows } from "../../data/actualProfitiablityRows";
import ActualProfitabilityRow from "./ActualProfitabilityRow";
import withDashboard from "./DashboardHOC";
import "./Scrollbar.css";

function ActualProfitability({ profit }: { profit: number }) {
  let count = 0;

  return (
    <div className="h-[35rem] w-full flex flex-col justify-between max-md:h-[30rem]">
      <h1 className="text-[#2DE93F] text-[4rem] font-extrabold max-md:text-[2.5rem]">
        $ {profit}
      </h1>
      <div className="flex justify-start items-center overflow-y-scroll flex-col h-[24rem] custom-scroll">
        {actualProfitabilityRows.map((user) => {
          return <ActualProfitabilityRow user={user} key={count++} />;
        })}
      </div>
    </div>
  );
}

export default withDashboard(
  () => ActualProfitability({ profit: 20457 }),
  "Actual Profitablity",
  "3M/6M/12M",
  "h-[40rem]"
);
