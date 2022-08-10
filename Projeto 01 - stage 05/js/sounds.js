export default function() {

  const forestAudio = new Audio("./sounds/Floresta.wav")
  const rainAudio = new Audio("./sounds/Chuva.wav")
  const fireAudio = new Audio("./sounds/Lareira.wav")
  const coffeAudio = new Audio("./sounds/Cafeteria.wav")

  fireAudio.loop = true
  coffeAudio.loop = true
  forestAudio.loop = true
  rainAudio.loop = true
  

  return {
    forestAudio, 
    rainAudio, 
    fireAudio, 
    coffeAudio
  }
}