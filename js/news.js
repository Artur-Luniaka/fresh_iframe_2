// Function to fetch and load JSON data
async function loadJSONData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading JSON data:", error);
    return null;
  }
}

// Load and render game updates
async function loadGameUpdates() {
  const updates = await loadJSONData("data/updates.json");
  if (!updates) return;

  const container = document.getElementById("updates-container");
  if (!container) return;

  container.innerHTML = updates.updates
    .map((update) => createNewsCard(update))
    .join("");
}

// Load and render developer diaries
async function loadDevDiaries() {
  const diaries = await loadJSONData("data/diaries.json");
  if (!diaries) return;

  const container = document.getElementById("diaries-container");
  if (!container) return;

  container.innerHTML = diaries.diaries
    .map((diary) => createNewsCard(diary))
    .join("");
}

function createNewsCard(item) {
  return `
    <div class="news-card">
      <div class="news-image" style="background-image: url('${item.image}')"></div>
      <div class="news-content">
        <h3>${item.title}</h3>
        <p class="news-date">${item.date}</p>
        <p>${item.content}</p>
      </div>
    </div>
  `;
}

// Initialize all dynamic content
document.addEventListener("DOMContentLoaded", () => {
  loadGameUpdates();
  loadDevDiaries();
});
