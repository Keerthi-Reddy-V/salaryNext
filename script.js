
      AOS.init({
        duration: 1000,
        once: true,
      });

      function toggleMenu() {
        document.getElementById("mobileMenu").classList.toggle("show-menu");
      }

      const accordionItems = document.querySelectorAll(".accordion-item");

      accordionItems.forEach((item) => {
        item.addEventListener("click", () => {
          item.classList.toggle("accordion-active");
        });
      });