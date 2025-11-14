// AOS
AOS.init({
    duration: 1200,
    once: true
});

// Menu toggle
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// THEME SWITCHER (fixed)
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const themeImage = document.getElementById('theme-image');
const themeImages = document.getElementById('theme-images');

// APPLY THEME
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
        themeImage.src = "assets/darkportfolio.png";
        themeImages.src = "assets/darkportfolio.png";
    } else {
        body.classList.remove('dark-theme');
        themeSwitch.checked = false;
        themeImage.src = "assets/portfolioimg.png";
        themeImages.src = "assets/portfolioimg.png";
    }
}

// LOAD SAVED OR SYSTEM PREFERENCE
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
}

// SYSTEM THEME CHANGE
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const userPref = localStorage.getItem('theme');
    if (!userPref) applyTheme(e.matches ? 'dark' : 'light');
});

// MANUAL TOGGLE
themeSwitch.addEventListener('change', () => {
    const isDark = themeSwitch.checked;
    applyTheme(isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

