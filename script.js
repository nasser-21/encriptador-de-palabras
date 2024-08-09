function encriptar() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    let outputContainer = document.getElementById('outputText');
    outputContainer.innerHTML = `<p class="result-text">${encryptedText}</p>`;
}

function desencriptar() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
        
    let outputContainer = document.getElementById('outputText');
    outputContainer.innerHTML = `<p class="result-text">${decryptedText}</p>`;
}

function borrar() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerHTML = `
        <img src="Muñeco.png" alt="Imagen de Resultado" class="result-image" />
        <p class="result-text">Ningún mensaje fue encontrado</p>
        <p>Ingrese el texto que desee encriptar o desencriptar</p>
    `;
}

function copiar() {
    let outputText = document.getElementById('outputText');

    // Crear un rango para seleccionar el contenido del contenedor
    let range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        // Copiar el contenido al portapapeles
        document.execCommand('copy');
        console.log('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }

    // Limpiar la selección
    window.getSelection().removeAllRanges();
}
