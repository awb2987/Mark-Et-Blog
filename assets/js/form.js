document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();

        document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

        const username = document.getElementById('username').value.trim();
        const blogTitle = document.getElementById('blog-title').value.tim();
        const blogContent = document.getElementById('blog-content').value.trim();

        let hasError = false;

        if (username === '') {
            document.getElementById('username-error').textContent = 'Username is required';
            hasError = true;
        }

        if (blogTitle === '') {
            document.getElementById('title-error').textContent = 'Blog title is required';
            hasError = true;
        }

        if (blogContent === '') {
            document.getElementById('content-error').textContent = 'Blog content is required';
        }

        if (hasError) return;

        const newPost = {
            username: username,
            title: blogTitle,
            content: blogContent
        };

        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        posts.push(newPost);

        localStorage.setItem('posts', JSON.stringify(posts));

        const postElement = document.createElement('article')
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${blogTitle}</h3>
            <p><strong>${username}</strong></p>
            <p>${blogContent}</p>
            <hr>
        `;

        postsContainer.prepend(postElement);

        postForm.reset();

        window.location.href = 'index.html';
    });
});