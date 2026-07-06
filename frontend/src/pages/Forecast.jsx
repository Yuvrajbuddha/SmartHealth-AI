import ForecastChart from "../components/ForecastChart";

function Forecast() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          AI Demand Forecast
        </h1>

        <p className="text-gray-500 mt-2">
          AI predicts future medicine demand using historical trends.
        </p>
      </div>

      <ForecastChart />

    </div>
  );
}

export default Forecast;