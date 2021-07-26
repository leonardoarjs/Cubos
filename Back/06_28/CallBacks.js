const fs = require('fs')

const buffer = fs.readFileSync('./leo.txt')
console.log(buffer.byteLength)
console.log(buffer)
console.log(buffer.includes("leo"))
console.log(buffer.toString())


fs.readFile('./leo.txt', function (err, data) {
    if (!err) {
        console.log(data.toString())
    }
})

fs.readFile('./leo.txt', (err, data) => {
    if (!err) {
        console.log(data.toString())
    }
})

setTimeout(() => {
    console.log("leo")
}, 3000);


nome = 'leonardo'

setTimeout((texto) => {
    console.log(texto.split("").reverse().join(""))
}, 1000, nome);


