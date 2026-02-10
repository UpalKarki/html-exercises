// Add to cart message
document.getElementById("cartBtn").addEventListener("click", function () {
  document.getElementById("cartMsg").innerText = "Product added to cart successfully!";
});

// Toggle password show/hide
function togglePassword(id) {
  let field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

// Form validation
const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirmPassword");

  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "nameError", "Name is required");
    valid = false;
  }

  if (!email.value.includes("@")) {
    showError(email, "emailError", "Enter a valid email");
    valid = false;
  }

  if (password.value.length < 8) {
    showError(password, "passwordError", "Password must be at least 8 characters");
    valid = false;
  }

  if (password.value !== confirm.value) {
    showError(confirm, "confirmError", "Passwords do not match");
    valid = false;
  }

  if (valid) {
    form.reset();
    document.getElementById("successMsg").innerText = "Registration successful!";
  }
});

// Show error
function showError(input, errorId, message) {
  input.classList.add("invalid");
  document.getElementById(errorId).innerText = message;
}

// Clear errors
function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.innerText = "");
  document.querySelectorAll("input").forEach(i => i.classList.remove("invalid"));
}

// Dark / Light mode
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
