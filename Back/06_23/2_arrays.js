let lista = ["ethan", "kibot", "zari"]
console.log(lista.indexOf("ethan"))
console.log(lista.indexOf("kibot"))
console.log(lista.indexOf("leo"))
console.log(lista.includes("zari"))
lista.reverse()
console.log(lista)
const fun = function (texto) {
    console.log(texto.split("").reverse().join(""))
}
fun("Cubos Academy")


const a = [1, 2], b = [3, 4], c = [5, 6]
console.log(a.concat(b, c))


const opcoes = ['eu', 'vc', 'ele', 'nos']
console.log(opcoes.slice(1))
console.log(opcoes.slice(1, 3))
console.log(opcoes.slice(-1))

let num = [0, 0, 0, 0]
num.splice(1, 2, -123, "leo", true)
console.log(num)
num.splice(1, 0, "leo")
console.log(num)
num.splice(-2, 0, "nardo")
console.log(num)
num.splice(0, 1)
console.log(num)
num.splice(num.length - 1, 1)
console.log(num)