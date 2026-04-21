# Technical Documentation — Assignment 3

## 1. Project Architecture & Logic
This portfolio has been extended from a static website into a dynamic web application. Assignment 3 focuses on integrating external APIs, implementing advanced logic, and managing application state.

The architecture follows a modular structure using HTML, CSS, and JavaScript, ensuring separation of concerns and maintainability.

---

## 2. Tech Stack

- **HTML5** — used to structure the content in a semantic and accessible way  
- **CSS3** — used for styling, layout, responsiveness, and visual effects  
- **JavaScript (ES6+)** — used for interactivity, DOM manipulation, API integration, filtering, sorting, and state management  
- **GitHub API** — used to fetch and display live repository data  
- **DummyJSON API** — used to provide dynamic quote content  

### Why this Tech Stack was Used

This stack was chosen because it is lightweight, efficient, and does not require a backend server. It allows the website to remain fast while still supporting dynamic features such as API integration and user interaction.

Using vanilla JavaScript instead of frameworks demonstrates a strong understanding of core web development concepts, including asynchronous programming, event handling, and state management.

Additionally, this approach ensures:
- faster load times due to minimal dependencies  
- easier deployment using static hosting  
- full control over structure and performance  

Overall, this tech stack balances simplicity with functionality, making it ideal for an interactive portfolio application.

## 3. Folder Structure & Organization

The project follows a clean and professional structure:

- **Root (`/`)**
  - `index.html`: Main entry point of the application
  - `README.md`: Project overview and usage instructions  

- **`/css`**
  - `styles.css`: Contains layout, theme variables, animations, and responsive design rules  

- **`/js`**
  - `script.js`: Handles all logic, including DOM manipulation, API integration, filtering, sorting, and state management  

- **`/assets`**
  - Contains images and visual resources  

- **`/docs`**
  - `ai-usage-report.md`: AI usage explanation  
  - `technical-documentation.md`: Technical breakdown  

---

## 4. Advanced Technical Implementations

### A. API Integration

#### 1. Quotes API
A random quote generator is implemented using the **DummyJSON API**.

- Uses `fetch()` with `async/await`
- Displays a loading message before data loads
- Uses `try/catch` to prevent crashes if the API fails
- Injects data dynamically into the DOM

#### 2. GitHub API
The portfolio integrates the **GitHub API** to display live repositories.

- Fetches repository data from the user’s GitHub profile
- Displays:
  - repository name  
  - description  
  - programming language  
  - link to repository  
- Includes error handling for API failures and rate limits

---

### B. Advanced Project Logic

The Project Gallery includes multiple interactive features:

- **Filtering:** Displays projects by category  
- **Searching:** Matches keywords in project title and description  
- **Sorting:** Orders projects alphabetically (A–Z and Z–A)  

These features are combined in a single function, where:
1. Data is filtered  
2. Search conditions are applied  
3. Results are sorted  
4. Final output is rendered to the DOM  

This demonstrates multi-step logical processing.

---

### C. State Management (LocalStorage)

The application uses `localStorage` to preserve user preferences:

- Theme (dark/light mode)  
- Selected project filter  
- Search input  
- Sorting option  

#### Logic:
- On user interaction → data is saved using `localStorage.setItem()`  
- On page load → data is retrieved using `localStorage.getItem()`  
- UI is updated accordingly  

This ensures a consistent experience across page reloads.

---

### D. Responsive Design

The layout is designed to adapt across multiple screen sizes:

- Mobile devices (iPhone)  
- Tablets (iPad)  
- Desktop screens  

Techniques used:
- Flexible containers (Flexbox/Grid)  
- Viewport-based widths  
- Media queries for layout adjustments  

---

### E. Performance Optimization

To ensure smooth performance:

- Images use `loading="lazy"`  
- Code is separated into HTML, CSS, and JS files  
- Unused and inline styles were removed  
- Efficient DOM updates are used to minimize reflows  

---

### F. UI/UX Enhancements

The application includes interactive features such as:

- Time-based greeting  
- Typing animation effect  
- Interactive project cards  
- Custom cursor (enabled only for desktop devices)  

These improve the user experience while maintaining performance.

---

## 5. Deployment & Testing

- **Environment:** Developed using VS Code and Live Server  
- **Testing:** Conducted using browser developer tools  

Tested on:
- Mobile (iPhone dimensions)  
- Tablet (iPad dimensions)  
- Desktop  

The layout was verified to ensure:
- no horizontal overflow  
- proper alignment  
- responsive behavior  

---

## 6. Notes

- GitHub API requests may be rate-limited for unauthenticated users  
- All features were manually tested and validated  
- The application is fully front-end and does not require a backend server  