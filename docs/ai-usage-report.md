# AI Usage Report — Assignment 4

**Student:** Lamees Alharbi  
**Tools:** Gemini 3, ChatGPT  
**Date:** April 2026  

---

# 1. Detailed AI Assistance & Problem Solving

### A. UI/UX: Glassmorphism Implementation
* **Prompting Strategy:** I requested a "frosted glass" CSS architecture that would remain legible over a high-contrast background.
* **AI Contribution:** Provided the foundational `backdrop-filter: blur()` and `rgba` background logic.
* **Refinement & Adaptation:** I adjusted the blur intensity to **20px** and fine-tuned contrast and saturation to ensure readability across devices, especially on iPad screens.

---

### B. Responsive Debugging (iPad & iPhone)
* **The Problem:** Layout shifting and horizontal overflow on mobile devices.
* **AI Troubleshooting:** AI identified conflicts between fixed widths and padding.
* **The Solution:** Implemented `box-sizing: border-box` and switched to viewport-based widths, ensuring consistent layout across all screen sizes.

---

### C. API Integration (Quotes + GitHub)
* **AI Contribution:** Assisted in structuring `fetch()` logic using `async/await`.
* **Enhancements:**
  - Added `try/catch` for error handling
  - Implemented loading states for better UX
* **Challenges:** Encountered GitHub API rate limiting (403 errors) and resolved it through debugging and proper request handling.

---

### D. Advanced Logic (Filtering, Searching, Sorting)
* **AI Contribution:** Helped design a system combining multiple logical operations.
* **Implementation:** Applied sequential processing:
  1. Filter data
  2. Apply search conditions
  3. Sort results
  4. Render dynamically
* **Outcome:** Transformed the project section into an interactive system rather than a static display.

---

### E. State Management (LocalStorage)
* **AI Contribution:** Guided implementation of persistent user preferences.
* **Stored Data:**
  - Theme (dark/light mode)
  - Filter selection
  - Search input
  - Sorting option
* **Outcome:** Improved user experience by maintaining state across page reloads.

---

### F. Innovation: Skills Orbit Visualization
* **The Goal:** Add a unique and visually engaging feature to represent technical skills.
* **AI Contribution:** Assisted in structuring a CSS-based orbit animation.
* **My Adaptation:**
  - Designed a **space-themed orbit system** where skills rotate around a central node
  - Added **individual color tinting** for each skill to enhance visual distinction
  - Ensured smooth animation and responsiveness across devices
* **Outcome:** Created a unique, design-focused feature that visually represents the relationship between technologies.

---

# 2. Evidence of Understanding & Learning

I ensured full understanding of all AI-assisted solutions:

1. **CSS Effects:** Learned how `backdrop-filter` and transparency create glassmorphism
2. **Responsive Design:** Understood layout control using `border-box` and flexible sizing
3. **Asynchronous JavaScript:** Gained experience using `fetch`, `async/await`, and error handling
4. **API Integration:** Learned how to work with external APIs and handle limitations
5. **State Management:** Understood how `localStorage` preserves user interaction
6. **Animation & UI Design:** Learned how CSS transforms and keyframes can create dynamic visual effects

---

# 3. Benefits & Challenges

### Benefits
AI acted as a development assistant by:
- simplifying complex problems
- accelerating debugging
- suggesting structured solutions
- improving code organization

### Challenges
- Some AI suggestions required modification to fit design goals
- Styling required manual refinement for consistency
- API limitations required additional debugging and understanding

---

# 4. Learning Outcomes

Through this assignment, I developed:

- strong understanding of API integration and asynchronous programming  
- ability to implement complex interactive logic  
- experience with state persistence using localStorage  
- improved UI/UX design skills  
- ability to adapt and refine AI-generated solutions  

---

# 5. Responsible Use and Reflection

AI was used as a support tool, not a direct solution provider.

I ensured responsible use by:
- reviewing and understanding all generated code  
- modifying solutions to fit my design and requirements  
- testing all features independently  
- using AI primarily for guidance and debugging  

The final implementation reflects my own understanding, with AI serving as a tool for learning and enhancement.