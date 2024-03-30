const botao = document.getElementById("botao")
const texto = document.getElementById("vezes")

let vezes = 1

botao.addEventListener("click", () => {
    texto.innerHTML = vezes
    vezes++
})

const textoAlto = document.getElementById("textoAlto")
const upper = document.getElementById("upper")
const botaoAlta = document.getElementById("botaoAlta")

function upperCase(text){
    alert(text.toUpperCase())
}

botaoAlta.addEventListener("click", () => {
    upperCase(textoAlto.value)
})

const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")
const somar = document.getElementById("somar")

function soma(x, y){
    return x + y
}

somar.addEventListener("click", () => {
    alert(soma(parseInt(valor1.value), parseInt(valor2.value)))
})