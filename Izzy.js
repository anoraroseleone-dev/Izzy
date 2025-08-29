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
  const text = input.value.trim();
  if (!text) return;
  
  messages.push({ sender: "user", text });
  input.value = "";

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
