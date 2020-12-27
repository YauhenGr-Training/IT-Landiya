import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

function scrollToForm() {
  var form = document.querySelector('#jsFlow');
  if(form !== null && typeof(form) !== 'undefined') {
    form.scrollIntoView({ behavior: 'smooth' });
  }
}

var btns = document.querySelectorAll('.jsScroll');
for(var i = 0; i < btns.length; i ++) {
  btns[i].addEventListener('click', scrollToForm)
}
