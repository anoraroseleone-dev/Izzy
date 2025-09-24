const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

// Function to add messages to chat
function addMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Called when you press "Send"
function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  addMessage("You", userText);
  input.value = "";

  // Expanded "dictionary" of responses
  let response = "I’m Izzy 💙 and I’m here to help.";

  const responses = [
    { keywords: ["sad", "upset", "cry"], reply: "I’m sorry you’re feeling that way 💙. Want to share what’s on your mind?" },
    { keywords: ["happy", "excited", "joy"], reply: "That’s amazing! 😊 Tell me more about what made you feel this way." },
    { keywords: ["lonely", "alone"], reply: "You’re not alone 💙. I’m right here with you." },
    { keywords: ["anxious", "scared", "nervous"], reply: "That sounds hard 💙. Do you want to talk about what’s making you feel anxious?" },
    { keywords: ["angry", "mad", "frustrated"], reply: "It’s okay to feel angry sometimes 💙. Do you want to vent a little?" },
    { keywords: ["help", "advice", "support"], reply: "Of course 💙. Can you tell me more about what you need help with?" },
    { keywords: ["bored"], reply: "Sometimes boredom is your mind asking for something new 💭. Want me to suggest something fun?" },
    { keywords: ["tired", "exhausted"], reply: "Sounds like you could use some rest 💙. Have you had a chance to relax today?" },
    { keywords: ["stressed"], reply: "Stress can feel really heavy 💙. Sometimes taking a deep breath helps. Want me to guide you through one?" },
    { keywords: ["thank you", "thanks"], reply: "Anytime 💙. I’m always here for you." },
  ];

  // Look for a match in the dictionary
  for (let entry of responses) {
    for (let word of entry.keywords) {
      if (userText.toLowerCase().includes(word)) {
        response = entry.reply;
        break;
      }
    }
  }

  // Reply after a little delay (feels natural)
  setTimeout(() => {
    addMessage("Izzy", response);
  }, 600);
}
