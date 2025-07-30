console.log("Custom JS loaded");

document.addEventListener("DOMContentLoaded", function () {
  // --- SECTION NAVIGATION ---
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  function showSectionById(id) {
    sections.forEach(section => section.classList.remove("active-section"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active-section");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSectionById(targetId);

      const navbar = document.querySelector(".custom-collapse");
      if (navbar && navbar.classList.contains("show")) {
        document.querySelector(".navbar-toggler").click();
      }
    });
  });

  const contactBtn = document.querySelector('a[href="#contact"]');
  if (contactBtn) {
    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showSectionById("contact");
    });
  }

  const switchButtons = document.querySelectorAll(".switch-section");
  switchButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      if (targetId) showSectionById(targetId);
    });
  });

    // --- LIGHTBOX FUNCTIONALITY ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-lightbox");

  // Click on any sample image to open lightbox
  const sampleImages = document.querySelectorAll("#samples .card img");
  sampleImages.forEach(img => {
    img.addEventListener("click", function (e) {
      e.preventDefault();
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
    });
  });

  // Close lightbox when clicking the close button
  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  // Optional: Close lightbox on outside click
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
  
  
});