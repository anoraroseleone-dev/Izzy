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
const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

// Add messages to chat
function addMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Send message function
function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  addMessage("You", userText);
  input.value = "";

  // Default empathetic response
  let response = "I hear you 💙. It’s completely understandable to feel this way.";

  // Expanded dictionary with human-like responses
  const responses = [
    { keywords: ["sad", "upset", "cry"], replies: [
      "I’m really sorry you’re feeling sad 💙. It makes sense why this would be hard on you, and it’s not your fault.",
      "It’s okay to cry 💙. Feeling sad is a normal response, and you’re not to blame.",
      "I hear you 💙. This must be heavy, and it’s understandable that it affects you deeply."
    ]},
    { keywords: ["happy", "excited", "joy"], replies: [
      "Yay! 😊 That’s wonderful to hear — you deserve this happiness 💙.",
      "I love that you’re feeling joyful 💙! Moments like this are so important.",
      "It’s amazing to feel excitement 💙. Celebrate that feeling, you’ve earned it!"
    ]},
    { keywords: ["lonely", "alone"], replies: [
      "You’re not alone 💙. It’s normal to feel lonely sometimes, and it’s not your fault.",
      "Feeling alone can be really tough 💙. I’m here with you, and it makes sense you’d feel this way.",
      "Loneliness is hard 💙, and it’s completely understandable. You don’t have to face it alone."
    ]},
    { keywords: ["anxious", "scared", "nervous"], replies: [
      "Feeling anxious can be overwhelming 💙. It’s not your fault, and it’s okay to feel this way.",
      "I understand how scary this must feel 💙. Your feelings are valid, and it’s okay to take a moment.",
      "Anxiety is exhausting 💙, but it’s understandable and not a reflection on you."
    ]},
    { keywords: ["angry", "mad", "frustrated"], replies: [
      "It’s okay to feel angry 💙. This situation is understandably frustrating.",
      "I hear your frustration 💙. You have every right to feel this way, and it’s not your fault.",
      "Anger is a normal emotion 💙. Let’s talk it out together — it’s understandable."
    ]},
    { keywords: ["help", "advice", "support"], replies: [
      "Of course 💙. I’m here to support you, and it’s normal to need help sometimes.",
      "I’ll do my best to guide you 💙. Asking for help shows strength, not weakness.",
      "You deserve support 💙. It’s okay to ask for help when things feel heavy."
    ]},
    { keywords: ["bored"], replies: [
      "Boredom happens 💭. Your mind is asking for stimulation, and that’s totally normal.",
      "It’s okay to feel bored 💙. Maybe I can suggest something fun to do?",
      "Boredom can feel frustrating 💙. It’s understandable and doesn’t mean anything’s wrong with you."
    ]},
    { keywords: ["tired", "exhausted"], replies: [
      "It’s completely understandable to feel tired 💙. You’ve been doing your best, and that’s enough.",
      "Feeling exhausted is normal 💙. Make sure to take care of yourself, you deserve rest.",
      "Your body and mind might need a break 💙. It’s okay to rest and recharge."
    ]},
    { keywords: ["stressed"], replies: [
      "Stress can feel really heavy 💙. It’s understandable, and it’s not your fault.",
      "I hear you 💙. Taking deep breaths can help, and it’s normal to feel stressed sometimes.",
      "Being stressed is tough 💙. Your feelings are valid, and it’s okay to pause for a moment."
    ]},
    { keywords: ["thank you", "thanks"], replies: [
      "Anytime 💙. I’m glad I can be here for you.",
      "You’re welcome 💙. Always happy to support you.",
      "Of course 💙. It means a lot that you trust me enough to share."
    ]},
  ];

  // Match user input with keywords
  for (let entry of responses) {
    if (entry.keywords.some(word => userText.toLowerCase().includes(word))) {
      const randomIndex = Math.floor(Math.random() * entry.replies.length);
      response = entry.replies[randomIndex];
      break;
    }
  }

  // Add Izzy's reply after short delay
  setTimeout(() => {
    addMessage("Izzy", response);
  }, 600);
}
