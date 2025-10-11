function startClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const tick = () => {
    const now = new Date();
    el.textContent = now.toLocaleString(undefined, {
      dateStyle: "long",
      timeStyle: "medium",
    });
  };
  tick();
  setInterval(tick, 1000);
}

(function setupColorChanger() {
  const btn = document.getElementById("changeBgBtn");
  if (!btn) return;
  const colors = ["#0b0e16", "#1b2430", "#222", "#2c1a1a", "#16302b", "#3b1a40"];
  btn.addEventListener("click", () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
  });
})();

(function setupPopup() {
  const open = document.getElementById("openPopup");
  const overlay = document.getElementById("popupOverlay");
  const close = document.getElementById("closePopup");
  if (!open || !overlay || !close) return;

  open.addEventListener("click", () => overlay.classList.add("show"));
  close.addEventListener("click", () => overlay.classList.remove("show"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("show");
  });
})();

(function setupAccordion() {
  const acc = document.querySelectorAll(".accordion-item .accordion-header");
  if (!acc.length) return;
  acc.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".accordion-item");
      item.classList.toggle("open");
      const panel = item.querySelector(".accordion-panel");
      if (item.classList.contains("open")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    });
  });
})();

(function setupContactFormValidation() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameEl = form.querySelector("#name");
  const emailEl = form.querySelector("#email");
  const msgEl = form.querySelector("#msg");

  const setError = (input, message) => {
    const wrap = input.closest(".field");
    const hint = wrap.querySelector(".error-hint");
    wrap.classList.add("has-error");
    if (hint) hint.textContent = message;
  };

  const clearError = (input) => {
    const wrap = input.closest(".field");
    const hint = wrap.querySelector(".error-hint");
    wrap.classList.remove("has-error");
    if (hint) hint.textContent = "";
  };

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    clearError(nameEl);
    if (!nameEl.value.trim()) {
      setError(nameEl, "Please enter your name");
      ok = false;
    }

    clearError(emailEl);
    if (!emailEl.value.trim()) {
      setError(emailEl, "Please enter your email");
      ok = false;
    } else if (!isEmail(emailEl.value.trim())) {
      setError(emailEl, "Invalid email format");
      ok = false;
    }

    clearError(msgEl);
    if (!msgEl.value.trim() || msgEl.value.trim().length < 10) {
      setError(msgEl, "Message must be at least 10 characters");
      ok = false;
    }

    if (ok) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  startClock(); 
});

