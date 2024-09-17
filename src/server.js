const express = require('express')
const path = require('path')
const router = require('./routes.js')
const session = require('express-session') //pacote do express pra trabalhar com as sessões

const app = express()

app.set('view engine', 'ejs')
app.set('views',  path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))

app.use(session({ //usa o  middleware do express sessions
    secret: 'palavra-chave-secreta', //palavra secreta q encripta a sessão
    resava: false, 
    saveUninitialized: true, //salva sessões mesmo se não houverem dados
    cookie: {secure:false}
}))
app.use(router)

app.listen(3000, () => console.log(`Servidor rodando na porta 3000`))