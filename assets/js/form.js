// WAIT for DOM to fully load before executing script
document.addEventListener('DOMContentLoaded', () => {
    // GET form element for submitting posts
    const postForm = document.getElementById('post-form');
    // GET container element where posts will be displayed
    const postsContainer = document.getElementById('posts-container');

    // ADD event listener for form submission
    postForm.addEventListener('submit', (event) => {
        // PREVENT default form submission behavior
        event.preventDefault();

        // CLEAR existing error messages
        document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

        // RETRIEVE & trim input values from form
        const username = document.getElementById('username').value.trim();
        const blogTitle = document.getElementById('blog-title').value.tim();
        const blogContent = document.getElementById('blog-content').value.trim();

        let hasError = false; // FLAG to track if validation errors occur

        // VALIDATE username input
        if (username === '') {
            document.getElementById('username-error').textContent = 'Username is required';
            hasError = true;
        }

        // VALIDATE blog title input
        if (blogTitle === '') {
            document.getElementById('title-error').textContent = 'Blog title is required';
            hasError = true;
        }

        // VALIDATE blog content input
        if (blogContent === '') {
            document.getElementById('content-error').textContent = 'Blog content is required';
        }

        // IF validation errors, exit function
        if (hasError) return;

        // CREATE new post object
        const newPost = {
            username: username,
            title: blogTitle,
            content: blogContent
        };

        // RETRIEVE existing posts from local storage or initialize as empty array
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        // ADD new post to post array
        posts.push(newPost);

        // SAVE updated posts array back to local storage
        localStorage.setItem('posts', JSON.stringify(posts));

        // CREATE new article element to display new post
        const postElement = document.createElement('article');
        postElement.className = 'post'; // ASSIGN class name
        postElement.innerHTML = `
            <h3>${blogTitle}</h3>
            <p><strong>${username}</strong></p>
            <p>${blogContent}</p>
            <hr>
        `;

        // PREPEND new post element to posts container
        postsContainer.prepend(postElement);

        // RESET form fields for new input
        postForm.reset();

        // REDIRECT to index page
        window.location.href = 'index.html';
    });
});
