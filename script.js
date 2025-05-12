// Swipe actions (for like/dislike buttons)
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('You liked this profile!');
  });
});

document.querySelectorAll('.dislike-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('You skipped this profile.');
  });
});

// Simple Chatbot reply simulation
document.getElementById('chat-input')?.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const userMsg = this.value.trim();
    if (userMsg !== '') {
      const chatBox = document.querySelector('.chat-window');
      const userLine = `<p><strong>You:</strong> ${userMsg}</p>`;
      const botReply = `<p><strong>AI:</strong> ${getBotReply(userMsg)}</p>`;
      chatBox.innerHTML += userLine + botReply;
      chatBox.scrollTop = chatBox.scrollHeight;
      this.value = '';
    }
  }
});

// Dummy AI response logic
function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('date')) return "Plan something fun and relaxed!";
  if (msg.includes('nervous')) return "Totally normal! Be yourself.";
  if (msg.includes('hello')) return "Hi there! How can I help?";
  return "I'm here to help with dating tips and advice!";
}
