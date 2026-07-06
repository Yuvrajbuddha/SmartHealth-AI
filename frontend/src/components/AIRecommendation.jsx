import { useState } from "react";
import axios from "axios";
import {
  BrainCircuit,
  Sparkles,
  RefreshCw,
} from "lucide-react";

import { inventory } from "../data/dummyData";

function AIRecommendation() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const generateRecommendation = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          prompt:
            "Analyze this hospital inventory and provide professional recommendations.",
          inventory,
        }
      );

      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
      setResponse("❌ Unable to generate AI recommendations.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-3">

          <BrainCircuit
            className="text-blue-600"
            size={34}
          />

          <div>
            <h2 className="text-2xl font-bold">
              AI Insights
            </h2>

            <p className="text-gray-500">
              Smart inventory analysis powered by Gemini AI
            </p>
          </div>

        </div>

        <button
          onClick={generateRecommendation}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700"
        >
          <RefreshCw size={18} />
          Analyze
        </button>

      </div>

      <div className="bg-gray-100 rounded-xl p-6 min-h-[280px]">

        {loading ? (

          <div className="flex items-center gap-3">
            <RefreshCw
              className="animate-spin text-blue-600"
              size={22}
            />

            <p>Analyzing inventory...</p>
          </div>

        ) : response ? (

          <pre className="whitespace-pre-wrap text-sm leading-7">
            {response}
          </pre>

        ) : (

          <div className="text-center py-10">

            <Sparkles
              size={50}
              className="mx-auto text-blue-600 mb-4"
            />

            <h3 className="text-xl font-bold">
              AI Recommendation Engine
            </h3>

            <p className="text-gray-500 mt-2">
              Click the Analyze button to let Gemini AI
              evaluate your inventory and generate smart
              recommendations.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default AIRecommendation;