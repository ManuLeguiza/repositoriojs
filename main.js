let usuarioNombre = "Manuel Leguizamon"
let usuarioPassword = "1234leg"
let usuarioNumero = 457
let usuarioRegistrado = true


if(usuarioNombre == "Manuel Leguizamon"){
    let passwordIngresado = prompt("Ingrese su contraseña")
    if(usuarioPassword == passwordIngresado){
        alert("Contraseña correcta")
    } else{
        alert("Contraseña incorrecta")
    }
}
let nombres = ["Manu","Gabi","Cami"]

console.log(1)

for(let i = 0; i >= 9; i++){
    if(i == 5){
        continue
    }
    console.log(i)
}