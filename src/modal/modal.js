export const chatBtnList = document.querySelectorAll('.chat');
export const modalFeedback = document.querySelector('.modal-feedback');
export const modalFeedbackClose = modalFeedback.querySelector('.close');

for(let i = 0; i < chatBtnList.length; i++) {
chatBtnList[i].addEventListener('click', function(){
  modalFeedback.showModal();
  document.body.classList.add("scroll-lock");
  if(modalFeedback.open) {
    document.addEventListener('click', function(evt) {
      if(evt.target === modalFeedback) {
        modalFeedback.close();
        document.body.classList.remove("scroll-lock");
      }
    });
  }
});
};

modalFeedbackClose.addEventListener('click', function(){
  modalFeedback.close();
  document.body.classList.remove("scroll-lock");
});
//
export const callBtnList = document.querySelectorAll('.call');
export const modalCall = document.querySelector('.modal-call');
export const modalCallClose = modalCall.querySelector('.close');

for(let i = 0; i < callBtnList.length; i++) {
callBtnList[i].addEventListener('click', function(){
  modalCall.showModal();
  document.body.classList.add("scroll-lock");
  if(modalCall.open) {
    document.addEventListener('click', function(evt) {
      if(evt.target === modalCall) {
        modalCall.close();
        document.body.classList.remove("scroll-lock");
      }
    });
  }
});
}

modalCallClose.addEventListener('click', function(){
  modalCall.close();
  document.body.classList.remove("scroll-lock");
});

