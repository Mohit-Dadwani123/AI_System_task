const openai = require("../config/openai");

async function callAI(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You generate structured JSON outputs." },
        { role: "user", content: prompt }
      ],
      temperature: 0.3
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI Error:", error);
    throw error;
  }
}

module.exports = { callAI };