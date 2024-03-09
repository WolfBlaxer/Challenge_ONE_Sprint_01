//Las "llaves" de encriptación que utilizaremos son las siguientes:

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"//*

const textArea = document.querySelector(".textarea1");
const mensaje = document.querySelector(".textarea2");

/* Funcion encriptar */

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    document.getElementById("texto1").style.display = "none"
    
}

function encriptar(stringEncriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

/* Funcion desencriptar */

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}

function desencriptar(stringDesencriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()
    document.getElementById("texto1").style.display = "none"

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

/* Función Copiar */

/* function btnCopiar(){
    const textoCopiado = copiar(textArea2.value)
    mensaje.value = textoCopiado
    textArea2.value = "";

} */

const textArea2 = document.querySelector('.textarea2');
const button = document.querySelector(".boton-copiar");
  
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(textArea2.value);
    } catch (err) {
      console.error(err.name, err.message);
    }
  });