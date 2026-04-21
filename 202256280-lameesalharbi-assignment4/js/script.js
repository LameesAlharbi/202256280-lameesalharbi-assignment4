"use strict";
/* ============================================================
   CONSTANTS
   ============================================================ */
const THEME_KEY = "lamees-portfolio-theme";
const FILTER_KEY = "lamees-project-filter";
const SEARCH_KEY = "lamees-project-search";
const SORT_KEY = "lamees-project-sort";

const projects = [
  {
    title: "QS Ranking Program",
    category: "python",
    image: "assets/images/Python-image-with-logo-940x530-1.webp",
    desc: "Python-based data processing for university rankings using structured data handling."
  },
  {
    title: "Mobile Behavior Classification",
    category: "data",
    image: "assets/images/smartphone-usage-statistics.jpg",
    desc: "A machine learning model analyzing screen time and battery usage patterns."
  }
];
/* ============================================================
   Draws floating dots on a <canvas> and connects nearby ones
   with lines. Particles are gently attracted to the mouse.
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height, particles;
  const PARTICLE_COUNT = 80;
  const MAX_DIST       = 140;  //max px distance to draw a line
  const mouse          = { x: null, y: null };
  // Resize canvas to fill the viewport
  function resize() {
    width  = canvas.width  = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  // Build the particle array
  function buildParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:  Math.random() * width,
      y:  Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.8 + 0.8 //radius
    }));
  }
  // Resolve the accent color 
  function getAccentColor() {
    return getComputedStyle(document.documentElement)
      .getPropertyValue("--accent").trim() || "#7c6cf0";
  }
  // Main animation loop
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const accent = getAccentColor();
    particles.forEach(p => {
      // Gentle mouse attraction
      if (mouse.x !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 200) {
          p.vx += dx * 0.00012;
          p.vy += dy * 0.00012;
        }
      }
      // Move & bounce off edges
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width)  p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      // Speed cap so particles don't fly away
      const speed = Math.hypot(p.vx, p.vy);
      if (speed > 1.2) { p.vx *= 0.98; p.vy *= 0.98; }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.7;
      ctx.fill();
    });
    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);

          ctx.globalAlpha = (1 - dist / MAX_DIST) * 0.25;
          ctx.strokeStyle = accent;
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  // Track mouse
  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });
  window.addEventListener("resize", () => { resize(); buildParticles(); });
  resize();
  buildParticles();
  draw();
}
/* ============================================================
   Any element with [data-scramble] decodes from random chars
   into its real text when it enters the viewport.
   ============================================================ */
function initScramble() {
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
  const targets = document.querySelectorAll("[data-scramble]");
  if (!targets.length) return;
  function scrambleElement(el) {
    const original = el.textContent;
    const len      = original.length;
    let   frame    = 0;

    const totalFrames = len * 1.5;
    el.style.opacity = "1";
    const interval = setInterval(() => {
      el.textContent = original
        .split("")
        .map((char, i) => {

          if (char === " ") return " ";
          if (i < frame / 1.5) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      frame++;
      if (frame > totalFrames) {
        el.textContent = original;  // lock in the real text
        el.classList.add("scramble-done");
        clearInterval(interval);
      }
    }, 40);
  }
  // Use IntersectionObserver so it fires when element scrolls 
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scrambleElement(entry.target);
          observer.unobserve(entry.target);  //animate once
        }
      });
    },
    { threshold: 0.3 }
  );
  targets.forEach(el => observer.observe(el));
}
/* ============================================================
   Project cards tilt in 3D toward the cursor and show a
   glossy light reflection that tracks the mouse position.
   ============================================================ */
