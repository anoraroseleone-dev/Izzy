const chatBox = document.getElementById("chat");
const input = document.getElementById("userInput");

const messages = [
  { sender: "bot", text: "Hi, I’m Izzy. I’m here to listen. How are you feeling today?" }
];

function renderMessages() {
  chatBox.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = `message ${msg.sender}`;
    div.textContent = msg.text;
    if (msg.sender === "bot") {
      const speakBtn = document.createElement("button");
      speakBtn.textContent = "🔊";
      speakBtn.onclick = () => speak(msg.text);
      div.appendChild(speakBtn);
    }
    chatBox.appendChild(div);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  // Track Pro access
let isPro = false;

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (message === "") return; // don’t send empty messages

  // Show the user’s message
  const chat = document.getElementById("chat");
  const userMsg = document.createElement("p");
  userMsg.textContent = "You: " + message;
  chat.appendChild(userMsg);

  // --- Check for secret Pro code ---
  if (message.toUpperCase() === "FREEPRO") {
    isPro = true;
    const proMsg = document.createElement("p");
    proMsg.textContent = "🎉 Pro unlocked! You now have unlimited access.";
    proMsg.style.color = "green";
    chat.appendChild(proMsg);
    input.value = "";
    return;
  }

  // --- Izzy’s reply ---
  const reply = document.createElement("p");
  if (isPro) {
    reply.textContent = "Izzy (Pro): Thanks for being a Pro supporter 💙";
  } else {
    reply.textContent = "Izzy: Thanks for sharing. Remember, type FREEPRO to unlock Pro!";
  }
  chat.appendChild(reply);

  // Scroll to bottom
  chat.scrollTop = chat.scrollHeight;

  // Clear input
  input.value = "";
}


  // Fake reply (demo mode)
  setTimeout(() => {
    const reply = getIzzyReply(text);
    messages.push({ sender: "bot", text: reply });
    renderMessages();
  }, 600);

  renderMessages();
}

function getIzzyReply(userText) {
  return "I hear you. That sounds really important. Tell me a little more about how that feels for you.";
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
}

// First render
renderMessages();
let coins = 5;
let isPro = false;

function updateCoins() {
  document.getElementById("coinCount").innerText = `💰 Coins: ${coins}`;
}// Show popup when Pro button is clicked
document.getElementById("proButton").addEventListener("click", () => {
  document.getElementById("proPopup").style.display = "flex";
});

// Close popup
function closePopup() {
  document.getElementById("proPopup").style.display = "none";
}

// Check Pro code
function checkProCode() {
  const code = document.getElementById("proCodeInput").value;
  const message = document.getElementById("proMessage");

  if (code === "FRIENDS2025") {
    message.textContent = "✅ Success! Pro unlocked for free 🎉";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Invalid code. Try again.";
    message.style.color = "red";
  }
}let isPro = false; // default is not Pro

function checkProCode() {
  const code = document.getElementById("proCodeInput").value;
  const message = document.getElementById("proMessage");

  if (code === "IZZYPRO2025") {   // <-- your real secret code
    isPro = true; // now they are Pro
    message.textContent = "✅ Success! Pro unlocked 🎉";
    message.style.color = "green";

    // Example: unlock Pro-only stuff
    document.body.classList.add("pro-active");
  } else {
    message.textContent = "❌ Invalid code. Try again.";
    message.style.color = "red";
  }
}



