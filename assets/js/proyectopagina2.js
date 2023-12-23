document.addEventListener('DOMContentLoaded', function () {
    // Recupera el mensaje cifrado almacenado en el sessionStorage.
    var mensajeCifrado = sessionStorage.getItem('mensajeCifrado');

    // Muestra el mensaje cifrado en el textarea.
    document.getElementById('msgResult').value = mensajeCifrado;
});

document.getElementById("copy").addEventListener("click", function () {
    // Seleccionar el texto del textarea
    var textarea = document.getElementById("msgResult");
    textarea.select();

    try {
        // Copiar el texto al portapapeles
        document.execCommand('copy');
        // Mostrar un mensaje o realizar alguna acción adicional
        alert("Texto copiado al portapapeles: " + textarea.value);
    } catch (err) {
        // Manejar errores en la copia al portapapeles
        console.error('Error al copiar al portapapeles: ', err);
    }

    // Desseleccionar el texto
    textarea.setSelectionRange(0, 0);
});
