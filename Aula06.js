function LinkedList() {
    let Node = function(elemento) {
        this.element = elemento
        this.next = null
    }

    let length = 0
    let head = null
    
    this.append = function(element) {
        // Adicionar um elemento no final da lista
        let node = new Node(element)
        let current // posição atual

        if(head === null) {
            head => node
        } else {
            current = head  // head passa a ser a posição atual
            
            while(current.next) {
                current = current.next
            }

            current.next = node

        }

        length++
    }

    this.insert = function(position, element) {
        // Adicionar o elemento de uma posição específica
    }

    this.removeAt = function(position) {
        // Remove o elemento de uma posição específica
    }

    this.remove = function(element) {
        // Remove o elemento
    }

    this.indexOf = function(elemento) {
        // Retorna a posição do nó
    }

    this.isEmpty = function() {
        // Retorna se está vazia ou não
    }

    this.size = function() {
        // Retorna o tamanho da lista
    }

    this.toString = function() {
        // Converte a string
    }

    this.print = function() {
        // Imprimir os valores
    }
}