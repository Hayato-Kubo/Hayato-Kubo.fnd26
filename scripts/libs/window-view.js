const btn = document.getElementsByClassName('travel__btn item')[0];

btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('travel__detail')[0];
  addVis.classList.add('inview')
})

const un_btn = document.getElementsByClassName('travel__detail')[0];

un_btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('travel__detail')[0];
  addVis.classList.remove('inview')
})


//career
const c1Btn = document.getElementsByClassName('bg-img-zoom img-bg50')[0];

c1Btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__1')[0];
  addVis.classList.add('inview')
})

const c1UnBtn = document.getElementsByClassName('career__1')[0];

c1UnBtn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__1')[0];
  addVis.classList.remove('inview')
})


const c2Btn = document.getElementsByClassName('bg-img-zoom img-bg50')[1];

c2Btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__2')[0];
  addVis.classList.add('inview')
})

const c2UnBtn = document.getElementsByClassName('career__2')[0];

c2UnBtn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__2')[0];
  addVis.classList.remove('inview')
})


const c3Btn = document.getElementsByClassName('bg-img-zoom img-bg50')[2];

c3Btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__3')[0];
  addVis.classList.add('inview')
})

const c3UnBtn = document.getElementsByClassName('career__3')[0];

c3UnBtn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__3')[0];
  addVis.classList.remove('inview')
})



const c4Btn = document.getElementsByClassName('bg-img-zoom img-bg50')[3];

c4Btn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__4')[0];
  addVis.classList.add('inview')
})

const c4UnBtn = document.getElementsByClassName('career__4')[0];

c4UnBtn.addEventListener('click',function() {
  const addVis = document.getElementsByClassName('career__4')[0];
  addVis.classList.remove('inview')
})


//btn
const btnCs = document.getElementById('btn')[0];

c4UnBtn.addEventListener('click',function() {
  btnCs.textContent = 'Coming soon...'
})
