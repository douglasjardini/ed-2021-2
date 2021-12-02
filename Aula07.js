function DoublyLinkedList() {
    let Node = function(elemento) {
        this.element = elemento
        this.next = null
        this.prev = null
    }

    let length = 0
    let head = null
    let tail = null
    
    this.append = function(element) {
        //Adicionar um elemento no final da lista
        let node = new Node(element)
        let current
        
        if(head === null){
            head = node
        } else {
            current = head

            while(current.next) {
                current = current.next
            }

            current.next = node
        }

        length++ 
    }

    this.insert = function(position, element){
        //Adicionar o elemento de uma posição especifica
        if(position >= 0 && position <= length) {
            let node = new Node(element)
            let current = head
            let previous
            let index = 0

            if(position == 0) {
                if(!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if(position === length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            length++
            return true
        } else {
            return false
        }

    }

    this.removeAt = function(position) {
        //remove o elemento de uma posição especifica
        if(position >= 0 && position <= length) {
            let current = head
            let previous
            let index = 0

            if(position === 0) {
                head = current.next
                if(length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if(position === length) {
                current = tail
                tail = current.prev
                tail.nex = null
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        //remove o elemento
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) {
        //retorna a posição do nó
        let current = head
        let index = 0

        while(current) {
            if(element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.isEmpty = function() {
        //retorna se está vazia 
        return length === 0
    }

    this.size = function() {
        //retonar o tamanho da lista
        return length
    }

    this.toString = function() {
        //converte em string
        let current = head
        let string = ''

        while(current){
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        //imprimir os valores
        console.log(this.toString())
    }
}

let listaLigadas = new LinkedList()
listaLigadas.append('João')
listaLigadas.append('José')
listaLigadas.append('Maria')
listaLigadas.append('Lucas')
listaLigadas.print()
console.log(listaLigadas.indexOf('José'))
console.log(listaLigadas.indexOf('Maria'))
console.log(listaLigadas.indexOf('Lucas'))