// Mode toggle for light/dark theme with localStorage to remember user preference
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    modeSwitch.checked = true;
}

modeSwitch.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});