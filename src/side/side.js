export const burger = document.querySelector('.burger');
export const side = document.querySelector('.side__container');
export const closeSide = side.querySelector('.side-header__close');
export const sideBlur = document.querySelector('.flex-for-side');


burger.addEventListener('click', function() {
  side.classList.add('side__container--move');
  sideBlur.classList.add('side-blur');
  closeSide.focus();
});

sideBlur.addEventListener('click', function(evt) {
  if((! (side === evt.target)) && (! side.contains(evt.target)) && (! (burger === evt.target))){
    side.classList.remove('side__container--move');
    sideBlur.classList.remove('side-blur');
    burger.focus();
  }
});

closeSide.addEventListener('click', function(){
  side.classList.remove('side__container--move');
  sideBlur.classList.remove('side-blur');
  burger.focus();
});