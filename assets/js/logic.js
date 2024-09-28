// WAIT for DOM to fully load before executing script
document.addEventListener('DOMContentLoaded', () => {
    // GET checkbox element for switching theme modes
    const themeSwitch = document.getElementById('theme-switch');

    // FUNCTION to apply selected theme modes
    function applyTheme(theme) {
        document.body.className = theme; // SET body's class to selected theme 
        // UPDATE checkbox state based on current chosen theme
        themeSwitch.checked = theme === 'dark-theme';
    }

    // RETRIEVE saved theme from local storage, default to 'light-theme' if none currently exist
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    // APPLY saved theme when page loads
    applyTheme(savedTheme);

    // ADD event listener for changes to theme switch
    themeSwitch.addEventListener('change', () => {
        const newTheme = themeSwitch.checked ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // LOAD posts for blog.html if container exists
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) {
        loadPosts();
    }

    // FUNCTION to load posts from local storage
    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        postsContainer.innerHTML = ''; // CLEAR existing posts

        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>No posts currently available.</p>';
            return;
        }

        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p><strong>${post.username}</strong></p>
                <p>${post.content}</p>
                <hr>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // BACK button functionality
    document.getElementById('back-button')?.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
