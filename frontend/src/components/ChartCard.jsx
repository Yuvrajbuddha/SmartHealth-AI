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
  { month: "Jan", cases: 120 },
  { month: "Feb", cases: 180 },
  { month: "Mar", cases: 140 },
  { month: "Apr", cases: 220 },
  { month: "May", cases: 280 },
  { month: "Jun", cases: 240 },
];

function ChartCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-5">
        Disease Cases Trend
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="cases"
            stroke="#2563EB"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCard;