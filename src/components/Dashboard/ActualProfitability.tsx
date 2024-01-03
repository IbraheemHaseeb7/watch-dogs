import withDashboard from "./DashboardHOC";

function ActualProfitability({ profit }: { profit: number }) {
  console.log(profit);

  return (
    <div className="h-[35rem]">
      <h1>$ {profit}</h1>
    </div>
  );
}

export default withDashboard(
  () => ActualProfitability({ profit: 20457 }),
  "Actual Profitablity",
  false,
  "3M/6M/12M"
);
