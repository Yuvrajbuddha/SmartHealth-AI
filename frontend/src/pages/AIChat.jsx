import { useState } from "react";
import axios from "axios";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        prompt,
      });

      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
      setResponse("❌ Failed to get AI response.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-2">
        🤖 AI Health Assistant
      </h1>

      <p className="text-gray-500 mb-6">
        Ask any healthcare or inventory related question.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: What is diabetes?"
        className="w-full h-40 border rounded-xl p-4 outline-none resize-none"
      />

      <button
        onClick={askAI}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {response && (
        <div className="mt-8 bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">
            AI Response
          </h2>

          <p className="whitespace-pre-wrap">
            {response}
          </p>
        </div>
      )}

    </div>
  );
}

export default AIChat;