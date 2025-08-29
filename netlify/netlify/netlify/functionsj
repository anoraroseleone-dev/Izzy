export async function handler(event) {
  const { message } = JSON.parse(event.body);

  // Call OpenAI API (replace with your API key)
  const reply = `You said: "${message}". I'm here for you, I understand how you feel.`;

  return {
    statusCode: 200,
    body: JSON.stringify({ reply }),
  };
}
