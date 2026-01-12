/* ================= MAIN INIT ================= */

export function initNewHome() {
  /* ---------- CURSOR ---------- */
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  let mx = 0, my = 0, cx = 0, cy = 0, fx = 0, fy = 0;

  window.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function loop() {
    cx += (mx - cx) * 0.3;
    cy += (my - cy) * 0.3;
    fx += (mx - fx) * 0.1;
    fy += (my - fy) * 0.1;

    if (cursor && follower) {
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      follower.style.transform = `translate(${fx}px,${fy}px) translate(-50%,-50%)`;
    }

    requestAnimationFrame(loop);
  })();

  /* ---------- CURSOR INTENT ---------- */
  document.querySelectorAll(".project-card").forEach(el => {
    el.addEventListener("mouseenter", () => cursor?.classList.add("view"));
    el.addEventListener("mouseleave", () => cursor?.classList.remove("view"));
  });

  /* ---------- SCROLL REVEAL ---------- */
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("active");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* ---------- PARALLAX DEPTH ---------- */
  const depthEls = document.querySelectorAll("[data-speed]");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    depthEls.forEach(el => {
      el.style.transform = `translateY(${y * el.dataset.speed}px)`;
    });
  });

  /* ---------- CARD GLOW ---------- */
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", ((e.clientX - r.left) / r.width) * 100 + "%");
      card.style.setProperty("--y", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  });

  /* ---------- TYPING EFFECT ---------- */
  initTypingEffect();
}

/* ================= TYPING EFFECT ================= */

function initTypingEffect() {
  const elements = document.querySelectorAll(".typing[data-text]");

  elements.forEach((el, index) => {
    const text = el.dataset.text;
    el.textContent = ""; // reset safe
    let i = 0;

    setTimeout(() => {
      function type() {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
          setTimeout(type, 140);
        }
      }
      type();
    }, index * 900); // line-by-line delay
  });
}


