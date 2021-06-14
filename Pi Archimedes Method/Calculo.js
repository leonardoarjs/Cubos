//Calculando pi usando o metodo de arquimedes


let n = 6; // numero de lados inicial
let s = 1;
let p = n * s;
let pi = p / 2;
for (let i = 1; i < 100; i++) {
    n = n * 2;
    s = Math.sqrt((1 - Math.sqrt(1 - (s / 2) ** 2)) ** 2 + (s / 2) ** 2);
    p = n * s;
    pi = p / 2;
}

console.log(pi);