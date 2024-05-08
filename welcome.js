document.addEventListener("DOMContentLoaded", function () {

    // fade in animation code
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.fade-hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // contact card animation code
    const multiple = 10;
    const mouseOverContainer = document.querySelector(".contact-card-outer");
    const element = document.getElementById("contact-card-element");

    function transformElement(x,y) {
        let box = element.getBoundingClientRect();
        const calcX = -(y - box.y - box.height / 2) / multiple;
        const calcY = (x - box.x - box.width / 2) / multiple;
        const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
        element.style.transform = "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
    }

    mouseOverContainer.addEventListener("mousemove", (e) => {
        window.requestAnimationFrame(function () {
            transformElement(e.clientX, e.clientY);
        });
    });

    mouseOverContainer.addEventListener("mouseleave", (e) => {
        window.requestAnimationFrame(function () {
            element.style.transform = "rotateX(0) rotateY(0)";
        });
    });

    // mobile menu code
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu-toggle').classList.toggle('open');
        document.querySelector('.header-nav').classList.toggle('open');
        document.querySelector('.welcome-search-input').classList.toggle('open');
    });
    
  const button1 = document.getElementById("staging-btn");
  const button2 = document.getElementById("production-btn");
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");

  // Function to toggle sections based on clicked button
  function toggleSections(clickedButton) {
    if (clickedButton === button1) {
      section1.classList.remove("section-hidden");
      section2.classList.add("section-hidden");
      button1.classList.add('active-btn');
      button2.classList.remove('active-btn');
    } else {
      section1.classList.add("section-hidden");
      section2.classList.remove("section-hidden");
      button1.classList.remove('active-btn');
      button2.classList.add('active-btn');
    }
  }
  button1.classList.add('active-btn');
  button1.addEventListener("click", () => toggleSections(button1));
  button2.addEventListener("click", () => toggleSections(button2));

  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Close all accordion items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle the active class for the clicked item
      this.classList.toggle("active");
    });
  });
});
