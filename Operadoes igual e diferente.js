let numero = "1"
console.log(numero == 1)
// = é atribuição
//  == é para comparar o valor
// === compara o valor *e* o formato do conteúdo
//  !== questiona se é diferente

let marca = "Apple"
let resultado = marca === "Samsung"

console.log(resultado)
// guardar o valor em uma variável de resultado true/false é comum e eficiente

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuário está barrado? " + ehCPFBloqueado)

let CPFPermitido = "222.555.333-01"
let CPFDoUsuario = "222.555.333-02"

let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log("é um usuário invalido? " + ehBloqueado)