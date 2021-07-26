x = [1, 2, 3, 4, -5, 3]

console.log(
    x.reduce((acc, item) => item > acc ? item : acc)
)