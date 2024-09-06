let ehLigado = false

if (ehLigado) {
    console.log("executou comando")
}
// if determina uma condicional, se X for true, Y é valido

// let possuiOvos = false
let possuiOvos = true
let itensComprados = ""
if (possuiOvos) {
    itensComprados = "Leite"
}
else {
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}
// else funciona como um senão, caso as condições não sejam atingidas haverá uma segunda opção
console.log("item comprado: " + itensComprados)

let niveldeFome = 1

if (niveldeFome === 1) {
    console.log("pouca fome")
} else if (niveldeFome === 2) {
    console.log("muita fome")
    // else if funciona como outra condicional
} else {
    console.log("faminto")
}

// nesse exemplo, se o nivel de fome fosse um valor diferente de 1 ou 2, seria faminto pois o "else", senão, aponta essa resposta caso nenhum dos dois sejam selecionados