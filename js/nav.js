// Mobile nav toggle + dropdown (works when opened directly from the filesystem)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

  // Resources dropdown: hover handles desktop; click handles touch / mobile.
  document.querySelectorAll(".nav-dd-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      btn.closest(".nav-dd").classList.toggle("open");
    });
  });

  // Close the mobile menu after following an in-page or page link.
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  });
});
