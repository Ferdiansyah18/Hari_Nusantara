function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  document.body.classList.toggle('menu-open');
}

document.addEventListener('click', function(event) {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  
  if (!navLinks.contains(event.target) && 
      !hamburger.contains(event.target) && 
      navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

const text = "Nusantara";
let index = 0;

function typeEffect(element) {
  element.textContent = text.substring(0, index);
  if (index < text.length) {
    index++;
    setTimeout(() => typeEffect(element), 150); 
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;

      if (entry.isIntersecting) {
        if (target.id === "animatedText") {
          typeEffect(target); 
        }
        if (target.id === "animatedParagraph" || target.id === "animatedLink") {
          target.classList.add("showText");
        }
        if (target.classList.contains("card-information")) {
          target.classList.add("show");
        }
      }
    });
  },
  { threshold: 1.0 } 
);

const animatedParagraph = document.getElementById("animatedParagraph");
const animatedLink = document.getElementById("animatedLink");
const animatedText = document.getElementById("animatedText");
const cards = document.querySelectorAll('.card-information');

if (animatedParagraph) observer.observe(animatedParagraph);
if (animatedLink) observer.observe(animatedLink);
if (animatedText) observer.observe(animatedText);
cards.forEach((card) => observer.observe(card));
