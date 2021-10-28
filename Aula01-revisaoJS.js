var novoVetor = []
var novoVetor = new Array("teste", "teste1")


novoVetor[0] = 1
novoVetor[1] = 3
novoVetor[2] = 5
novoVetor[3] = 7
novoVetor[4] = 8

console.log(novoVetor)

for(var i = 0; i < novoVetor.length; i++)
{
    console.log(novoVetor[i])
}


novoVetor.push("teste")

console.log(novoVetor)

novoVetor.pop()

console.log(novoVetor)

novoVetor.unshift({id: 1, nome: 'teste'})

console.log(novoVetor)

novoVetor.shift()

console.log(novoVetor)

var arrayBi = []

var vetor1 = [1, 2, 6, 12, -3, 5]
var vetor2 = [9, 1, 7, 15, 90, 45]

arrayBi[0] = vetor1
arrayBi[1] = vetor2

console.log(arrayBi[1][2])

for(var i = 0; i < arrayBi.length; i++) {
    for(var j = 0; j < arrayBi[i].length; j++)
    {
        console.log(arrayBi[i][j])
    }    
}


