const { callAI } = require("../services/aiService");
const categoryPrompt = require("../prompts/categoryPrompt");
const proposalPrompt = require("../prompts/proposalPrompt");

exports.generateCategory = async (req, res) => {
  try {
    const { productName, description } = req.body;

    const prompt = categoryPrompt(productName, description);

    const aiResponse = await callAI(prompt);

    res.json({
      success: true,
      data: JSON.parse(aiResponse)
    });

  } catch (error) {
    res.status(500).json({ error: "AI processing failed" });
  }
};

exports.generateProposal = async (req, res) => {
  try {
    const { clientType, budget, goal } = req.body;

    const prompt = proposalPrompt(clientType, budget, goal);

    const aiResponse = await callAI(prompt);

    res.json({
      success: true,
      data: JSON.parse(aiResponse)
    });

  } catch (error) {
    res.status(500).json({ error: "AI processing failed" });
  }
};