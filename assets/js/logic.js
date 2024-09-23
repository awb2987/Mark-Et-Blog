document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');

    function applyTheme(theme) {
        document.body.className = theme;
        themeSwitch.checked = theme === 'dark-theme';
    }

    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    applyTheme(savedTheme);

    themeSwitch.addEventListener('change', () => {
        const newTheme = themeSwitch.checked ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
});