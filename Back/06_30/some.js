arrayOdd = [1, 3, 5, 7, 9]
arrayEven = [2, 1, 3, 5, 7]

console.log(
    arrayOdd.some(x => x % 2 == 0),
    arrayEven.some(x => x % 2 == 0)

)