// Load navbar.html into #navbar and wire up navbar-specific behavior
(function initNavbar() {
    const mount = document.getElementById('navbar');
    if (!mount) return;

    fetch('navbar.html', { cache: 'no-store' })
        .then(function(response) { return response.text(); })
        .then(function(html) {
            mount.innerHTML = html;

            // Smooth scrolling for navigation links within the navbar
            var navAnchors = mount.querySelectorAll('a[href^="#"]');
            navAnchors.forEach(function(anchor) {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    var target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            // Mobile menu toggle
            function toggleMobileMenu() {
                var navLinks = mount.querySelector('.nav-links');
                if (navLinks) {
                    navLinks.classList.toggle('active');
                }
            }

            // Add mobile menu button for smaller screens
            var nav = mount.querySelector('nav');
            if (nav && !mount.querySelector('.mobile-menu-btn')) {
                var mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.className = 'mobile-menu-btn';
                mobileMenuBtn.addEventListener('click', toggleMobileMenu);
                nav.appendChild(mobileMenuBtn);
            }
        })
        .catch(function(err) {
            console.error('Failed to load navbar:', err);
        });
})();


