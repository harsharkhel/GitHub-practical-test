// 1. Mobile menu: open and close
var menuBtn = document.getElementById("menu-btn");
var nav = document.getElementById("nav");

menuBtn.onclick = function () {
  nav.classList.toggle("open");
};
nav.onclick = function () {
  nav.classList.remove("open");
};

// 2. Project filter buttons
var filters = document.querySelectorAll(".filter");
var projects = document.querySelectorAll(".project");

filters.forEach(function (button) {
  button.onclick = function () {
    filters.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    projects.forEach(function (card) {
      var show = button.dataset.type === "all" || card.dataset.type === button.dataset.type;
      card.style.display = show ? "block" : "none";
    });
  };
});

// 3. Contact form: check the fields, then open the email app
document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var status = document.getElementById("status");

  if (name === "" || !email.includes("@") || message === "") {
    status.textContent = "Please fill in your name, a valid email and a message.";
    return;
  }

  window.location.href = "mailto:harsharkhel123@gmail.com?subject=" +
    encodeURIComponent("Portfolio message from " + name) +
    "&body=" + encodeURIComponent(message + "\n\n" + name + " (" + email + ")");
  status.textContent = "Opening your email app...";
};

// 4. Footer year
document.getElementById("year").textContent = new Date().getFullYear();
