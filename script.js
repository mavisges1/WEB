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

const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.classList.add('theme-toggle');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});


const greeting = document.createElement('div');
greeting.className = 'greeting';
document.body.prepend(greeting);

const nameInput = document.createElement('input');
nameInput.placeholder = 'Enter your name';
document.body.prepend(nameInput);

nameInput.addEventListener('input', () => {
  greeting.textContent = `Hello, ${nameInput.value || 'Guest'}!`;
});


const timeBtn = document.createElement('button');
timeBtn.textContent = 'Show Current Time';
document.body.appendChild(timeBtn);

const timeDisplay = document.createElement('p');
document.body.appendChild(timeDisplay);

timeBtn.addEventListener('click', () => {
  timeDisplay.textContent = new Date().toLocaleTimeString();
});


const nav = document.querySelector('nav ul');
if (nav) {
  const items = nav.querySelectorAll('li a');
  let index = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      index = (index + 1) % items.length;
      items[index].focus();
    } else if (e.key === 'ArrowLeft') {
      index = (index - 1 + items.length) % items.length;
      items[index].focus();
    }
  });
}


const siteInfo = {
  title: document.title,
  author: 'Team WEB5',
  showInfo() {
    console.log(`Website: ${this.title}, Author: ${this.author}`);
  }
};
siteInfo.showInfo();


const pages = Array.from(document.querySelectorAll('a')).map(link => link.textContent);
console.log('Site Links:', pages.filter(name => name.length > 0));


const soundBtn = document.createElement('button');
soundBtn.textContent = 'Play Sound';
document.body.appendChild(soundBtn);

const audio = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');
soundBtn.addEventListener('click', () => audio.play());


const animBox = document.createElement('div');
animBox.className = 'anim-box';
animBox.textContent = 'Hover Me!';
document.body.appendChild(animBox);

animBox.addEventListener('mouseenter', () => {
  animBox.style.transform = 'scale(1.2)';
  animBox.style.transition = 'transform 0.3s ease';
});
animBox.addEventListener('mouseleave', () => {
  animBox.style.transform = 'scale(1)';
});

