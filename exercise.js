// Cree una función JS que acepte 4 argumentos.
// Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
// Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
// Si es más pequeño, la consola registra "¡El número es menor que 50!"

function calc(num1, num2, num3, num4) {
    let result = (num1 + num2) * (num3 + num4);
    return result
}

let calcNum = calc(3, 2, 1, 4);

if (calcNum > 50) {
    console.log(`¡El número ${calcNum} es mayor que 50!`)
} else if (calcNum < 50) {
    console.log(`¡El número ${calcNum} es menor que 50!`)
}