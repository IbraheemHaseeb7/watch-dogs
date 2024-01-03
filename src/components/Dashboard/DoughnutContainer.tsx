import withDashboard from "./DashboardHOC";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  Point,
  BubbleDataPoint,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

function DoughnutContainer() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  // to modify some colors in the graph
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white", // Set the color of the labels
        },
      },
    },
  };

  // main data to plot the graph
  const data: ChartData<
    "doughnut",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  > = {
    labels: ["ETH Balance", "NFT Balance", "Token Balance"],
    datasets: [
      {
        data: [50, 20, 30],
        backgroundColor: ["#A510FF", "#D946AA", "#F19C44"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="h-[35rem]">
      <Doughnut data={data} style={{ color: "#fff" }} options={options} />
    </div>
  );
}

export default withDashboard(DoughnutContainer, "Total Balance", false);
