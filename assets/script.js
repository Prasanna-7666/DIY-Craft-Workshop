/**
 * DIY Craft Workshop
 * Global Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const body = document.body;

    const setIcon = (isDark) => {
        document.querySelectorAll('.theme-icon').forEach(icon => {
            if (isDark) {
                icon.classList.remove('bi-moon-stars');
                icon.classList.add('bi-sun');
            } else {
                icon.classList.remove('bi-sun');
                icon.classList.add('bi-moon-stars');
            }
        });
        // also fallback for old id so we don't break until html is updated
        const oldIcon = document.getElementById('themeIcon');
        if (oldIcon) {
            if (isDark) {
                oldIcon.classList.remove('bi-moon-stars');
                oldIcon.classList.add('bi-sun');
            } else {
                oldIcon.classList.remove('bi-sun');
                oldIcon.classList.add('bi-moon-stars');
            }
        }
    };

    // Check for saved theme
    const savedTheme = localStorage.getItem('craft-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        setIcon(true);
    }

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');

            // Save preference
            localStorage.setItem('craft-theme', isDark ? 'dark' : 'light');

            // Toggle Icon
            setIcon(isDark);
        });
    });

    const oldThemeBtn = document.getElementById('themeToggle');
    if (oldThemeBtn && !Array.from(themeToggleBtns).includes(oldThemeBtn)) {
        oldThemeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('craft-theme', isDark ? 'dark' : 'light');
            setIcon(isDark);
        });
    }

    // 2. Back To Top Button Logic
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Current Year for Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = "2026"; // Explicitly 2026 as per user rules
    }

    // 4. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            }
        });
    }
});
