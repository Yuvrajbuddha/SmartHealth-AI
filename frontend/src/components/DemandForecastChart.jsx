import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jul", demand: 240 },
  { month: "Aug", demand: 280 },
  { month: "Sep", demand: 320 },
  { month: "Oct", demand: 300 },
  { month: "Nov", demand: 360 },
  { month: "Dec", demand: 410 },
];

function DemandForecastChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-2">
        📈 AI Demand Forecast
      </h2>

      <p className="text-gray-500 mb-6">
        Predicted medicine demand for the next 6 months.
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="demand"
            stroke="#2563eb"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default DemandForecastChart;