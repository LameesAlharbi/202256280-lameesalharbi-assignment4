# Technical Documentation — Assignment 4

## 1. Project Architecture & Logic
This portfolio has been extended from a static website into a fully interactive web application. Assignment 4 focuses on refining functionality, improving UI/UX, and introducing a creative feature that enhances user experience.

The architecture follows a modular structure using HTML, CSS, and JavaScript, ensuring separation of concerns and maintainability.

---

## 2. Tech Stack

- **HTML5** — structures the content semantically  
- **CSS3** — handles styling, layout, responsiveness, and animations  
- **JavaScript (ES6+)** — manages interactivity, DOM manipulation, APIs, and logic  
- **GitHub API** — provides live repository data  
- **DummyJSON API** — provides dynamic quotes  

### Why this Tech Stack was Used

This stack is lightweight and efficient, allowing the application to remain fast while still supporting dynamic features.

Using vanilla JavaScript demonstrates a strong understanding of:
- asynchronous programming  
- event handling  
- state management  

Advantages:
- fast performance (no heavy frameworks)  
- easy deployment via static hosting (GitHub Pages)  
- full control over design and logic  

---

## 3. Folder Structure & Organization

- **Root (`/`)**
  - `index.html`
  - `README.md`

- **`/css`**
  - `styles.css`

- **`/js`**
  - `script.js`

- **`/assets`**
  - images and visual assets

**`/docs`**
  - `ai-usage-report.md` — documents AI tools, usage, and learning outcomes  
  - `technical-documentation.md` — explains architecture, implementation, and design decisions  
---

## 4. Advanced Technical Implementations

### A. API Integration

#### Quotes API
- Uses `fetch()` with `async/await`
- Displays loading state
- Handles errors with `try/catch`

#### GitHub API
- Fetches repositories dynamically
- Displays project data (name, description, language)
- Handles API errors and rate limits

---

### B. Advanced Project Logic

Implements:
- filtering
- searching
- sorting

Processing flow:
1. Filter dataset  
2. Apply search  
3. Sort results  
4. Render output  

---

### C. State Management

Uses `localStorage` to store:
- theme preference  
- filters  
- search input  
- sorting option  

---

### D. Responsive Design

Ensures compatibility across:
- mobile  
- tablet  
- desktop  

Techniques:
- flexible layouts  
- media queries  
- adaptive sizing  

---

### E. Performance Optimization

- lazy loading images  
- efficient DOM updates  
- separated files for maintainability  

---

### F. UI/UX Enhancements

- dynamic greeting  
- typing animation  
- interactive project cards  
- custom cursor  

---

### G. Innovation: Skills Orbit Animation

A unique feature was implemented to visually represent technical skills.

#### Implementation:
- CSS-based animation using `transform` and `@keyframes`
- Skills positioned using rotation and translation
- Continuous orbiting motion around a central element

#### Design Choices:
- space-themed layout to match overall design
- glassmorphism styling for visual consistency
- individual color tinting for each skill

#### Purpose:
- improves visual engagement  
- presents skills in a non-traditional way  
- enhances the overall user experience  

---

## 5. Deployment & Testing

- deployed using GitHub Pages  
- tested using browser developer tools  

Tested on:
- mobile  
- tablet  
- desktop  

Verified:
- responsiveness  
- alignment  
- absence of overflow  

---

## 6. Notes

- GitHub API may be rate-limited  
- application is fully front-end  
- all features tested manually  