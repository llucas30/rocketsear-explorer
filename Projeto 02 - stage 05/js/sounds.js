export default function() {

  const forestAudio = new Audio("./sounds/Floresta.wav")
  const rainAudio = new Audio("./sounds/Chuva.wav")
  const fireAudio = new Audio("./sounds/Lareira.wav")
  const coffeeAudio = new Audio("./sounds/Cafeteria.wav")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  buttonPressAudio.volume = 0.02
  kitchenTimer.volume = 0.05

  function pressButton(button) {
    button.play()
  }

  function playAudio(sound, card) {
    sound.loop = true
    let isActive = card.classList.contains('active')
    isActive === false ? sound.pause() : sound.play()
  }

  function adjustVolume(sound, volume) {
    sound.volume = volume
  }

  return {
    adjustVolume, 
    playAudio, 
    pressButton, 
    forestAudio, 
    rainAudio, 
    fireAudio, 
    coffeeAudio, 
    kitchenTimer, 
    buttonPressAudio
  }
}