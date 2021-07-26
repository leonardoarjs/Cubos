const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let filtrado = array.filter((x) => {
    if (x > 5) {
        return true
    } else {
        return false
    }
})
console.log(filtrado)

filtrado = array.filter((x) => { return (x > 5 & x < 9) })
console.log(filtrado)

filtrado = array.filter(x => (x > 1 & x < 9))
console.log(filtrado)

somar = y => y + 1
console.log(somar(1))


const maior = (x) => {
    if (x > 5) {
        return true
    } else {
        return false
    }
}
filtrado = array.filter(maior)
console.log(filtrado)