// WAIT for DOM to fully load before executing script
document.addEventListener('DOMContentLoaded', () => {
    // GET checkbox element for switching theme modes
    const themeSwitch = document.getElementById('theme-switch');

    // Function to apply selected theme modes
    function applyTheme(theme) {
        document.body.className = theme; // SET body's class to selected theme 
        // UPDATE checkbox state based on current chosen theme
        themeSwitch.checked = theme === 'dark-theme';
    }

    // RETRIEVE saved theme from local storage, default to 'light-mode' if none currently exist
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    // APPLY saved theme when page loads
    applyTheme(savedTheme);

    // ADD event listener for changes to theme switch
    themeSwitch.addEventListener('change', () => {
        // DETERMINE new theme based on checkbox state
        const newTheme = themeSwitch.checked ? 'dark-theme' : 'light-theme';
        // SAVE new theme to local storage
        localStorage.setItem('theme', newTheme);
        // APPLY new theme
        applyTheme(newTheme);
    });
});
