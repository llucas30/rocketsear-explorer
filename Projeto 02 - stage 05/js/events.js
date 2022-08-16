import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonDark,
  buttonLight,
  coffeeCard, 
  buttonCoffee,
  coffeeVolume,
  fireCard, 
  buttonFire,
  fireVolume,
  forestCard,  
  buttonForest,
  forestVolume,
  rainCard, 
  buttonRain,
  rainVolume
} from './elements.js'

export default function ({timer, sounds}) {

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  sounds.buttonPressAudio.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  sounds.buttonPressAudio.play()
  timer.pause()
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  sounds.buttonPressAudio.play()
  timer.reset()
})

buttonPlus.addEventListener('click', function () {
  sounds.buttonPressAudio.play()
  timer.more()
})

buttonMinus.addEventListener('click', function () {
  sounds.buttonPressAudio.play()
  timer.less()
})

buttonCoffee.addEventListener('click', function () {
  coffeeCard.classList.toggle('active')
  sounds.playAudio(sounds.coffeeAudio, coffeeCard)
})

coffeeVolume.addEventListener('input', function () {
  sounds.adjustVolume(sounds.coffeeAudio, coffeeVolume.value)
})

buttonFire.addEventListener('click', function () {
  fireCard.classList.toggle('active')
  sounds.playAudio(sounds.fireAudio, fireCard)
})

fireVolume.addEventListener('input', function () {
  sounds.adjustVolume(sounds.fireAudio, fireVolume.value)
})

buttonForest.addEventListener('click', function () {
  forestCard.classList.toggle('active')
  sounds.playAudio(sounds.forestAudio, forestCard)
})

forestVolume.addEventListener('input', function () {
  sounds.adjustVolume(sounds.forestAudio, forestVolume.value)
})

buttonRain.addEventListener('click', function () {
  rainCard.classList.toggle('active')
  sounds.playAudio(sounds.rainAudio, rainCard)
})

rainVolume.addEventListener('input', function () {
  sounds.adjustVolume(sounds.rainAudio, rainVolume.value)
})

buttonLight.addEventListener('click', function () {
  buttonDark.classList.toggle('hide')
  buttonLight.classList.toggle('hide')
  document.querySelector('body').classList.add('dark-theme')
})

buttonDark.addEventListener('click', function () {
  buttonDark.classList.toggle('hide')
  buttonLight.classList.toggle('hide')
  document.querySelector('body').classList.remove('dark-theme')
})

}