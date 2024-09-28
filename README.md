# Mark-Et-Blog

## Description

Mark-Et-Blog is a simple blog application that enables users to submit blog posts, view them on a separate page, and toggle between light and dark themes. It utilizes the Local Storage API to store posts, ensuring that data persists even after the page is refreshed.

## Table of Contents

- [Overview](#overview)
- [Files and Structure](#files-and-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Links](#links)
- [Acknowledgements](#acknowledgements)

## Overview

This project is a simple blog application that allows users to submit blog posts via a form and view them on a separate page. The project supports light and dark themes, with styles adjusted based on user preferences. All data is stored locally using the browser's Local Storage API.

## Files and Structure

### HTML Files

- **`index.html`**: The landing page where users can submit new blog posts.
- **`blog.html`**: The page that displays all blog posts.

### JavaScript Files

- **`form.js`**: Handles form submission, validation, and storing new posts in Local Storage.
- **`blog.js`**: Loads and displays posts from Local Storage.
- **`logic.js`**: Manages the theme toggling functionality.

### CSS Files

- **`style.css`**: Contains global styles and theme variables.
- **`form.css`**: Styles specific to the blog submission form.
- **`blog.css`**: Styles for displaying blog posts.

## Setup

1. **Clone the Repository**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open in Browser**

   Open `index.html` in your browser to view the application.

## Usage

- Submit a new blog post using the form on the landing page.
- Switch between light and dark themes using the theme toggle.

## Screenshots

![Screenshot of Landing Blog Submission Page Light Mode](./assets/images/Landing%20page%20light%20mode.png)
![Screenshot of Landing Blog Submission Page Dark Mode](./assets/images/Landing%20page%20dark%20mode.png)
![Screenshot of Blog Posts Light Mode](./assets/images/Blog%20page%20light%20mode.png)
![Screenshot of Blog Posts Dark Mode](./assets/images/Blog%20page%20dark%20mode.png)

*Screenshots showcasing the application in action.*

## Links

- [GitHub Repository](https://github.com/awb2987/Mark-Et-Blog)
- [Deployed Application](https://awb2987.github.io/Mark-Et-Blog/)

## Acknowledgements

Thank you to all the resources and documentation that helped in the development of this project.
