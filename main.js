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

const saludar = nombre=> console.log("Hola " = nombre)

saludar("Manu")

let nombres = ["Manu","Gabi","Cami"]
for(let i = 0; i < nombres.length;i++){
    console.log("Existe el nombre" + nombres[i] + "en la lista")
    break
}

let nombre = prompt("ingrese un nombre")

while(nombre != "Gabi"){
    alert("Nombre equivocado")
    nombre = prompt("vuelve a intentarlo")
}
// for(let i = 0; i >= 9; i++){
//     if(i == 5){
//         continue
//     }
//     console.log(i)
// }