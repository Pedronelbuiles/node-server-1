const DEVELOPMENT = 'dev'
const URLDBLOCAL = 'mongodb://localhost:27017/cafe'

//Port
process.env.PORT = process.env.PORT || 3000

//Environment
process.env.NODE_ENV = process.env.NODE_ENV || DEVELOPMENT

//Vencimiento del token
//60 seg * 60 min * 24 h * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

//SEED de autentucación
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//DataBase
let urlDB
if (process.env.NODE_ENV === DEVELOPMENT) {
    urlDB = URLDBLOCAL
}else{
    urlDB = process.env.DATABASE_URL
}

process.env.URLDB = urlDB