# Introduction

The Project was created using Create React App CLI<br/>
**Tech-stack**: JS, JSX, React, Context API, Sass/CSS, Timeout.js.<br/>
**Automation Tools**: ESLint, Sass Lint, Prettier, Env, lint-staged, husky.

## Features
- Responsive Web page - Mobile First Approach
- Posts based on API call
- Pagination Covered
- State management across two pages using Context API
- Filter Posts by Category
- Randomized color tokens for categories
- Browser back is covered
- Helmet based SEO for the index html
- Animation for card hover
- Atomic Design Principles (Atom, Molecule, Complex)

## Assumptions
- Showing the top two categories per post in the card
- Card click takes you to the post detail page
- Truecaller logo is the default route link

## Folder Structure
src
- index.js -> app.js
- api -> requests
- assets 
    - images -> header
    - logotypes -> logo
- components
    - Layout
    - Shared -> atomic design principles(Banner, Card,      Category, Dot, Footer, Header, Pagination, Profile, Seo)
- pages
    - Home
    - Post
- utils -> util

## To run locally

- Install dependencies `npm install`
- Run the server `npm start`
- Build the Project `npm run build`


