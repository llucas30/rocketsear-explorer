import Sound from './sounds.js'
import { buttonCoffe, buttonFire, buttonForest, buttonRain } from './index.js'

const sound = Sound()

export default function Events() {
  
  function playPauseSounds() {
    if (buttonCoffe.classList.contains('selected')) {
      sound.coffeAudio.play()
      sound.fireAudio.pause()
      sound.forestAudio.pause()
      sound.rainAudio.pause()
    } else if (buttonFire.classList.contains('selected')) {
      sound.coffeAudio.pause()
      sound.fireAudio.play()
      sound.forestAudio.pause()
      sound.rainAudio.pause()
    } else if (buttonRain.classList.contains('selected')) {
      sound.coffeAudio.pause()
      sound.fireAudio.pause()
      sound.forestAudio.pause()
      sound.rainAudio.play()
    } else if (buttonForest.classList.contains('selected')) {
      sound.coffeAudio.pause()
      sound.fireAudio.pause()
      sound.forestAudio.play()
      sound.rainAudio.pause()
    } else {
      sound.coffeAudio.pause()
      sound.fireAudio.pause()
      sound.forestAudio.pause()
      sound.rainAudio.pause()
    }
  }

  return {
    playPauseSounds
  }
}
