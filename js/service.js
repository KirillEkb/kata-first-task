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

} else if (window.matchMedia(" (max-width: 1119px) ").matches){


  const buttonOpen = document.querySelector('.service__button');
  const mdHiddenList = document.querySelectorAll('.md-hidden');
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

  const buttonOpen = document.querySelector('.service__button');
  const lgHiddenList = document.querySelectorAll('.lg-hidden');
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