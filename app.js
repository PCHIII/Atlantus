document.addEventListener("DOMContentLoaded", function () {
  // Activate the navigation links based on scroll position
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

// email hide

document.addEventListener("DOMContentLoaded", function () {
  const user = "thelmer";
  const domain = "atlantuspartners.com";
  const email = `${user}@${domain}`;

  const emailButton = document.getElementById("email-button");
  if (emailButton) {
    emailButton.href = `mailto:${email}`;
  }
});