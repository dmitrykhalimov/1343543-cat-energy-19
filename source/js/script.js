var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle-menu');

var openedClass = 'main-nav--opened';
var closedClass = 'main-nav--closed';

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains(openedClass)) {
    navMain.classList.remove(openedClass);
    navMain.classList.add(closedClass); }
  else {
    navMain.classList.remove(closedClass);
    navMain.classList.add(openedClass);
  }
});
