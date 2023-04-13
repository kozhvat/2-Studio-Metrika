const POPUP_OPENED_CLASSNAME = 'js-popup_open';
const POPUP_BODY_FIXED_CLASSNAME = 'popup-body_fixed';

const popupBodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');
const popupContentNode = document.querySelector('.js-popup__content');
const popupBtnOpenNode = document.querySelector('.js-btn');
const popupBtnCloseNode = document.querySelector('.js-popup__close-btn');

popupBtnOpenNode.addEventListener('click', togglePopup);
popupBtnCloseNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupContentNode);

  if (isClickOutsideContent) {
    togglePopup();
  }
});

function togglePopup() {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
  popupBodyNode.classList.toggle(POPUP_BODY_FIXED_CLASSNAME);
}
