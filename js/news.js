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
    .map(
      (update) => `
        <article class="news-card">
            <h3>${update.title}</h3>
            <div class="date">${update.date}</div>
            <p>${update.content}</p>
            <a href="${update.link}" class="read-more">Read More</a>
        </article>
    `
    )
    .join("");
}

// Load and render developer diaries
async function loadDevDiaries() {
  const diaries = await loadJSONData("data/diaries.json");
  if (!diaries) return;

  const container = document.getElementById("diaries-container");
  if (!container) return;

  container.innerHTML = diaries.diaries
    .map(
      (diary) => `
        <article class="news-card">
            <h3>${diary.title}</h3>
            <div class="date">${diary.date}</div>
            <p>${diary.content}</p>
            <a href="${diary.link}" class="read-more">Read More</a>
        </article>
    `
    )
    .join("");
}

// Initialize all dynamic content
document.addEventListener("DOMContentLoaded", () => {
  loadGameUpdates();
  loadDevDiaries();
});
