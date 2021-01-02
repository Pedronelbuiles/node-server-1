const jwt = require('jsonwebtoken')

let verificarToken = (req, res, next) => {
    let token = req.get('Authorization')
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err){
            return res.status(401).json({
                ok:false,
                err
            })
        }
        req.usuario = decoded.usuario
        next()
    })
}

let verificarAdmin_Role = (req, res, next) => {
    let usuario = req.usuario
    if (usuario.role !== 'ADMIN_ROLE') {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no tiene permisos para realizar esta acción'
            }
        })
    }
    next()
}

module.exports = {
    verificarToken,
    verificarAdmin_Role
}