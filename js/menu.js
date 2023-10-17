const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav__link");

function openMenu() {
  nav.classList.toggle("nav__open");
}

menuBtn.addEventListener("click", () => openMenu());

// header and footer template
document.addEventListener("DOMContentLoaded", function () {
  // Function to load and insert HTML content into a placeholder
  function loadHTML(url, placeholderId) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
          placeholder.innerHTML = html;
        }
      })
      .catch((error) => {
        console.error("Error loading HTML:", error);
      });
  }

  // Load header.html and insert it into the #header__placeholder
  loadHTML("header.html", "header__section");

  // Load footer.html and insert it into the #footer__placeholder
  // loadHTML('footer.html', 'footer__section')
});

// Jquery Start
$(document).ready(function () {
  $("input").airChars({
    // options
  });
});

$(document).ready(function () {
  $("input").airChars({
    duration: 1,
    upperLimit: 150,
    sizeInterval: [15, 80],
  });
});
