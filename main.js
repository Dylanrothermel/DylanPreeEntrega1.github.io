
let puntosUsuario = 0
let puntosComputadora = 0
const PiedraPapelOTijeras = ["piedra", "papel", "tijeras"]



function juego(usuario) {
  const computadora = PiedraPapelOTijeras[Math.floor(Math.random() * PiedraPapelOTijeras.length)]
  if (usuario === computadora) {
    alert("Empate")
    usuario = prompt("Elige: piedra, papel o tijeras").toLowerCase()
  } else if ((usuario === "piedra" && computadora === "tijeras") || (usuario == "papel" && computadora === "piedra") || (usuario === "tijeras" && computadora === "papel")) {

    alert("Ganaste esta ronda")
    console.log(computadora)
    puntosUsuario += 1
    usuario = prompt("Elige: piedra, papel o tijeras").toLowerCase()

  } else {
    alert("Perdiste esta ronda")
    console.log(computadora)
    puntosComputadora += 1
    usuario = prompt("Elige: piedra, papel o tijeras").toLowerCase()
  }

}
function ganador(){
    if(puntosUsuario > puntosComputadora){
        alert("Ganaste la partida")
    }else if(puntosUsuario < puntosComputadora){
        alert("Perdiste la partida")
    }else{
        alert("La partida acaba en empate")
    }
}

let usuario = prompt("Elige: piedra, papel o tijeras").toLowerCase()


for (i = 0; i < 3; i++){
  juego(usuario)
}
ganador()





