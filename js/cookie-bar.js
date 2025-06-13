document.addEventListener("DOMContentLoaded", () => {
  const cookieBar = document.querySelector(".cookie-bar");
  const acceptButton = document.querySelector(".cookie-button");

  // Check if user has already accepted cookies
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (!cookiesAccepted) {
    // Show cookie bar after a short delay
    setTimeout(() => {
      cookieBar.classList.add("visible");
    }, 1000);
  }

  // Handle accept button click
  acceptButton.addEventListener("click", () => {
    // Save acceptance to localStorage
    localStorage.setItem("cookiesAccepted", "true");

    // Hide cookie bar with animation
    cookieBar.classList.remove("visible");
  });
});
