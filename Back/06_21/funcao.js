function ola() {
    console.log("ola");
}

ola()

function dizer(pessoa) {
    console.log(`Ola ${pessoa}`);
}

dizer("leo")

function verificar(nome, idade) {
    if (idade >= 18) {
        return (true);
    } else {
        return ({ leo: false, leonardo: true });
    }
}


console.log(verificar("leo", 17).leo);