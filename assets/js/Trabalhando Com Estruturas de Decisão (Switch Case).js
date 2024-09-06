// estrutura de decisão
// switch/case/break/default
let fruta = "banana"
// números podem também serem usados
switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        console.log("segunda mensagem")
        break
    case "banana":
    case "morango":
        console.log("vitamina de " + fruta)
        break
// devido a variável ser banana, o console executará também case "maça" por estar depois de case "banana", por isso será usado break
    case "maça":
        console.log("suco de maçã")
        break
    // break serve para que você pare a execução de um case
    default:
        console.log("suco genérico")
// default serve como uma resposta genérica caso nenhum case seja verdadeiro
}