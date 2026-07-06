import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jul", demand: 120 },
  { month: "Aug", demand: 150 },
  { month: "Sep", demand: 170 },
  { month: "Oct", demand: 220 },
  { month: "Nov", demand: 250 },
  { month: "Dec", demand: 280 },
];

function ForecastChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Predicted Medicine Demand
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            dataKey="demand"
            stroke="#2563EB"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ForecastChart;