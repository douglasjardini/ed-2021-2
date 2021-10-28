var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(var i = 3; i < 12; i++)
{
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    fibonacci.push()
}

console.log(fibonacci)

console.log(fibonacci[11] / fibonacci[10])