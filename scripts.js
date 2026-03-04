/* 
Genera un número aleatorio entre 0 (incluyendolo) y 1 (sin incluirlo) incluyendo decimales como 0.1 o 0.9
Multimiplicamos ese numero por 100 obteniendo un numero entre 0 y 99 (con decimales)
Lo redondeamos hacia abajo para quitar decimales
Le sumamos 1 para que ahora si nos de un numero entre 0 y 100
*/
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//Lo mostramos por consola para consultarlo si es necesario para probar la pagina
console.log(numeroAleatorio);

//Nos quedamos con el input del texto
let inputNumber = document.querySelector("#numero");

//Nos quedamos con el boton1
let buttonEnviar = document.querySelector("#boton1");

//Nos quedamos con el boton2
let buttonReiniciar = document.querySelector("#boton2");

//Creamos un evento tipo click para el boton1
buttonEnviar.addEventListener("click", function(event) {
    //Si se introduce algo en el input entra en el if, en caso contrario no hace nada
    if (Number(inputNumber.value) != "") {
        //Si el numero introducido es igual y del mismo tipo que el numero aleatorio entonces...
        if (Number(inputNumber.value) === numeroAleatorio) {
            //Mostramos que has ganado y limpiamos el input
            alert("GANASTE");
            alert("Efectivamente " + inputNumber.value + " es igual a " + numeroAleatorio);
            inputNumber.value = "";
        //Si el numero introducido es mayor que el numero aleatorio entonces...
        } else if (Number(inputNumber.value) > numeroAleatorio) {
            //Mostramos mensaje diciendo eso como pista y limpiamos el input
            alert("Este numero es mayor al que tienes que adivinar");
            inputNumber.value = "";
        //Si el numero introducido es menor que el numero aleatorio entonces...
        } else if (Number(inputNumber.value) < numeroAleatorio) {
            //Mostramos mensaje diciendo eso como pista y limpiamos el input
            alert("Este numero es menor al que tienes que adivinar");
            inputNumber.value = "";
        //Si no es nada de eso (seguramente una letra, signo, etc.)...
        } else {
            //Recordamos amablemente que solo se pueden introducir numeros y limpiamos el input
            alert("¿Acaso no sabes lo que es un numero o que?");
            inputNumber.value = "";
        }
    }
});

//Creamos un evento tipo click para el boton2
buttonReiniciar.addEventListener("click", function(event) {
    //Le asignamos un nuevo valor a numero aleatorio
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    //Lo mostramos por consola por la misma razon que antes
    console.log("Numero nuevo: " + numeroAleatorio);
    //Avisamos que el numero secreto ha sido cambiado
    alert("Numero cambiado :D");4
    //Limpiamos el input
    inputNumber.value = "";
});