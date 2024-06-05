import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
export const service = document.querySelector('.service');
export const buttonOpen = service.querySelector('.service__button');
export const mdHiddenList = service.querySelectorAll('.md-hidden');
export const lgHiddenList = service.querySelectorAll('.lg-hidden');
export let swiper;

if (window.matchMedia("(max-width: 767px)").matches) {
  swiper = new Swiper('.swiper', {
    modules: [ Navigation, Pagination ],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.3125,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
  }
  });
} else if (window.matchMedia(" (max-width: 1335px) ").matches){
  if (swiper !== undefined) {
    swiper.destroy(true,true);
    swiper = undefined;
  }
  buttonOpen.addEventListener('click', function() {
    for(let i = 0; i < mdHiddenList.length; i++) {
      const hiddenItem = mdHiddenList[i];
      hiddenItem.classList.toggle('md-hidden');
    }
    buttonOpen.classList.toggle('service__button--close');
    if (buttonOpen.classList.contains('service__button--close')) {
    buttonOpen.textContent="Скрыть";
    } else {
      buttonOpen.textContent="Показать все";
    }
        });


} else {
  if (swiper !== undefined) {
  swiper.destroy(true,true);
  swiper = undefined;
}
  buttonOpen.addEventListener('click', function () {
    for(let i = 0; i < lgHiddenList.length; i++) {
      const hiddenItem = lgHiddenList[i];
      hiddenItem.classList.toggle('lg-hidden');
    }
    buttonOpen.classList.toggle('service__button--close');
    if (buttonOpen.classList.contains('service__button--close')) {
    buttonOpen.textContent="Скрыть";
    } else {
      buttonOpen.textContent="Показать все";
    }
        });
}
