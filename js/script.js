document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const navLinks = document.querySelectorAll('.nav-menu a');

   // Toggle sidebar on menu button click
   menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Close sidebar on clicking a menu link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });
});

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

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
