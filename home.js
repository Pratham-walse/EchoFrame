// Mock Live Scam News
const newsFeed = document.getElementById("news-feed");

// Mock headlines (replace with API if needed)
const newsArticles = [
  "🔴 Scam Alert: Fraudsters used AI voice to trick man into transferring ₹50,000",
  "⚠️ Deepfake of politician sparks misinformation before election",
  "💸 Fake investment ads using celebrity deepfakes circulating online",
  "🎭 AI-generated fake call scams rising in India",
  "🚨 Hackers spreading fake news using manipulated videos"
];

function loadNews() {
  newsFeed.innerHTML = "";
  newsArticles.forEach(article => {
    const p = document.createElement("p");
    p.textContent = article;
    newsFeed.appendChild(p);
  });
}

// Refresh “live” every 5s
setInterval(loadNews, 5000);

// Initial load
loadNews();
