
var value1 = document.querySelector(".value1");
var value2 = document.querySelector(".value2");
var result = document.querySelector(".result");

var btnMais = document.querySelector(".mais")
var btnMenos = document.querySelector(".menos")
var btnMult = document.querySelector(".multi")
var btnDiv = document.querySelector(".divisao")

btnMais.addEventListener("click", soma)
btnMenos.addEventListener("click", menos)
btnDiv.addEventListener("click", divisao)
btnMult.addEventListener("click", multi)

function soma() {
    let resp = Number(value1.value) + Number(value2.value)
    result.setAttribute('value', resp);
}

function menos() {
    let resp = Number(value1.value) - Number(value2.value)
    result.setAttribute('value', resp);
}

function divisao() {
    let resp = Number(value1.value) / Number(value2.value)
    result.setAttribute('value', resp);
}

function multi() {
    let resp = Number(value1.value) * Number(value2.value)
    result.setAttribute('value', resp);
}