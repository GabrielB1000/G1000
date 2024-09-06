// Operador AND ( && ) para viajar precisa ter visto verificado e ser maior de idade
let idade = 18
let vistoVerificado = true
console.log((idade >= 18) && (vistoVerificado === true))

let moedasColetadas = 100
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)

//  Operador OR ( || ) nosso personagem somente pode sair de casa se estiver com tempo claro ou se tiver guarda chuva
let tempo = "sol"
item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair? " + podeSair)

// Operador NOT ( ! ) - nega uma afirmação
tempo = "chuva"
resultado = tempo !== "chuva"
console.log(resultado)
// poderia ser usado no console.log, como console.log(!resultado)
// console.log(!!resultado) reverteria o efeito, somente perguntando se é o resultado e não se não é

let horario = 8
 resultado = !(tempo !== "chuva") && (horario > 6)
console.log(resultado)