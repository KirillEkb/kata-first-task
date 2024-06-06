export const burger = document.querySelector('.burger');
export const side = document.querySelector('.side__container');
export const header = document.querySelector('.header');
export const closeSide = side.querySelector('.side-header__close');
export const main = document.querySelector('.main');

burger.addEventListener('click', function() {
  side.classList.add('side__container--move');
  main.style.filter = 'blur(5px)';
  header.style.filter = 'blur(5px)';
  side.style.zIndex = '10';
  closeSide.focus();
});

document.addEventListener('click', function(evt) {
  if((! (side === evt.target)) && (! side.contains(evt.target)) && (! (burger === evt.target))){
    side.classList.remove('side__container--move');
    main.style.filter = 'none';
    header.style.filter = 'none';
    burger.focus();
  }
});

closeSide.addEventListener('click', function(){
  side.classList.remove('side__container--move');
  main.style.filter = 'none';
  header.style.filter = 'none';
  burger.focus();
});