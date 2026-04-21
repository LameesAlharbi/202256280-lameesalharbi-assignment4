# AI Usage Report — Assignment 3

**Student:** Lamees Alharbi  
**Tools:** Gemini 3, ChatGPT  
**Date:** April 2026  

---

# 1. Detailed AI Assistance & Problem Solving

### A. UI/UX: Glassmorphism Implementation
* **Prompting Strategy:** I requested a "frosted glass" CSS architecture that would remain legible over a high-contrast background.
* **AI Contribution:** Provided the foundational `backdrop-filter: blur()` and `rgba` background logic.
* **Refinement & Adaptation:** I found the initial AI suggestion (10px blur) was too "see-through" on iPad displays. I manually increased the blur to **20px** and added `saturate(150%)` and `contrast(100%)` to ensure the "Daily Inspiration" text met accessibility standards.

---

### B. Responsive Debugging (iPad & iPhone)
* **The Problem:** During testing on an **iPhone 16 Pro (402x874px)**, the "About Me" and "Skills" sections were shifting 20px to the left, creating an unprofessional horizontal overflow.
* **AI Troubleshooting:** I shared my CSS structure with AI to identify layout conflicts. The AI detected that fixed widths were clashing with internal padding.
* **The Solution:** Following AI guidance, I implemented `box-sizing: border-box` and transitioned from fixed pixel widths to **viewport-relative widths (92%)**, ensuring consistent layout across devices.

---

### C. Asynchronous Data Handling (API)
* **AI Contribution:** Provided the initial structure for the `fetch()` logic using the **DummyJSON Quotes API**.
* **Modification:** I enhanced the implementation by adding a `try/catch` block for error handling and included a **loading state** in the DOM to provide immediate user feedback during API requests.
* **Outcome:** The "Daily Inspiration" section dynamically fetches and displays quotes with graceful failure handling.

---

### D. Hardware-Specific Optimization
* **The Bug:** A custom cursor effect caused visual artifacts ("stains") on touch-screen devices.
* **AI Solution:** Suggested using `matchMedia("(pointer: fine)")` to detect pointer type.
* **Result:** The cursor effect is now enabled only for mouse devices, improving cross-device usability.

---

# 2. Assignment 3 Enhancements with AI Support

### A. GitHub API Integration
* **The Goal:** Extend the portfolio by adding a second API that displays live project data.
* **AI Contribution:** Assisted in implementing the GitHub API using `fetch()` to dynamically retrieve repositories.
* **Challenges & Fixes:** I encountered API rate-limiting issues (`403 error`). With AI guidance, I diagnosed the issue and tested solutions such as authentication headers and request adjustments. I also ensured proper error handling was in place.
* **Outcome:** Successfully integrated a live GitHub section displaying repository names, descriptions, languages, and links.

---

### B. Advanced Project Logic (Filtering, Searching, Sorting)
* **The Goal:** Enhance application logic beyond simple interactions.
* **AI Contribution:** Helped structure a system combining:
  - category filtering
  - live search functionality
  - alphabetical sorting (A–Z and Z–A)
* **Learning:** I learned how to apply multiple conditions sequentially and manipulate datasets dynamically using JavaScript.
* **Outcome:** The project gallery now behaves as a fully interactive system rather than a static display.

---

### C. State Management with localStorage
* **The Goal:** Persist user preferences across sessions.
* **AI Contribution:** Guided the implementation of `localStorage` to store:
  - theme preference
  - selected project filter
  - search input
  - sorting option
* **Learning:** I understood how to store and retrieve browser data to maintain application state.
* **Outcome:** The website now remembers user interactions even after page reloads.

---

### D. Debugging and Code Refinement
* **AI Contribution:** Assisted in identifying JavaScript syntax errors and structural issues.
* **Example:** Fixed a critical error where a function was incorrectly nested inside another function, preventing execution.
* **Outcome:** Improved code stability and reinforced understanding of proper function structure and debugging techniques.

---

# 3. Evidence of Understanding & Learning

I ensured full comprehension of all AI-assisted solutions:

1. **Vendor Prefixes:** Learned that `-webkit-backdrop-filter` is required for Safari compatibility.
2. **CSS Box Model:** Understood how `border-box` controls layout sizing.
3. **Media Queries:** Learned to detect input types (touch vs. mouse).
4. **API Handling:** Gained experience in asynchronous data fetching and error handling.
5. **State Management:** Learned how `localStorage` preserves user preferences.
6. **JavaScript Logic:** Understood how filtering, searching, and sorting interact within the same dataset.

---

# 4. Benefits & Challenges

### Benefits
AI acted as a "senior developer assistant," helping:
- break down complex problems into manageable steps
- debug issues efficiently
- suggest structured solutions for advanced features
- improve overall code organization and logic

### Challenges
- Some AI suggestions required adaptation to fit my project structure
- Initial styling suggestions did not match my design vision and required manual refinement
- API rate-limiting required additional troubleshooting and understanding of external service limitations

---

# 5. Learning Outcomes

Through this assignment, I developed:

- strong understanding of API integration (Quotes API and GitHub API)
- ability to implement advanced logic combining multiple conditions
- practical experience with state management using localStorage
- improved debugging and problem-solving skills
- ability to refine and adapt AI-generated solutions into a functional system

---

# 6. Responsible Use and Reflection

AI was used as a support tool rather than a direct solution provider.

I ensured responsible use by:
- reviewing and understanding all AI-generated code
- modifying suggestions to fit my project design and requirements
- testing all features independently
- debugging issues with AI guidance rather than copying solutions

The final implementation reflects my own understanding, with AI serving as a tool for guidance, optimization, and learning.