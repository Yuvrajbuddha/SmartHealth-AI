
import { useState } from "react";
import axios from "axios";
import {
  Bot,
  PackageSearch,
  AlertTriangle,
  TrendingUp,
  CalendarClock,
} from "lucide-react";

function InventoryAI({ inventory }) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const askAI = async (question) => {
    try {
      setLoading(true);

      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/ai/chat`,
  {
    inventory,
    question,
  }
);

      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
      setResponse("❌ Unable to connect to AI.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-6">
        <Bot className="text-blue-600" size={32} />
        <div>
          <h2 className="text-2xl font-bold">
            AI Inventory Assistant
          </h2>
          <p className="text-gray-500">
            Analyze your medicine inventory using AI.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

        <button
          onClick={() =>
            askAI("Which medicines are running low?")
          }
          className="bg-red-500 text-white rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-red-600"
        >
          <AlertTriangle size={18} />
          Analyze Low Stock
        </button>

        <button
          onClick={() =>
            askAI("Suggest what medicines should be reordered.")
          }
          className="bg-blue-600 text-white rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-blue-700"
        >
          <PackageSearch size={18} />
          Suggest Reorder
        </button>

        <button
          onClick={() =>
            askAI("Predict next month's inventory demand.")
          }
          className="bg-green-600 text-white rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-green-700"
        >
          <TrendingUp size={18} />
          Predict Demand
        </button>

        <button
          onClick={() =>
            askAI("Which medicines are close to expiry?")
          }
          className="bg-yellow-500 text-white rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-yellow-600"
        >
          <CalendarClock size={18} />
          Expiry Analysis
        </button>

      </div>

      <div className="mt-8 bg-gray-100 rounded-xl p-5 min-h-[220px]">

        <h3 className="font-bold text-lg mb-3">
          🤖 AI Recommendation
        </h3>

        {loading ? (
          <p>Analyzing inventory...</p>
        ) : (
          <pre className="whitespace-pre-wrap text-sm">
            {response ||
              "Click any AI action above to analyze your inventory."}
          </pre>
        )}

      </div>

    </div>
  );
}

export default InventoryAI;