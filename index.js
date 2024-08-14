//Começar aqui
const express = require('express')
const { get } = require('http')
const app = express()

app.listen(8081, function(){
    console.log('Servidor Funcionando na porta 8081!')
})

app.get('/', function(req,res){
    res.send('Página inicial!')
})

app.get('/cadastro/:nome/:sobrenome/:idade', function(req, res){
    res.send('<h1>Pagina de Cadastro</h1><br>Nome: ' + req.params.nome + 
        '<br>' + 'Sobrenome: ' + req.params.sobrenome + '<br>' + 'Idade: ' + req.params.idade)
})