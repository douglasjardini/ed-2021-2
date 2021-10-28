function Stack() {
    var items = []

    this.push = function(element) {
        // adiciona um novo item à pilha
        items.push(element)
    }

    this.pop = function() {
        // remover o item do topo da pilha
        return items.pop()
    }

    this.peek = function() {
        // devolver o elemento que está no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        // informar se a pilha está vazia ou não
        return items.length === 0
        // if(items.length === 0) {
        //    return true
        //}else {
        //    return false
        //}
    }

    this.clear = function() {
        // Limpar a pilha
        items = []
    }

    this.size = function() {
        // Informa o tamanho da pilha
        return items.length
    }

    this.print = function() {
        // Imprime a pilha no console
        console.log(items.toString())
    }
}

var pilha = new Stack()

console.log(pilha.isEmpty())

pilha.push(2)
pilha.push(4)
pilha.push(6)
pilha.push(8)
pilha.push(10)

pilha.print()

console.log(pilha.isEmpty())

pilha.pop()

pilha.print()

console.log(pilha.peek())

console.log(pilha.size())

pilha.clear()

console.log(pilha.size())