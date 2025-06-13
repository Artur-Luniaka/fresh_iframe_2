// Function to load header
function loadHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return;

  const headerHTML = `
        <header class="site-header">
            <div class="header-container">
                <a href="./" class="logo">
                    <span class="logo-text">Domain.com</span>
                </a>
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <span class="menu-icon"></span>
                </button>
                <nav class="main-nav">
                    <a href="./" class="nav-link">Iceberg</a>
                    <a href="./pengu-log.html" class="nav-link">Penguin Post</a>
                    <a href="./pengu-contacts.html" class="nav-link">Send a Fish</a>
                    <a href="./#how-to-play" class="nav-link">Sliding Guide</a>
                    <a href="./pengu-disclaimer.html" class="nav-link">Ice Rules</a>
                </nav>
            </div>
        </header>
        <div class="menu-overlay"></div>
    `;

  headerPlaceholder.innerHTML = headerHTML;
  initializeHeader();
}

// Initialize header functionality
function initializeHeader() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");
  const menuOverlay = document.querySelector(".menu-overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  function toggleMenu() {
    mobileMenuBtn.classList.toggle("active");
    mainNav.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.style.overflow = mainNav.classList.contains("active")
      ? "hidden"
      : "";
  }

  // Close menu when clicking overlay
  menuOverlay.addEventListener("click", toggleMenu);

  // Toggle menu when clicking button
  mobileMenuBtn.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Close menu on window resize if open
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && mainNav.classList.contains("active")) {
      toggleMenu();
    }
  });
}

// Load header when DOM is ready
document.addEventListener("DOMContentLoaded", loadHeader);
