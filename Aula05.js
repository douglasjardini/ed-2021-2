function Queue() {
    var items = []

    this.enqueue = function (elemento) {
        // Adicionar um novo item
        items.push(elemento)
    }

    this.dequeue = function () {
        // Remove o primeiro item
        return items.shift()
    }

    this.front = function () {
        // Retorna o primeiro item (elemento) da fila
        return items[0]
    }

    this.isEmpty = function () {
        // Verificar se a fila está vazia ou não
        return items.length === 0
    }

    this.size = function () {
        // Retorna o tamanho da fila
        return items.length
    }

    this.print = function () {
        // Imprime a fila no console
        console.log(items.toString())
    }
}

let fila = new Queue()

fila.enqueue(3) // 1º
fila.enqueue(7) // 2º
fila.enqueue(8) // 3º
fila.enqueue(10) // 4º

fila.print()

fila.dequeue()
fila.print()

fila.dequeue()
fila.print()


//---------------------------------------------//
// Estrutura da fila com prioridades

function PriorityQueue() {
    var items = []

    function QueueElement (elemento, prioridade) {
        this.elemento = elemento
        this.prioridade = prioridade
    }

    //let enqueue = (elemento, prioridade) => {
    //}
    this.enqueue = function(elemento, prioridade) {
        let queueElement = new QueueElement(elemento, prioridade)
        let added = false

        for(let i = 0; i < items.length; i++)
        {
            if(queueElement.prioridade < items[i].prioridade)
            {
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }
    }
}