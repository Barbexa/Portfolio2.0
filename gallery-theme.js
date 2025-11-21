
// gallery-theme.js
const body = document.body;

// Function to apply dark or light theme
function applyGalleryTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

// Check saved theme from localStorage (set by main page)
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or system preference if none
if (savedTheme) {
    applyGalleryTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyGalleryTheme(prefersDark ? 'dark' : 'light');
}

// Optional: react to system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const userPref = localStorage.getItem('theme');
    if (!userPref) applyGalleryTheme(e.matches ? 'dark' : 'light');
});
