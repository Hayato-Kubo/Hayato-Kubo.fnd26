const btn = document.getElementsByClassName('travel__btn item')[0];

btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('__detail')[0];
  addVis.classList.add('inview')
})

const un_btn = document.getElementsByClassName('batsu')[0];

un_btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('__detail')[0];
  addVis.classList.remove('inview')
})