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

  // Default response
  let response = "I’m here 💙 I’m listening.";

  // Expanded dictionary
  const responses = [
    { keywords: ["sad", "upset", "cry"], reply: "I’m sorry you’re feeling this way 💙. Do you want to talk about it?" },
    { keywords: ["happy", "excited", "joy"], reply: "That’s awesome! 😊 What made you feel so good?" },
    { keywords: ["lonely", "alone"], reply: "You’re not alone 💙 I’m here with you." },
    { keywords: ["anxious", "scared", "nervous"], reply: "That sounds really tough 💙. Do you want to tell me what’s on your mind?" },
    { keywords: ["angry", "mad", "frustrated"], reply: "It’s okay to feel angry 💙. Want to vent to me about it?" },
    { keywords: ["help", "advice", "support"], reply: "Of course 💙. Tell me more about what you need help with." },
    { keywords: ["bored"], reply: "Sometimes boredom is your mind asking for something new 💭. Want me to suggest an activity?" },
    { keywords: ["tired", "exhausted"], reply: "Sounds like you could use some rest 💙. Have you been able to relax today?" },
    { keywords: ["stressed"], reply: "Stress can be really heavy 💙. Let’s pause and take a deep breath together." },
    { keywords: ["thank you", "thanks"], reply: "Anytime 💙 I’ve got you." },
  ];

  // Check if the input matches any keywords
  for (let entry of responses) {
    if (entry.keywords.some(word => userText.toLowerCase().includes(word))) {
      response = entry.reply;
      break;
    }
  }

  // Add Izzy's reply after short delay
  setTimeout(() => {
    addMessage("Izzy", response);
  }, 600);
}
