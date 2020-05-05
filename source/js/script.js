var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle-menu');
var pageMap = document.querySelector('.page-footer__map');

var openedClass = 'main-nav--opened';
var closedClass = 'main-nav--closed';

navMain.classList.remove('main-nav--nojs');
pageMap.classList.remove('page-footer__map--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains(closedClass)) {
    navMain.classList.remove(closedClass);
    navMain.classList.add(openedClass); }
  else {
    navMain.classList.add(closedClass);
    navMain.classList.remove(openedClass);
  }
});
