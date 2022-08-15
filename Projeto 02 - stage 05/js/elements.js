const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')

const forestCard = document.querySelector('.forest')
const rainCard = document.querySelector('.rain')
const fireCard = document.querySelector('.fireplace')
const coffeeCard = document.querySelector('.coffee')

const buttonForest = forestCard.querySelector('.forest-btn')
const buttonRain = rainCard.querySelector('.rain-btn')
const buttonCoffee = coffeeCard.querySelector('.coffee-btn')
const buttonFire = fireCard.querySelector('.fireplace-btn')

const forestVolume = forestCard.querySelector('input')
const rainVolume = rainCard.querySelector('input')
const fireVolume = fireCard.querySelector('input')
const coffeeVolume = coffeeCard.querySelector('input')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
  buttonCoffee, 
  buttonDark, 
  buttonFire, 
  buttonForest, 
  buttonLight, 
  buttonMinus, 
  buttonPause, 
  buttonPlay, 
  buttonPlus, 
  buttonRain, 
  buttonStop, 
  forestCard, 
  forestVolume, 
  coffeeCard, 
  coffeeVolume, 
  rainCard, 
  rainVolume, 
  fireCard, 
  fireVolume, 
  minutesDisplay, 
  secondsDisplay
}