// script.js
function criptografar() {
    const inputText = document.getElementById('inputText').value;
    const outputText = criptografarTexto(inputText);
    document.getElementById('outputText').textContent = outputText;
}

function descriptografar() {
    const inputCryptedText = document.getElementById('inputCryptedText').value;
    const outputCryptedText = descriptografarTexto(inputCryptedText);
    document.getElementById('outputCryptedText').textContent = outputCryptedText;
}

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(textoCriptografado) {
    return textoCriptografado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiarTexto(elementId) {
    const outputText = document.getElementById(elementId).textContent;
    const tempInput = document.createElement('input');
    tempInput.value = outputText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Texto copiado!');
}
