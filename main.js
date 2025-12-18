
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});


const navLinks = document.querySelectorAll('.nav ul li a');
const sections = document.querySelectorAll('#home, #about, #portfolio, #contact');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav ul li a[href$="${id}"]`);
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
