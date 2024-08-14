const { type } = require('os')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('dbintronode', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado ao Banco!')
}).catch(function(erro){
    console.log('Falha ao se conectar ao banco! \n' + erro)
})

const Cliente = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
})

//Cliente.sync({force: true})

Cliente.create({
    nome: 'Adalberto Pereira Lima',
    endereco: 'rua 1',
    bairro: 'bairro1',
    cep: '00320-001',
    telefone: '0876-5487',
    celular: '(01)9678-6765'
})

Cliente.create({
    nome: 'Lisa Ferreira Santos',
    endereco: 'rua 2',
    bairro: 'bairro1',
    cep: '00330-002',
    telefone: '1576-5789',
    celular: '(01)8748-6445'
})

Cliente.create({
    nome: 'Pedro Oliveira',
    endereco: 'rua 6',
    bairro: 'bairro2',
    cep: '00420-088',
    telefone: '9076-5882',
    celular: '(01)9168-6995'
})