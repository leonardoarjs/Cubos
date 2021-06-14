let primeiroNome = "Leonardo";
console.log(primeiroNome);

primeiroNome = "leo"
console.log(primeiroNome)
let idade = 27
let altura = 1.70
console.log(`Minha idade é ${idade} anos e minha altua é ${altura} metros.`);

//escopo__________________________________
{
    let nascimento = 1993;
    console.log(nascimento)
}
let nascimento = 2000;
{
    console.log(nascimento)
}
let x = 1, y = 2;
console.log(`x+y é ${x + y}`);

//Concatenando STRINGS _____________________________-
{
    const nome = "leonardo";
    const sobreNome = "Almeida Santana"
    nomeComple = nome + " " + sobreNome
    console.log(nomeComple)
}

//Infinity e NaN(Not a Number)_______________________________________
{
    let x = 10, y = 0;
    console.log(`A divisao x/y é ${x / y}`);
}

//operadores________________
{
    let x = 1;
    x *= 3;
    console.log(`x = ${x}`)
    x -= 1;
    console.log(`x = ${x}`)
}

//resto divisao________________
{
    let x = 13 % 5;
    console.log(x)
}
// ++x x++  ___________________________________________
{
    let x = 10;
    x++;
    let y = x;
    console.log(`X: ${x}`, `Y: ${y}`);

    {
        let x = 10;
        let y = x++;
        console.log(`X: ${x}`, `Y: ${y}`);

    }
    {
        let x = 10;
        let y = ++x;
        console.log(`X: ${x}`, `Y: ${y}`);
    }
}

// Math
let a = 4 ** 0.5;
console.log(a)
console.log(`A raiz de 2 é ${Math.sqrt(2)}`)