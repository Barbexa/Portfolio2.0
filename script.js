//Initialize AOS 
AOS.init({
    duration: 1200,
    once: true
})


function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


//Dark Theme initializer
//const toggle = document.getElementById('theme-toggle');
//toggle.addEventListener('click', (event) => {
//event.preventDefault();
//document.documentElement.classList.toggle('dark-theme');
//});

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from reloading the page
    const currentTheme = document.documentElement.getAttribute('dark-theme');
    document.documentElement.setAttribute(
        'data-theme',
        currentTheme === 'green' ? 'default' : 'green'
    );
});
