// ====== FIREBASE CONFIG ======
// Replace this with your Firebase config from your 
const firebaseConfig = {
  apiKey: "AIzaSyA2bExample123",
  authDomain: "izzy-support.firebaseapp.com",
  projectId: "izzy-support",
  storageBucket: "izzy-support.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123xyz"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ====== AUTH ======
const authContainer = document.getElementById("auth-container");
const appContainer = document.getElementById("app");
const authMessage = document.getElementById("auth-message");

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      authMessage.innerText = "Signed up! You can now sign in.";
    })
    .catch(err => authMessage.innerText = err.message);
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      authContainer.style.display = "none";
      appContainer.style.display = "block";
      loadMessages(userCredential.user.uid);
    })
    .catch(err => authMessage.innerText = err.message);
}

// ====== CHAT SYSTEM ======
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

let isPro = false;
let coins = 0;
let currentVoice = "default";
const familyCode = "IZZYPRO";
let messages = [];

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
  saveMessages(auth.currentUser.uid);

  let reply = "I’m here listening. 💙";

  if (isPro) {
    reply = "Thank you for being Pro! How can I help you today in a deeper way?";
    addCoins();
  }

  messages.push({ sender: "bot", text: reply });
  saveMessages(auth.currentUser.uid);
  userInput.value = "";
  renderMessages();
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";

  const voices = window.speechSynthesis.getVoices();
  if (currentVoice === "female") {
    utterance.voice = voices.find(v => v.name.toLowerCase().includes("female")) || voices[0];
  } else if (currentVoice === "male") {
    utterance.voice = voices.find(v => v.name.toLowerCase().includes("male")) || voices[0];
  }

  window.speechSynthesis.speak(utterance);
}

// ====== COINS ======
function addCoins() {
  coins += 5;
  console.log(`You earned 5 coins! Total: ${coins}`);
}

// ====== VOICE ======
function changeVoice(voiceCode) {
  if (!isPro) {
    alert("Upgrade to Pro to change voices 💙");
    return;
  }
  currentVoice = voiceCode;
  alert(`Voice changed to ${voiceCode}`);
}

// ====== PRO BUTTON ======
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

// ====== FIRESTORE SAVE/LOAD ======
function saveMessages(uid) {
  db.collection("chats").doc(uid).set({ messages });
}

function loadMessages(uid) {
  db.collection("chats").doc(uid).get().then(doc => {
    if (doc.exists) {
      messages = doc.data().messages || [];
      renderMessages();
    } else {
      messages = [{ sender: "bot", text: "Hi, I’m Izzy. I’m here to listen. How are you feeling today?" }];
      renderMessages();
      saveMessages(uid);
    }
  });
}
