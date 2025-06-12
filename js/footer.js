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
                                <a href="tel:+61234567890" class="footer-link">+61 234 567 890</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:contact@pengupengu.com" class="footer-link">contact@pengupengu.com</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Southern Australia</span>
                            </div>
                        </div>
                        <div class="footer-domain">
                            <span class="domain-logo">Domain.com</span>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-legal">
                        <a href="pengu-privacy.html" class="legal-link">Privacy Policy</a>
                        <span class="separator">|</span>
                        <a href="pengu-cookies.html" class="legal-link">Cookie Policy</a>
                    </div>
                    <div class="footer-copyright">
                        <p>&copy; ${new Date().getFullYear()} Pengu Pengu. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    `;

  footerPlaceholder.innerHTML = footerHTML;
}

// Load footer when DOM is ready
document.addEventListener("DOMContentLoaded", loadFooter);
