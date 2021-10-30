function dec4bin(numero){
    let Pilha = [],
    resto,
    binario = ''

    while(numero > 0)
    {
        resto = Math.floor(numero % 2)
        Pilha.push(resto)
        numero = Math.floor(numero / 2)
    }  

    while(Pilha.length > 0) {
        binario += Pilha.pop().toString()
    }

    for(var i = Pilha.length - 1; i >=0 ; i--)
    {
        console.log(Pilha[i])
    }
    return binario
}

console.log(dec4bin(25))


// function Stack() {
//     var items = []

//     this.push = function(element) {
//         //adiciona um novo item à pilha
//         items.push(element)
//     }

//     this.pop = function() {
//         //remover o item do topo da pilha
//         return items.pop()
//     }

//     this.peek = function() {
//         //devolver o elemento que está no topo da pilha
//         return items[items.length - 1]
//     }

//     this.isEmpty = function() {
//         //informar se a pilha está vazia ou não
//         return items.length === 0
//         // if(items.length === 0){
//         //     return true
//         // }else {
//         //     return false
//         // }
//     }

//     this.clear = function() {
//         //limpar a pilha
//         items = []
//     }

//     this.size = function() {
//         //informa o tamanho da pilha
//         return items.length
//     }

//     this.print = function() {
//         //imprime a pilha no console
//         console.log(items.toString())
//     }
// }

// let restoPilha = new Stack(),
//     resto,
//     binario = ''

//     while(numero > 0)
//     {
//         resto = Math.floor(numero % 2)
//         restoPilha.push(resto)
//         numero = Math.floor(numero / 2)
//     }  

//     while(restoPilha.length > 0) {
//         binario += restoPilha.pop().toString()
//     }

//     console.log(binario)


//-----------------------------------------------------------------------------------------

function conversor(numero, base)
{
    let pilha = [],
    resto,
    baseString = '',
    digitos = '0123456789ABCDEF'

    while(numero > 0) 
    {
        resto = Math.floor(numero % base)
        pilha.push(resto)
        numero = Math.floor(numero / base)
    }

    while(pilha.length > 0) 
    {
        baseString += digitos[pilha.pop()]
    }

    return baseString
}

console.log(conversor(123, 16))
console.log(conversor(123, 8))
console.log(conversor(123, 2))