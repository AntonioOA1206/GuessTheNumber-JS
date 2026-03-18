//Funcion para mostrar los numeros menores que usaremos posteriormente
function mostrarMenores() {
    //Por cada elemento del array (ordenado) lo añade al parrafo de numeros recordatorios
    historialIntentos.forEach(num => {
        if (num < numeroAleatorio) {
            npista.innerHTML += "<span class='menor'>" + num + "</span>" + " ";
        }
    });
}

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
let cambiar = document.querySelector("#titulo");

//Nos quedamos con la imagen
let image = document.querySelector("#imagen");

//Nos quedamos con el parrafo de la pista
let pista = document.querySelector("#pista");

//Creamos dos variables que usaremos posteriormente
let texto;
let numeros;

//Nos quedamos con el numero de intentos (por defecto 0)
let tries = document.querySelector("#intentos span");

//Creamos una variable que es la que vamos a usar para contar los intentos
let intento = 0;

//Nos quedamos con el parrafo de los numeros recordatorios
npista = document.querySelector("#numeros");

//Creamos el array (vacio) que vamos a usar
let historialIntentos = [];


//Creamos un evento tipo click para el boton1
buttonEnviar.addEventListener("click", function(event) {
    //Si se introduce algo en el input entra en el if, en caso contrario no hace nada
    if (Number(inputNumber.value) != "") {
        if (Number(inputNumber.value) > 100 || Number(inputNumber.value) < 0) {
            alert("Este numero es menor que 0 o mayor que 100. ¿Podrias leer bien las instrucciones?");
        } else {
            //Nos quedamos con el texto del parrafo de numeros recordatorios
            texto = npista.innerText;
            //Cada que se pulse el boton se limpia el array
            historialIntentos = [];
            //Se limpia el parrafo de numeros recordatorios
            npista.innerHTML = "";
            //Añadimos al array el numero nuevo introducido
            historialIntentos.push(Number(inputNumber.value));
            /*
            .split lo que hace es un cut usando como separador los espacios y convirtiendo el resultado en un array
            .filter(num => num !== "") ignora las cadenas vacias
            .map recorre el array y transforma cada elemento
            */
            numeros = texto.split(" ").filter(num => num !== "").map(num => Number(num));
            
            //Cada numero lo añadimos al array
            numeros.forEach(num => {
                historialIntentos.push(num);
            });

            /*
            .sort sirve para ordenar
            a y b son los parametros que necesita la funcion
            En este caso:
                - Si a - b < 0 la a se pone tras la b
                - Si a - b > 0 la b se pone tras la a
                - Si a - b = 0 no se toca la posicion
            */
            historialIntentos.sort((a, b) => a - b); // de menor a mayor

            //Llamamos a la funcion para que se muestren primero los numeros menores
            mostrarMenores();

            //Creamo variable booleana para comprobar si ya se ha mostrado la x o no
            let estado = false;

            //Para todos los elementos del array
            historialIntentos.forEach(num => {
                //Si ganas...
                if (num === numeroAleatorio) {
                    //Limpia el parrafo de numeros recordatorios
                    npista.innerText = "";
                    //Mostramos primero los numeros menores
                    mostrarMenores();
                    //En vez de la x ahora mostramos el numero que habia que adivinar en verde
                    npista.innerHTML += "<span class='fin'>" + num + "</span>" + " ";
                //Si el que tu has no coincide con el que hay que adivinar y la x aun no se ha escrito...
                } else if (num != numeroAleatorio && !estado) {
                    //Ponemos el estado en true para que no se muestren mas de una x
                    estado = true;
                    //Mostramos la x en negrita y negro
                    npista.innerHTML += "<span>" + "x" + "</span>" + " ";
                }
            });

            //Para todos los elementos del array
            historialIntentos.forEach(num => {
                //Si son mayores al que hay que adivinar mostramos tras la x con color azul
                if (num > numeroAleatorio) {
                    npista.innerHTML += "<span class='mayor'>" + num + "</span>" + " ";
                }
            });


            //Si el numero introducido es igual y del mismo tipo que el numero aleatorio entonces...
            if (Number(inputNumber.value) === numeroAleatorio) {
                //Mostramos que has ganado
                alert("GANASTE");
                alert("Efectivamente " + inputNumber.value + " es igual a " + numeroAleatorio);
                //Limpiamos el input
                inputNumber.value = "";
                //Felicitamos al usuario :D
                pista.innerHTML = "<span>Felicidades :D</span>";
                //Cambiamos la imagen a una carita sonriente
                image.src = "./imagenes/sonrisa.png";
                //Cambiamos el titulo a color verde tambien
                cambiar.style.color = "green";
                //Deshabilitar el boton de enviar para no poder seguir jugando
                buttonEnviar.disabled = true;
            //Si el numero introducido es mayor que el numero aleatorio entonces...
            } else if (Number(inputNumber.value) > numeroAleatorio) {
                //Mostramos mensaje diciendo eso como pista
                pista.innerHTML = "Este numero es <span>mayor</span> al que tienes que adivinar. Intenta con uno <span>menor</span>.";
                //Cambiamos la imagen a una flecha hacia abajo
                image.src = "./imagenes/abajo.jpg";
                //Limpiamos el input
                inputNumber.value = "";
                //Cambiamos el titulo a color azul tambien
                cambiar.style.color = "blue";
            //Si el numero introducido es menor que el numero aleatorio entonces...
            } else if (Number(inputNumber.value) < numeroAleatorio) {
                //Mostramos mensaje diciendo eso como pista
                pista.innerHTML = "Este numero es <span>menor</span> al que tienes que adivinar. Intenta con uno <span>mayor</span>.";
                //Cambiamos la imagen a una flecha hacia arriba
                image.src = "./imagenes/arriba.jpg";
                //Limpiamos el input
                inputNumber.value = "";
                //Cambiamos el titulo a rojo verde tambien
                cambiar.style.color = "red";
            //Si no es nada de eso (seguramente una letra, signo, etc.)...
            } else {
                //Recordamos amablemente que solo se pueden introducir numeros y limpiamos el input
                alert("¿Acaso no sabes lo que es un numero o que?");
                inputNumber.value = "";
            }
            
            //Si el numero de intentos es menor de 10
            if (intento < 10) {
                //Aumentamos la cantidad de intentos
                intento++;
                //Lo mostramos
                tries.innerText = intento;
            //Sino...
            } else {
                //Lo avisamos con una alerta
                alert("Ya no tienes mas intentos. Perdiste :(");
                //Cambiamos la cara a triste
                image.src = "./imagenes/triste.jpg";
                //Borramos la pista
                pista.innerText = ""
                //Quitamos la funcion del boton para que el usuario no pueda continuar jugando
                buttonEnviar.disabled = true;
            }
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
    //Cambiamos la imagen a neutra
    image.src = "./imagenes/igual.png";
    //Establecemos la pista por defecto
    pista.innerText = "Esperando a recibir un numero :)"
    //Quitamos la funcion del boton para que el usuario no pueda continuar jugando
    buttonEnviar.disabled = false;
    //Establecemos el numero de intentos de nuevo a 0 y lo mostramos
    intento = 0;
    tries.innerText = intento;
    //Cambiamos el titulo a color negro tambien
    cambiar.style.color = "black";

    npista.innerHTML = "";

    //Limpiamos el input
    inputNumber.value = "";
});

//Cuando la pagina se carga saludamos al usuario
window.addEventListener ("load", function(event) { //Con unload seria para si se cierra o cambia de pagina
    alert("Bienvenido a mi pagina Web");
});
