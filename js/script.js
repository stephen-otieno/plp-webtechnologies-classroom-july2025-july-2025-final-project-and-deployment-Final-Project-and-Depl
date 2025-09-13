// ===== ACTIVE LINK TOGGLE =====
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active")); // remove old active
    link.classList.add("active"); // set new active
  });
});

// ===== MOBILE MENU TOGGLE (optional if you add hamburger later) =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

// ===== SMALL HOVER EFFECT ON BUTTONS =====
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "transform 0.2s ease";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});



// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    input.classList.add("invalid");
  }

  function clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = "";
    input.classList.remove("invalid");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ✅ Always prevent form from reloading/submitting

    let valid = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Full name is required.");
      valid = false;
    } else {
      clearError(nameInput);
    }

    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required.");
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Enter a valid email address.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (subjectInput.value.trim() === "") {
      showError(subjectInput, "Subject is required.");
      valid = false;
    } else {
      clearError(subjectInput);
    }

    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message cannot be empty.");
      valid = false;
    } else {
      clearError(messageInput);
    }

    if (valid) {
      alert("Message sent successfully ✅ (Form submission prevented for now)");
      // Later: replace this with backend integration (PHP/Django/API call)
    }
  });
});
