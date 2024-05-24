import {
  faMailBulk,
  faMoneyCheckDollar,
  faTrafficLight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import DCard from "../../components/DCard";
import { PieChart } from "../../components/PieChart";
// Adjust the path as necessary
export const dPieChart1 = [
  {
    id: "increase",
    label: "elixir",
    value: 84,
    color: "hsl(6, 70%, 50%)",
  },
  {
    id: "Emails",
    label: "go",
    value: 297,
    color: "hsl(42, 70%, 50%)",
  },
];
export const dPieChart2 = [
  {
    id: "increase",
    label: "Clinets",
    value: 40,
    color: "hsl(200, 70%, 50%)",
  },
  {
    id: "Clinets",
    label: "Clinets",
    value: 60,
    color: "hsl(330, 70%, 50%)",
  },
];
export const dPieChart3 = [
  {
    id: "increase",
    label: "traffic",
    value: 70,
    color: "hsl(60, 70%, 50%)",
  },
  {
    id: "engagement",
    label: "swift",
    value: 30,
    color: "hsl(300, 70%, 50%)",
  },
];
export const dPieChart4 = [
  {
    id: "increase",
    label: "Sales",
    value: 10,
    color: "hsl(90, 70%, 50%)",
  },
  {
    id: "Sales",
    label: "Sales",
    value: 90,
    color: "hsl(150, 70%, 50%)",
  },
];

export const Row1 = () => {
  const rowContent = [
    {
      icon: faMailBulk,
      value: "12,361",
      valueLabel: "Emails Sent",
      chart: <PieChart data={dPieChart1} />,
      increase: "+16%",
    },
    {
      icon: faUsers,
      value: "13,552",
      valueLabel: "New Clients",
      chart: <PieChart data={dPieChart2} />,
      increase: "+40%",
    },
    {
      icon: faTrafficLight,
      value: "1,334,008",
      valueLabel: "Requests",
      chart: <PieChart data={dPieChart3} />,
      increase: "+70%",
    },
    {
      icon: faMoneyCheckDollar,
      value: "165,986",
      valueLabel: "Sales Obtained",
      chart: <PieChart data={dPieChart4} />,
      increase: "+10%",
    },
  ];

  return (
    <div className="flex row mt-10 flex-wrap gap-3 justify-center lg:justify-between">
      {rowContent.map((content, index) => (
        <DCard key={index} content={content} />
      ))}
    </div>
  );
};
