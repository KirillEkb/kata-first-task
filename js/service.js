if (window.matchMedia("(max-width: 767px)").matches) {
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.315,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
}
});

} else  if (window.matchMedia("(max-width: 1119px)").matches){


  let buttonOpen = document.querySelector('.service__button');
  let mdHiddenList = document.querySelectorAll('.md-hidden');
  buttonOpen.addEventListener('click', function () {
    for(let i = 0; i < mdHiddenList.length; i++) {
      let hiddenItem = mdHiddenList[i];
      hiddenItem.classList.toggle('md-hidden');
    }
    buttonOpen.classList.toggle('service__button--close');
    if (buttonOpen.classList.contains('service__button--close')) {
    buttonOpen.innerHTML="Скрыть"; 
    } else {
      buttonOpen.innerHTML="Показать все";
    }
        });

  
} else {

  let buttonOpen = document.querySelector('.service__button');
  let lgHiddenList = document.querySelectorAll('.lg-hidden');
  buttonOpen.addEventListener('click', function () {
    for(let i = 0; i < lgHiddenList.length; i++) {
      let hiddenItem = lgHiddenList[i];
      hiddenItem.classList.toggle('lg-hidden');
    }
    buttonOpen.classList.toggle('service__button--close');
    if (buttonOpen.classList.contains('service__button--close')) {
    buttonOpen.innerHTML="Скрыть"; 
    } else {
      buttonOpen.innerHTML="Показать все";
    }
        });
}