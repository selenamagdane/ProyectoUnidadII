//const mensaje = document.getElementById('mensaje');: Se obtiene una referencia al elemento del textarea con el id 'mensaje'.
const mensaje = document.getElementById('mensaje');

//const contador = document.getElementById('contador');: Se obtiene una referencia al elemento del contador con el id 'contador'.
const contador = document.getElementById('contador');

//mensaje.addEventListener('input', function(e) {: Se agrega un evento de escucha de entrada ('input') al elemento 'mensaje'. Este evento se dispara cada vez que el contenido del textarea cambia.
mensaje.addEventListener('input', function(e) {
    /*
const target = e.target;: Se obtiene el elemento que desencadenó el evento, que en este caso es el textarea.
const longitudMax = target.getAttribute('maxlength');: Se obtiene la longitud máxima permitida del atributo 'maxlength' del textarea.
const longitudAct = target.value.length;: Se obtiene la longitud actual del contenido del textarea.
contador.innerHTML = ${longitudAct}/${longitudMax};: Se actualiza el contenido del elemento contador con la longitud actual y máxima, mostrando la relación actual de caracteres utilizados y el límite máximo permitido.
    */
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

function cifrarCesar(mensaje, clave) {
    // Asegúrate de que la clave sea un número entero
    clave = parseInt(clave);

    // Verifica si la clave es un número válido
    if (isNaN(clave)) {
        alert('La clave no es un número válido.');
        return null;
    }

    // Convierte el mensaje a mayúsculas para simplificar el cifrado
    mensaje = mensaje.toUpperCase();

    // Inicializa una cadena para almacenar el mensaje cifrado
    var mensajeCifrado = '';

    // Recorre cada carácter del mensaje
    for (var i = 0; i < mensaje.length; i++) {
        var caracterActual = mensaje[i];
        
        // Verifica si el carácter es una letra del alfabeto
        if (/^[A-Z]$/.test(caracterActual)) {
            // Obtiene el código ASCII del carácter actual
            var codigoAscii = caracterActual.charCodeAt(0);

            // Aplica el cifrado César
            var codigoCifrado = (codigoAscii - 65 + clave) % 26 + 65;

            // Convierte el código cifrado de nuevo a carácter
            var caracterCifrado = String.fromCharCode(codigoCifrado);

            // Concatena el carácter cifrado al mensaje cifrado
            mensajeCifrado += caracterCifrado;
        } else {
            // Si no es una letra del alfabeto, simplemente agrega el carácter al mensaje cifrado
            mensajeCifrado += caracterActual;
        }
    }

    return mensajeCifrado;
}

function descifrarCesar(mensaje, clave) {
    // Asegúrate de que la clave sea un número entero
    clave = parseInt(clave);

    // Verifica si la clave es un número válido
    if (isNaN(clave)) {
        alert('La clave no es un número válido.');
        return null;
    }

    // Convierte el mensaje a mayúsculas para simplificar el descifrado
    mensaje = mensaje.toUpperCase();

    // Inicializa una cadena para almacenar el mensaje descifrado
    var mensajeDescifrado = '';

    // Recorre cada carácter del mensaje
    for (var i = 0; i < mensaje.length; i++) {
        var caracterActual = mensaje[i];

        // Verifica si el carácter es una letra del alfabeto
        if (/^[A-Z]$/.test(caracterActual)) {
            // Obtiene el código ASCII del carácter actual
            var codigoAscii = caracterActual.charCodeAt(0);

            // Aplica el descifrado César
            var codigoDescifrado = (codigoAscii - 65 - clave + 26) % 26 + 65;

            // Convierte el código descifrado de nuevo a carácter
            var caracterDescifrado = String.fromCharCode(codigoDescifrado);

            // Concatena el carácter descifrado al mensaje descifrado
            mensajeDescifrado += caracterDescifrado;
        } else {
            // Si no es una letra del alfabeto, simplemente agrega el carácter al mensaje descifrado
            mensajeDescifrado += caracterActual;
        }
    }

    return mensajeDescifrado;
}



function cifrarMensaje() {
    // Obtiene el valor del elemento con el id 'mensaje' en la página web.
    var mensaje = document.getElementById('mensaje').value;
    // Obtiene el valor del elemento con el id 'offset' en la página web.
    var claveSecreta = document.getElementById('offset').value;

    // Verifica si el campo de la clave secreta está vacío.
    if (claveSecreta === '') {
        // Si está vacío, muestra una alerta y sale de la función.
        alert('Por favor, ingresa una clave secreta antes de cifrar.');
        return;
    }

    // Realiza la encriptación del mensaje (aquí puedes implementar tu lógica de encriptación).
    var mensajeCifrado = cifrarCesar(mensaje, claveSecreta);


    // Almacena el mensaje cifrado en el sessionStorage para pasarlo a la siguiente página.
    sessionStorage.setItem('mensajeCifrado', mensajeCifrado);

    // Redirige a la página 'index2.html'.
    window.location.href = 'index2.html';
}


function decifrarMensaje() {
    // Obtiene el valor del elemento con el id 'mensaje' en la página web.
   var mensaje = document.getElementById('mensaje').value;
   // Obtiene el valor del elemento con el id 'offset' en la página web.
   var claveSecreta = document.getElementById('offset').value;
  
   // Verifica si el campo de la clave secreta está vacío.
   if (claveSecreta === '') {
       // Si está vacío, muestra una alerta y sale de la función.
       alert('Por favor, ingresa una clave secreta antes de cifrar.');
       return; 
   } 

   // Realiza la encriptación del mensaje (aquí puedes implementar tu lógica de encriptación).
   var mensajeCifrado = descifrarCesar(mensaje, claveSecreta);


   // Almacena el mensaje cifrado en el sessionStorage para pasarlo a la siguiente página.
   sessionStorage.setItem('mensajeCifrado', mensajeCifrado);

   // Redirige a la página 'index2.html'.
   window.location.href = 'index2.html';
}

