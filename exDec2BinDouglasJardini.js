/*----------Trabalho enviado no Teams---------*/
function decparabin(numDec) {
    var restoStack = [],
    resto,
    binario = ''

    while(numDec > 0) {
        resto = Math.floor(numDec % 2)
        restoStack.push(resto)
        numDec = Math.floor(numDec / 2)
    }

    while(restoStack.length > 0) {
        binario += restoStack.pop().toString()
    }

    return binario
}

console.log(decparabin(25))

/*------------Exemplo feito pelo Leo em aula----------------*/

function conversor(numero, base) {
    let pilha = [],
    resto,
    baseString = '',
    digitos = '0123456789ABCDEF'

    while(numero > 0) {
        resto = Math.floor(numero % base)
        pilha.push(resto)
        numero = Math.floor(numero / 16)
    }

    while(pilha.length > 0) {
        baseString += digitos[pilha.pop()]
    }

    return baseString
}

console.log(conversor(123, 16))
console.log(conversor(123, 8))
console.log(conversor(123, 2))