function initTiltCards() {
  // Called after cards are rendered into the DOM
  function attachTilt() {
    document.querySelectorAll(".project-card").forEach(card => {

      if (!card.querySelector(".card-shine")) {
        const shine = document.createElement("div");
        shine.className = "card-shine";
        card.appendChild(shine);
      }
      card.addEventListener("mousemove", (e) => {
        const rect   = card.getBoundingClientRect();
        const cx     = rect.left + rect.width  / 2;
        const cy     = rect.top  + rect.height / 2;
        const dx     = e.clientX - cx;
        const dy     = e.clientY - cy;
        // Max tilt ±15 degrees
        const rotateX = -(dy / (rect.height / 2)) * 15;
        const rotateY =  (dx / (rect.width  / 2)) * 15;
        card.style.transform =
          `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        // Move shine to cursor position 
        const shineX = ((e.clientX - rect.left) / rect.width)  * 100;
        const shineY = ((e.clientY - rect.top)  / rect.height) * 100;
        card.style.setProperty("--shine-x", `${shineX}%`);
        card.style.setProperty("--shine-y", `${shineY}%`);
      });
      card.addEventListener("mouseleave", () => {
        // Smoothly reset tilt on mouse leave
        card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });
  }

  window.addEventListener("cards-rendered", attachTilt);

  attachTilt();
}
/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
function initCursor() {
  // Only run this if the device has a "fine" pointer (a mouse)
  // This automatically disables it for iPads and iPhones!
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cursor = document.getElementById("custom-cursor");
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });
}

/* ============================================================
   TYPING EFFECT
   ============================================================ */
function initTyping() {
  const tagline = document.querySelector(".tagline");
  const text = "Software Engineering Student  •  Problem Solver  •  Creative Developer";
  if (!tagline) return;
  let i = 0;
  tagline.textContent = "";
  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 55);
    }
  }
  type();
}
/* ============================================================
   GREETING BY TIME OF DAY
   ============================================================ */
function setGreeting() {
  const el = document.getElementById("greeting");
  if (!el) return;
  const hour = new Date().getHours();
  const msg =
    hour < 12 ? "Good morning ☀️" :
    hour < 17 ? "Good afternoon 🌤️" :
                "Good evening 🌙";
  el.textContent = `Hi there! ${msg}`;
}
/* ============================================================
   THEME TOGGLE
   ============================================================ */
function initTheme() {
  const btn   = document.getElementById("themeToggle");
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  function apply(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light", isLight);
    if (btn) {
      btn.textContent = isLight ? "Dark Mode" : "Light Mode";
      btn.setAttribute("aria-pressed", String(isLight));
    }
  }
  apply(saved);
  if (btn) {
    btn.addEventListener("click", () => {
      const next = document.body.classList.contains("light") ? "dark" : "light";
      apply(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
}
/* ============================================================
   CURRENT YEAR
   ============================================================ */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}
/* ============================================================
   PROJECT RENDERING
   ============================================================ */
function renderProjects(filter = "all", query = "", sort = "default") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.style.opacity = "0";
  setTimeout(() => {
    grid.innerHTML = "";
    const term = query.toLowerCase().trim();
    let filtered = projects.filter(p => {
  const matchCategory = filter === "all" || p.category === filter;
  const matchSearch   = !term || p.title.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term);
  return matchCategory && matchSearch;
  });

  if (sort === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "za") {
  filtered.sort((a, b) => b.title.localeCompare(a.title));
  }
    if (filtered.length === 0) {
      grid.innerHTML = `<p class="empty-state">No projects found. Try a different filter or search term.</p>`;
    } else {
      filtered.forEach(proj => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
          <div class="project-content">
            <h3>${proj.title}</h3>
            <p>${proj.desc}</p>
            <span class="tag">${proj.category}</span>
          </div>
        `;
        grid.appendChild(card);
      });
    }
    grid.style.opacity = "1";

    window.dispatchEvent(new Event("cards-rendered"));
  }, 280);
}
/* ============================================================
   PROJECT FILTER + LIVE SEARCH
   ============================================================ */
