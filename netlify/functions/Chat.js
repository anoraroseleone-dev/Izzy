exports.handler = async (event) => {
  try {
    const { message } = JSON.parse(event.body);

    // For now, just make Izzy reply simple supportive text
    const reply = `I hear you. You said: "${message}". It's okay to feel this way. I'm here with you. 💙`;

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    return { statusCode: 500, body: "Error: " + err.message };
  }
};
