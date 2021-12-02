function LinkedList() {
    let Node = function(elemento) {
        this.element = elemento
        this.next = null
    }

    let length = 0
    let head = null
    
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
        if(position > -1 && position <= length)
        {
           let node = new Node(element)
           let current = head
           let previous
           let index = 0
           
           if(position === 0){
               node.next = current
               head = node
           } else {
               while(index++ < position)
               {
                   previous = current
                   current = current.next
               }

               node.next = current
               previous.next = node
           }
           length++
           return true
        } else {
            return false
        }
    }

    this.removeAt = function(position) {
        //remove o elemento de uma posição especifica
        if(position > -1 && position < length)
        {
            let current = head
            let previous 
            let index = 0

            if(position === 0) {
                head = current.next
            } else {
                while(index++ < position)
                {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
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