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
const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

// Track if Pro is unlocked
let isPro = false;

// Function to add messages to chat
function addMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Function to unlock Pro
function unlockPro(code) {
  const proCode = "IZZYPRO2025"; // Example code
  if (code === proCode) {
    isPro = true;
    addMessage("Izzy", "💎 Pro mode unlocked! I can now give longer, deeper responses for you.");
  } else {
    addMessage("Izzy", "Sorry 💙, that code isn’t valid.");
  }
}

// Function to send messages
function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  addMessage("You", userText);
  input.value = "";

  // Check if user wants to unlock Pro
  if (userText.toLowerCase().startsWith("procode ")) {
    const codeEntered = userText.split(" ")[1];
    unlockPro(codeEntered);
    return;
  }

  // Default response
  let response = "I hear you 💙. It’s completely understandable to feel this way.";

  // Expanded dictionary with normal and Pro responses
  const responses = [
    { keywords: ["sad", "upset", "cry"], replies: [
      "I’m really sorry you’re feeling sad 💙. It’s understandable why this would be hard on you, and it’s not your fault.",
      "It’s okay to cry 💙. Feeling sad is normal, and you’re not to blame.",
      "I hear you 💙. This must be heavy, and it’s understandable that it affects you deeply."
    ], proReplies: [
      "I can tell this is weighing on you heavily 💙. Feeling sad in this situation is completely normal, and none of it is your fault. Want to talk about what’s been happening step by step?",
      "It’s okay to feel the way you do 💙. Let’s explore why this is so hard for you and remind you that your feelings are valid.",
      "Sadness can feel overwhelming 💙. Remember, you’re not alone, and you don’t have to carry this by yourself. Let’s unpack it together."
    ]},
    { keywords: ["happy", "excited", "joy"], replies: [
      "That’s awesome! 😊 What made you feel so good?",
      "Yay! I love hearing happy news 💙. Tell me more!",
      "You deserve that happiness! 💙 Want to share why you’re feeling it?"
    ], proReplies: [
      "Your joy is contagious 💙! I’d love to hear all the details so we can really celebrate this together.",
      "Feeling this kind of excitement is wonderful 💙. Let’s explore what brought this happiness into your life!",
      "It’s amazing to feel such joy 💙. Let’s talk about what made you feel this way and how to savor it fully."
    ]},
    // Add more moods similarly...
  ];

  // Match keywords
  for (let entry of responses) {
    if (entry.keywords.some(word => userText.toLowerCase().includes(word))) {
      const arrayToUse = isPro && entry.proReplies ? entry.proReplies : entry.replies;
      const randomIndex = Math.floor(Math.random() * arrayToUse.length);
      response = arrayToUse[randomIndex];
      break;
    }
  }

  // Add Izzy's reply after delay
  setTimeout(() => {
    addMessage("Izzy", response);
  }, 600);
}
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

let isPro = false;
let coins = 0;
let currentVoice = "default";
const familyCode = "IZZYPRO"; // secret code for family/friends

let messages = [
  { sender: "bot", text: "Hi, I’m Izzy. I’m here to listen. How are you feeling today?" }
];

function renderMessages() {
  chat.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.style.margin = "10px 0";
    div.style.textAlign = msg.sender === "user" ? "right" : "left";

    const bubble = document.createElement("div");
    bubble.style.display = "inline-block";
    bubble.style.padding = "10px 15px";
    bubble.style.borderRadius = "20px";
    bubble.style.background = msg.sender === "user" ? "#4f83ff" : "#eee";
    bubble.style.color = msg.sender === "user" ? "#fff" : "#000";
    bubble.innerText = msg.text;

    div.appendChild(bubble);

    if (msg.sender === "bot") {
      const speakBtn = document.createElement("button");
      speakBtn.innerText = "🔊";
      speakBtn.style.marginLeft = "10px";
      speakBtn.onclick = () => speak(msg.text);
      div.appendChild(speakBtn);
    }

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  });
}

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  messages.push({ sender: "user", text: input });

  let reply = "I’m here listening. 💙";

  if (isPro) {
    reply = "Thank you for being Pro! How can I help you today in a deeper way?";
    addCoins();
  }

  messages.push({ sender: "bot", text: reply });
  userInput.value = "";
  renderMessages();
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";

  const availableVoices = window.speechSynthesis.getVoices();
  if (currentVoice === "female") {
    utterance.voice = availableVoices.find(v => v.name.toLowerCase().includes("female")) || availableVoices[0];
  } else if (currentVoice === "male") {
    utterance.voice = availableVoices.find(v => v.name.toLowerCase().includes("male")) || availableVoices[0];
  }

  window.speechSynthesis.speak(utterance);
}

// Coins system
function addCoins() {
  coins += 5; // 5 coins per message for Pro
  console.log(`You earned 5 coins! Total: ${coins}`);
}

// Change voice
function changeVoice(voiceCode) {
  if (!isPro) {
    alert("Upgrade to Pro to change voices 💙");
    return;
  }
  currentVoice = voiceCode;
  alert(`Voice changed to ${voiceCode}`);
}

// Pro button logic
function proClick() {
  const code = prompt("Enter your Pro code (for family/friends) or leave blank to donate $5/month:");
  if (code === familyCode) {
    isPro = true;
    alert("Pro unlocked! Enjoy deeper responses, coins, and voices 💙");
  } else {
    const donate = confirm("You need to donate $5/month to unlock Pro. Click OK to donate.");
    if (donate) {
      window.open("https://www.savethechildren.org/us/what-we-do/donate", "_blank");
      alert("After donating, refresh the page and Pro will unlock for you!");
    }
  }
}

// Initial render
renderMessages();
let proActive = false;

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const text = input.value.trim();
  if (!text) return;

  // User message
  const userDiv = document.createElement("div");
  userDiv.className = "user-message";
  userDiv.textContent = text;
  chat.appendChild(userDiv);

  // Izzy's reply
  const reply = document.createElement("div");
  reply.className = "bot-message";

  if (proActive) {
    reply.textContent = "✨ [Pro Izzy] That sounds really tough. You're not alone — I’m proud of you for sharing this.";
  } else {
    reply.textContent = "💙 [Izzy] I’m here, I’m listening.";
  }

  chat.appendChild(reply);

  // clear + scroll
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

function unlockPro() {
  const code = prompt("Enter your Pro Code 💎:");
  if (code === "IZZYPRO2025") {
    proActive = true;
    alert("✅ Pro Mode Activated!");
    document.body.classList.add("pro-active");
  } else {
    alert("❌ Invalid code.");
  }
}

