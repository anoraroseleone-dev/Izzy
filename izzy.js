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
