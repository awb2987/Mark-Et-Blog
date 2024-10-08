// WAIT for DOM to fully load before executing script
document.addEventListener('DOMContentLoaded', () => {
    // GET form element for submitting posts
    const postForm = document.getElementById('post-form');

    // CHECK if postForm exists to avoid errors on pages without the form
    if (postForm) {
        // ADD event listener for form submission
        postForm.addEventListener('submit', (event) => {
            // PREVENT default form submission behavior
            event.preventDefault();
            // CLEAR existing error messages
            document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

            // RETRIEVE & trim input values from form
            const username = document.getElementById('username').value.trim();
            const blogTitle = document.getElementById('blog-title').value.trim();
            const blogContent = document.getElementById('blog-content').value.trim();

            let hasError = false;

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
                hasError = true;
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

            // REDIRECT to blog page to view posts
            window.location.href = 'blog.html';
        });
    }
});