function initProjectFilter() {
  const buttons     = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("projectSearch");
  const sortSelect  = document.getElementById("projectSort");

  if (!buttons.length) return;

  let activeFilter = localStorage.getItem(FILTER_KEY) || "all";
  let searchQuery  = localStorage.getItem(SEARCH_KEY) || "";
  let sortValue    = localStorage.getItem(SORT_KEY) || "default";

  buttons.forEach(btn => {
    const isActive = btn.dataset.filter === activeFilter;
    btn.classList.toggle("active", isActive);

    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;

      localStorage.setItem(FILTER_KEY, activeFilter);
      renderProjects(activeFilter, searchQuery, sortValue);
    });
  });

  if (searchInput) {
    searchInput.value = searchQuery;

    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value;
      localStorage.setItem(SEARCH_KEY, searchQuery);
      renderProjects(activeFilter, searchQuery, sortValue);
    });
  }

  if (sortSelect) {
    sortSelect.value = sortValue;

    sortSelect.addEventListener("change", () => {
      sortValue = sortSelect.value;
      localStorage.setItem(SORT_KEY, sortValue);
      renderProjects(activeFilter, searchQuery, sortValue);
    });
  }

  renderProjects(activeFilter, searchQuery, sortValue);
}
/* ============================================================
   QUOTE API
   ============================================================ */
async function fetchQuote() {
  const quoteEl = document.getElementById("api-quote");
  if (!quoteEl) return;
  quoteEl.innerHTML = `<span class="loading">Fetching inspiration...</span>`;
  try {
    const res = await fetch('https://dummyjson.com/quotes/random');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    quoteEl.innerHTML = `
      <blockquote class="glass-quote">
        "${data.quote}"
        <cite>— ${data.author}</cite>
      </blockquote>
    `;
  } catch {
    quoteEl.innerHTML = `<p class="error-msg"> Couldn't load a quote right now. Check your connection and try again.</p>`;
  }
}

/* ============================================================
   GITHUB API
   ============================================================ */
async function fetchGitHubRepos() {
  const reposEl = document.getElementById("githubRepos");
  if (!reposEl) return;

  reposEl.innerHTML = `<p class="loading">Loading GitHub repositories...</p>`;

  try {
    const url = "https://api.github.com/users/LameesAlharbi/repos?sort=updated&per_page=6";


    const res = await fetch(url, {
  headers: {
    Accept: "application/vnd.github+json",
  }
});

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    }

    const repos = await res.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      reposEl.innerHTML = `<p class="empty-state">No repositories found.</p>`;
      return;
    }

    reposEl.innerHTML = "";

    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <div class="project-content">
          <h3>${repo.name}</h3>
          <p>${repo.description ? repo.description : "No description available."}</p>
          <span class="tag">${repo.language ? repo.language : "Code"}</span>
          <p class="repo-meta">
            ⭐ ${repo.stargazers_count} | 
            <a href="${repo.html_url}" target="_blank" rel="noopener">View Repository</a>
          </p>
        </div>
      `;

      reposEl.appendChild(card);
    });

    window.dispatchEvent(new Event("cards-rendered"));
  } catch (error) {
    reposEl.innerHTML = `<p class="error-msg">Could not load GitHub repositories right now. Please try again later.</p>`;
  }
}
/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form     = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  if (!form || !statusEl) return;
  function setFieldError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }
  function clearErrors() {
    ["nameError", "emailError", "messageError"].forEach(id => setFieldError(id, ""));
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    statusEl.textContent = "";
    statusEl.className   = "form-status";
    const name    = document.getElementById("nameInput").value.trim();
    const email   = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    let valid = true;
    if (!name) {
      setFieldError("nameError", "Please enter your name.");
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setFieldError("emailError", "Please enter your email address.");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setFieldError("emailError", "Please enter a valid email (e.g. you@example.com).");
      valid = false;
    }
    if (!message) {
      setFieldError("messageError", "Please enter a message.");
      valid = false;
    } else if (message.length < 10) {
      setFieldError("messageError", "Message must be at least 10 characters.");
      valid = false;
    }
    if (!valid) {
      statusEl.textContent = "Please fix the errors above.";
      statusEl.className   = "form-status error";
      return;
    }
    statusEl.textContent = "Message sent! I'll get back to you soon.";
    statusEl.className   = "form-status success";
    form.reset();
    clearErrors();
  });
}
/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initParticles();   // constellation background
  initScramble();    // decode headings on scroll
  initTiltCards();   // 3D hover cards
  initCursor();
  initTheme();
  setYear();
  setGreeting();
  initTyping();
  initProjectFilter();
  fetchQuote();
  fetchGitHubRepos();
  initContactForm();
  const refreshBtn = document.getElementById("refreshQuote");
  if (refreshBtn) refreshBtn.addEventListener("click", fetchQuote);
});