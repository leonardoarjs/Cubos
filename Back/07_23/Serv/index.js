const express = require('express')

const app = express()

app.get('/livro/:numero', (req, res) => {
    console.log('recebi um get /')
    if (req.params.numero == 1) {
        res.send('Livro um')
    } else if (req.params.numero == 2) {
        res.send('Livro dois')
    } else {
        res.send('livro' + req.params.numero + 'nao existe')
    }

})

app.listen(8000)