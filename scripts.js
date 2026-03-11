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

//Nos quedamos con ambos botones
let ambosBotones = document.querySelectorAll("button");

//Nos quedamos con el titulo
let cambiar = document.querySelector("#titulo")

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
            //Cambiamos el titulo a color verde tambien
            cambiar.style.color = "green";
        //Si el numero introducido es mayor que el numero aleatorio entonces...
        } else if (Number(inputNumber.value) > numeroAleatorio) {
            //Mostramos mensaje diciendo eso como pista y limpiamos el input
            alert("Este numero es mayor al que tienes que adivinar");
            inputNumber.value = "";
            //Cambiamos el titulo a color azul tambien
            cambiar.style.color = "blue";
        //Si el numero introducido es menor que el numero aleatorio entonces...
        } else if (Number(inputNumber.value) < numeroAleatorio) {
            //Mostramos mensaje diciendo eso como pista y limpiamos el input
            alert("Este numero es menor al que tienes que adivinar");
            inputNumber.value = "";
            //Cambiamos el titulo a rojo verde tambien
            cambiar.style.color = "red";
        //Si no es nada de eso (seguramente una letra, signo, etc.)...
        } else {
            //Recordamos amablemente que solo se pueden introducir numeros y limpiamos el input
            alert("¿Acaso no sabes lo que es un numero o que?");
            inputNumber.value = "";
        }
    }
});


//Recorremos el array
ambosBotones.forEach (botonA => {
    //Para cada boton creamos un evento de tipo mouseenter para que cuanto el raton se ponga sobre el boton el texto de este cambie a azul
    botonA.addEventListener("mouseenter", function(event) {
        botonA.style.color = "blue";                             
    });

    //Para cada boton creamos un evento de tipo mouseleave para que cuanto el raton salga de encima del boton el texto de este cambie a azul
    botonA.addEventListener("mouseleave", function(event) {
        botonA.style.color = "black";                             
    });
});

//Creamos un evento tipo click para el boton2
buttonReiniciar.addEventListener("click", function(event) {
    //Le asignamos un nuevo valor a numero aleatorio
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    //Lo mostramos por consola por la misma razon que antes
    console.log("Numero nuevo: " + numeroAleatorio);
    //Avisamos que el numero secreto ha sido cambiado
    alert("Numero cambiado :D");
    //Limpiamos el input
    inputNumber.value = "";
});