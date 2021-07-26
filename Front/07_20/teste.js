let i = 0
let j = 0
const cor = setInterval(() => {
    if (i <= 10) {
        if (j == 1) {
            console.log(1)
            j = 0
        } else {
            console.log(0)
            j = 1;
        }
    } else {
        clearInterval(cor)
    }

    i += 1
}, 1000);