// Function to load footer
function loadFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) return;

  const footerHTML = `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-main">
                        <div class="footer-contact">
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <a href="tel:+61234567890" class="footer-link">+61 001 788 330</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:contact@PlayLuckChallenge.com" class="footer-link">contact@PlayLuckChallenge.com</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>120 Collins St, Melbourne VIC 3000, Australia</span>
                            </div>
                        </div>
                        <div class="footer-domain">
                            <span class="domain-logo">PlayLuckChallenge.com</span>
                            <div class="footer-legal">
                                <a href="./pengu-privacy.html" class="legal-link">Privacy Check</a>
                                <span class="separator">|</span>
                                <a href="./pengu-cookies.html" class="legal-link">Cookie Check</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-copyright">
                        <p>&copy; ${new Date().getFullYear()} PlayLuckChallenge.com | All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    `;

  footerPlaceholder.innerHTML = footerHTML;
}

// Load footer when DOM is ready
document.addEventListener("DOMContentLoaded", loadFooter);
