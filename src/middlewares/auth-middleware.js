//pra restringir as páginas, é mais viavel fazer um middleware pra isso

const authMiddleware = (req, res, next) => {
    if(req.session.authenticated){ // verifica se o user está logado
        next() //se estiver logado, continua com a próxima rota
    } else {
        res.redirect('/') //se não estiver logado, redireciona pra rota de login
    }
}

const ensureUserisAdmin = (req, res) => {
    if(req.session.currentUser.role !== 'admin'){
        return res.redirect('/dashboard')
    }
    next()
}

module.exports = {authMiddleware, ensureUserisAdmin}