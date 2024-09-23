// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href') === "#" ? 'header' : e.currentTarget.getAttribute('href');
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: 'smooth'
  });
}

// Highlight Active Menu Item on Scroll
window.addEventListener('scroll', () => {
  let currentSection = '';
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.pageYOffset + 200;

  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.parentElement.classList.add('active');
    }
  });
});
