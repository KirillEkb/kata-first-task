export const chatBtnList = document.querySelectorAll('.chat');
export const modalFeedback = document.querySelector('.modal-feedback');
export const modalFeedbackClose = modalFeedback.querySelector('.close');
export const body = document.querySelector('.body');

for(let i = 0; i < chatBtnList.length; i++) {
chatBtnList[i].addEventListener('click', function(){
  modalFeedback.showModal();
  body.classList.add("scroll-lock");
  if(modalFeedback.open) {
    body.addEventListener('click', function(evt) {
      if(evt.target === modalFeedback) {
        modalFeedback.close();
        body.classList.remove("scroll-lock");
      }
    });
  }
});
};

modalFeedbackClose.addEventListener('click', function(){
  modalFeedback.close();
  body.classList.remove("scroll-lock");
});
//
export const callBtnList = document.querySelectorAll('.call');
export const modalCall = document.querySelector('.modal-call');
export const modalCallClose = modalCall.querySelector('.close');

for(let i = 0; i < callBtnList.length; i++) {
callBtnList[i].addEventListener('click', function(){
  modalCall.showModal();
  body.classList.add("scroll-lock");
  if(modalCall.open) {
    body.addEventListener('click', function(evt) {
      if(evt.target === modalCall) {
        modalCall.close();
        body.classList.remove("scroll-lock");
      }
    });
  }
});
}

modalCallClose.addEventListener('click', function(){
  modalCall.close();
  body.classList.remove("scroll-lock");
});

