import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import DemandForecastChart from "../components/DemandForecastChart";
import InventoryTable from "../components/InventoryTable";
import AlertCard from "../components/AlertCard";
import AIRecommendation from "../components/AIRecommendation";

import {
  Package,
  Boxes,
  AlertTriangle,
  Activity,
} from "lucide-react";

import { inventory } from "../data/dummyData";

function Dashboard() {
  // =========================
  // Live Dashboard Analytics
  // =========================

  const totalMedicines = inventory.length;

  const totalStock = inventory.reduce(
    (sum, medicine) => sum + medicine.stock,
    0
  );

  const criticalMedicines = inventory.filter(
    (medicine) => medicine.stock <= 30
  ).length;

  const lowStockMedicines = inventory.filter(
    (medicine) =>
      medicine.stock > 30 &&
      medicine.stock <= 100
  ).length;

  const healthScore = Math.round(
    ((totalMedicines - criticalMedicines) /
      totalMedicines) *
      100
  );

  return (
    <div className="space-y-8">

      {/* Dashboard Heading */}

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          SmartHealth AI Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          AI-Driven Healthcare Analytics &
          Supply Chain Management
        </p>
      </div>

      {/* Analytics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Medicines"
          value={totalMedicines}
          change="Inventory Items"
          color="text-green-600"
          icon={
            <Package
              size={30}
              className="text-green-700"
            />
          }
          bgColor="bg-green-100"
        />

        <StatCard
          title="Total Stock"
          value={totalStock}
          change="Units Available"
          color="text-blue-600"
          icon={
            <Boxes
              size={30}
              className="text-blue-700"
            />
          }
          bgColor="bg-blue-100"
        />

        <StatCard
          title="Critical Medicines"
          value={criticalMedicines}
          change="Immediate Attention"
          color="text-red-600"
          icon={
            <AlertTriangle
              size={30}
              className="text-red-700"
            />
          }
          bgColor="bg-red-100"
        />

        <StatCard
          title="AI Health Score"
          value={`${healthScore}%`}
          change="Inventory Health"
          color="text-purple-600"
          icon={
            <Activity
              size={30}
              className="text-purple-700"
            />
          }
          bgColor="bg-purple-100"
        />

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-6">

        <ChartCard />

        <DemandForecastChart />

      </div>

      {/* Smart Alerts */}

      <AlertCard />

      {/* AI Recommendation */}

      <AIRecommendation />

      {/* Inventory Table */}

      <InventoryTable />

      {/* Extra Dashboard Summary */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          📊 Inventory Summary
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-blue-50 rounded-xl p-5">
            <h3 className="font-semibold text-blue-700">
              Total Medicines
            </h3>

            <p className="text-3xl font-bold mt-2">
              {totalMedicines}
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-5">
            <h3 className="font-semibold text-yellow-700">
              Low Stock
            </h3>

            <p className="text-3xl font-bold mt-2">
              {lowStockMedicines}
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-5">
            <h3 className="font-semibold text-green-700">
              Inventory Health
            </h3>

            <p className="text-3xl font-bold mt-2">
              {healthScore}%
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;