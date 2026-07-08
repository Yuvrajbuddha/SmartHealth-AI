const { askGemini } = require("../services/geminiService");

const getAIResponse = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);
    const { prompt, inventory } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    let finalPrompt = prompt;

    if (inventory) {
      finalPrompt = `
You are SmartHealth AI, an intelligent hospital inventory assistant.

Analyze the following medicine inventory.

Inventory:
${JSON.stringify(inventory, null, 2)}

User Request:
${prompt}

Provide:

1. Inventory Health Score
2. Critical medicines
3. Low stock medicines
4. Medicines close to expiry
5. Reorder recommendations
6. Demand prediction
7. Final recommendation

Keep the answer professional and well formatted.
`;
    }

    const response = await askGemini(finalPrompt);

    res.json({
      success: true,
      response,
    });
  } catch (err) {
  console.error("Gemini Error:", err);

  res.status(500).json({
    success: false,
    message: err.message,
    error: err.toString(),
  });
}
};

module.exports = { getAIResponse };