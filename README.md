# Personal Portfolio Website 🎨

## Overview
A fully responsive personal portfolio website built from scratch using HTML, 
CSS, and JavaScript. The site features three main pages — About, Gallery, 
and Contact — and was designed to showcase web development skills, creative 
work, and professional background in an interactive and visually engaging way.

## Features
- 3-page layout: About, Gallery, and Contact
- Smooth slide-in/slide-out page transitions controlled via JavaScript
- Responsive photo gallery with CSS Grid layout (desktop & mobile breakpoints)
- Contact form with JavaScript validation including:
  - Audio feedback on submission
  - Shake animation on invalid input
  - Warning and success messages
- Mobile-first responsive design throughout

## Tech Stack
- HTML5
- CSS3 (per-page stylesheets, CSS Grid, Mobile-First)
- JavaScript (DOM manipulation, array-based navigation logic)
- npm lite-server (local development server)
- Adobe Illustrator (gallery grid planning)

## Challenges & Solutions

**Challenge 1 — Page Transitions:**  
Slide-in/slide-out animations were breaking when all styles lived in a single 
stylesheet. The fix was to split styles into separate CSS files per page, 
then use a JavaScript array [about, gallery, contact, about, gallery, contact] 
mapped to indices [0,1,2,3,4,5] to control navigation link behaviour and 
trigger the correct animation per page transition.

**Challenge 2 — Responsive Gallery Grid:**  
The CSS Grid layout was initially designed for desktop only and broke on 
mobile. This was resolved by defining a separate grid-template for mobile 
within a dedicated media query, ensuring the gallery adapts cleanly across 
all screen sizes.

## How to Install & Run

### Prerequisites
Make sure you have **Node.js** installed on your machine.  
Download it here: https://nodejs.org/

### Steps

1. Clone the repository:
   git clone https://github.com/blaisechidera/personal-portfolio.git

2. Navigate into the project folder:
   cd personal-portfolio

3. Initialize npm (if not already done):
   npm init -y

4. Install lite-server:
   npm install lite-server --save-dev

5. Open your package.json file and ensure the scripts section includes:
   "scripts": {
     "start": "lite-server"
   }

6. Start the development server:
   npm start

7. Your browser will automatically open the site at:
   http://localhost:3000

### Note
Do not open index.html directly in the browser — always use npm start 
to run the site through lite-server for correct page transitions and 
JavaScript functionality.
