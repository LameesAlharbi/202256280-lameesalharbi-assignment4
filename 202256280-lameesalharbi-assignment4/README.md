# Interactive Software Portfolio — Assignment 3

**Student:** Lamees Alharbi  
**Course:** SWE363: Web Engineering  
**Institution:** KFUPM  

---

## Project Overview
This project is an advanced, interactive personal portfolio website. Building upon previous assignments, this version enhances the application with external API integration, advanced logic (filtering, searching, and sorting), state persistence, and improved documentation.

---

## Key Features

### API Integration
- Fetches inspirational quotes using the DummyJSON API
- Displays live GitHub repositories using the GitHub API
- Includes loading states and error handling

### Project Logic
- Filter projects by category
- Search projects by title or description
- Sort projects (A–Z / Z–A)

### State Management
- Saves theme (dark/light mode)
- Remembers filter, search, and sort after refresh

### UI & Interactivity
- Time-based greeting
- Typing animation
- Interactive project cards
- Custom cursor (desktop only)

### Performance & Responsiveness
- Responsive across mobile, tablet, and desktop
- Lazy loading images
- Clean separation of HTML, CSS, and JavaScript

---

## How to Use

1. Open the homepage
2. Go to the Projects section
3. Use filters to select categories
4. Use search to find projects
5. Use sort dropdown (A–Z / Z–A)
6. View live GitHub projects
7. Refresh the quote section
8. Toggle dark/light mode
9. Refresh page to see saved preferences
10. Test the contact form

---

## Project Structure

- `index.html` — main structure of the website
- `css/styles.css` — styling, layout, and responsive design
- `js/script.js` — logic, interactivity, APIs, and state management
- `assets/images/` — images and visual assets
- `docs/ai-usage-report.md` — AI usage documentation
- `docs/technical-documentation.md` — technical explanation

---

## Tech Stack

- HTML5 → Structure
- CSS3 → Styling & layout
- JavaScript → Logic & interactivity
- GitHub API → Live repositories
- DummyJSON API → Quotes

---

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/LameesAlharbi/202256280-lameesalharbi-assignment3.git
2. Open in VS Code
3. Run with Live Server
4.  **Responsive Testing:** Open Developer Tools (`F12`) and test using the following dimensions:
    * **iPhone:** 440px x 956px
    * **iPad:** 834px x 1194px

---

##  AI Integration Summary
AI tools (Gemini and ChatGPT) were used to assist with debugging, feature planning, API integration, and improving overall code structure. 
All AI-generated suggestions were reviewed, tested, and modified before being integrated into the project.
Full details are provided in:
- `docs/ai-usage-report.md`

---

##  Technical Documentation
See: `docs/technical-documentation.md`

---

##  Notes
- GitHub API may be rate-limited
- All features tested manually

---

**Author:** Lamees Alharbi  
*Software Engineering Student @ KFUPM*