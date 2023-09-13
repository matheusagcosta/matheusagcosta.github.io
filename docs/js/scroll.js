// scroll into work view
document.querySelector('.js-scroll-to-work').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.work').scrollIntoView({ behavior: 'smooth' });
});

// scroll into work view 2
document.querySelector('.js-scroll-to-work-alt').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.work').scrollIntoView({ behavior: 'smooth' });
});

// scroll into about view
document.querySelector('.js-scroll-to-about').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
});

// scroll into talks view
document.querySelector('.js-scroll-to-talks').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.talks').scrollIntoView({ behavior: 'smooth' });
});
