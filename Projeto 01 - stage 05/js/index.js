import Functions from "./functions.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe-house')
const buttonFire = document.querySelector('.fireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  Functions.countdown();
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  Functions.pause();
})

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
})

buttonPlus.addEventListener('click', function() {
  Functions.more();
})

buttonMinus.addEventListener('click', function() {
  Functions.less();
})

buttonCoffe.addEventListener('click', function () {
  buttonCoffe.classList.add('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
})

buttonFire.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.add('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
})

buttonForest.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.add('selected')
  buttonRain.classList.remove('selected')
})

buttonRain.addEventListener('click', function () {
  buttonCoffe.classList.remove('selected')
  buttonFire.classList.remove('selected')
  buttonForest.classList.remove('selected')
  buttonRain.classList.add('selected')
})


