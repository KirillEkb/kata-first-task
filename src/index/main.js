export const showMoreText = document.querySelector('.text-block__show-more');
export const textMove = document.querySelector('.text-block__text--move');
export const main = document.querySelector('.main');
export const textMoveXs = main.querySelector('.xs-hidden');

showMoreText.addEventListener('click', function(){
  textMove.classList.toggle('text-block__text--move');
  textMoveXs.classList.toggle('xs-hidden');
  if (textMove.classList.contains('text-block__text--move')) {
    showMoreText.textContent="Читать далее";
    showMoreText.classList.remove('show-more--close');
    } else {
      showMoreText.textContent="Свернуть";
      showMoreText.classList.add('show-more--close');
    }
});
