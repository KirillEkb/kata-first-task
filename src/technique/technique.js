
export const technique = document.querySelector('.technique');
export const buttonOpentechnique = technique.querySelector('.technique__button');
export const mdHiddenList = technique.querySelectorAll('.md-hidden');
export const lgHiddenList = technique.querySelectorAll('.lg-hidden');


if (window.matchMedia(" (max-width: 1335px) ").matches){
  buttonOpentechnique.addEventListener('click', function() {
    buttonOpentechnique.classList.toggle('technique__button--close');
    for(let i = 0; i < mdHiddenList.length; i++) {
      const hiddenItem = mdHiddenList[i];
      hiddenItem.classList.toggle('md-hidden');
    };
    if (buttonOpentechnique.classList.contains('technique__button--close')) {
    buttonOpentechnique.textContent="Скрыть";
    } else {
      buttonOpentechnique.textContent="Показать все";
    };
  });
} else if (window.matchMedia(" (min-width: 1336px) ").matches){

  buttonOpentechnique.addEventListener('click', function () {
    for(let i = 0; i < lgHiddenList.length; i++) {
      const hiddenItem = lgHiddenList[i];
      hiddenItem.classList.toggle('lg-hidden');
    }
    buttonOpentechnique.classList.toggle('technique__button--close');
    if (buttonOpentechnique.classList.contains('technique__button--close')) {
    buttonOpentechnique.textContent="Скрыть";
    } else {
      buttonOpentechnique.textContent="Показать все";
    }
        });

      }
