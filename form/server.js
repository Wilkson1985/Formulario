const express = require('express')
const app = express() 
const bodyParser = require('bod-parser')

app.use(body-Parser.urlencoded({exetendd: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterdo!</h1>')
}

app.listen(3003)
