import { Scatter } from "react-chartjs-2";
import withDashboard from "./DashboardHOC";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

function DotplotContainer() {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  // main data to plot the graph
  const data = {
    datasets: [
      {
        label: "Group A",
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 7, y: 15 },
          { x: 22, y: 30 },
          { x: 18, y: 35 },
        ],
        backgroundColor: "#A510FF",
        pointRadius: 6,
      },
      {
        label: "Group b",
        data: [
          { x: 5, y: 20 },
          { x: 15, y: 15 },
          { x: 7, y: 4 },
          { x: 22, y: 3 },
          { x: 11, y: 25 },
        ],
        backgroundColor: "#F19C44",
        pointRadius: 6,
      },
    ],
  };

  // chart options
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  return (
    <div className="w-full h-[25rem] flex justify-center items-center flex-col gap-10">
      <h1 className="text-[2rem] self-start">Sales</h1>
      <Scatter data={data} options={options} style={{ width: "100%" }} />
    </div>
  );
}

export default withDashboard(
  DotplotContainer,
  "NFT Transactions",
  "3M/6M/12M",
  "h-[40rem]"
);
