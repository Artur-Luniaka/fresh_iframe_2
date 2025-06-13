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

// Load and render features
async function loadFeatures() {
  const data = await loadJSONData("data/features.json");
  if (!data || !data.features) return;

  const container = document.getElementById("features-container");
  if (!container) return;

  container.innerHTML = data.features
    .map(
      (feature) => `
    <div class="feature-card">
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `
    )
    .join("");
}

// Load and render how to play content
async function loadHowToPlay() {
  const data = await loadJSONData("data/how-to-play.json");
  if (!data) return;

  const container = document.getElementById("controls-container");
  if (!container) return;

  container.innerHTML = `
    <div class="how-to-play-block">
      <div class="how-to-play-title"><span class="icon">🕹️</span>Controls</div>
      <ul>
        ${data.controls
          .map(
            (control) => `
              <li><strong>${control.key}:</strong> ${control.action}</li>
            `
          )
          .join("")}
      </ul>
    </div>
    <div class="how-to-play-block">
      <div class="how-to-play-title"><span class="icon">🎯</span>Objectives</div>
      <ul>
        ${data.objectives
          .map(
            (objective) => `
              <li>${objective}</li>
            `
          )
          .join("")}
      </ul>
    </div>
    <div class="how-to-play-block">
      <div class="how-to-play-title"><span class="icon">💡</span>Tips</div>
      <ul>
        ${data.tips
          .map(
            (tip) => `
              <li>${tip}</li>
            `
          )
          .join("")}
      </ul>
    </div>
  `;
}

// Load and render reviews
async function loadReviews() {
  const data = await loadJSONData("data/reviews.json");
  if (!data || !data.reviews) return;

  const container = document.getElementById("reviews-container");
  if (!container) return;

  container.innerHTML = data.reviews
    .map(
      (review) => `
    <div class="review-card">
      <h4>${review.name}</h4>
      <div class="rating">
        ${Array(5)
          .fill()
          .map(
            (_, index) =>
              `<span class="star ${
                index < review.rating ? "filled" : ""
              }">★</span>`
          )
          .join("")}
      </div>
      <p>${review.text}</p>
    </div>
  `
    )
    .join("");
}

// Load and render level types
async function loadLevelTypes() {
  const data = await loadJSONData("data/levels.json");
  if (!data || !data.levels) return;

  const container = document.getElementById("levels-container");
  if (!container) return;

  container.innerHTML = data.levels
    .map(
      (level) => `
    <div class="level-card">
      <h3>${level.name}</h3>
      <p>${level.description}</p>
      <ul>
        ${level.obstacles
          .map(
            (obstacle) => `
          <li>${obstacle}</li>
        `
          )
          .join("")}
      </ul>
    </div>
  `
    )
    .join("");
}

// Load and render upgrades
async function loadUpgrades() {
  const data = await loadJSONData("data/upgrades.json");
  if (!data || !data.upgrades) return;

  const container = document.getElementById("upgrades-container");
  if (!container) return;

  container.innerHTML = data.upgrades
    .map(
      (upgrade) => `
    <div class="upgrade-card">
      <h3>${upgrade.name}</h3>
      <p>${upgrade.description}</p>
      <div class="upgrade-effect">
        <strong>Effect:</strong> ${upgrade.effect}
      </div>
    </div>
  `
    )
    .join("");
}

// Initialize all dynamic content
document.addEventListener("DOMContentLoaded", () => {
  loadFeatures();
  loadHowToPlay();
  loadReviews();
  loadLevelTypes();
  loadUpgrades();
});
