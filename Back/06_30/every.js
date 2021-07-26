x = [1, 2, 3, 4, 5]

verificar = x.every(x => x < 10)
console.log(verificar)
y = [213, 2, 456.1]
console.log(
    y.every(x => x >= 0 && x == Math.floor(x))
)