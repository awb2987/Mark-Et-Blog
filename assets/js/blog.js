// WAIT for DOM to fully load before executing script 
document.addEventListener('DOMContentLoaded', () => {
    // GET the container element where posts will be displayed
    const postsContainer = document.getElementById('posts-container');

    // Function to load posts from local storage
    function loadPosts() {
        // RETRIEVE posts from local storage and parse them. DEFAULT empty array if none exist
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        // CLEAR posts container before adding new posts
        postsContainer.innerHTML = '';

        // CHECK if there are no posts and display message if needed
        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>No posts currently available.</p>';
            return;
        }

        // Iterate through each post & create article element for display purposes
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'post'; // ASSIGN class name
            
            // SET inner HTML of post element, display title, username & content
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p><strong>${post.username}</strong></p>
                <p>${post.content}</p>
                <hr>
            `;
            // APPEND post element to posts container
            postsContainer.appendChild(postElement);
        });
    }

    // CALL function to load & display posts
    loadPosts();
});
