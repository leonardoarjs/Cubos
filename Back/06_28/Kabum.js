let contagem = 10
const imp = () => {
    if (contagem == 0) {
        clearInterval(intervalId)
        console.log("KABUM")
    } else {
        console.log(`Explodira em ${contagem}`)
        contagem--
    }
}
console.log(`Explodira em ${contagem}`)
contagem--
const intervalId = setInterval(imp, 100);


