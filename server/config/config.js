const DEVELOPMENT = 'dev'
const URLDBLOCAL = 'mongodb://localhost:27017/cafe'

//Port
process.env.PORT = process.env.PORT || 3000

//Environment
process.env.NODE_ENV = process.env.NODE_ENV || DEVELOPMENT

//DataBase
let urlDB
if (process.env.NODE_ENV === DEVELOPMENT) {
    urlDB = URLDBLOCAL
}else{
    urlDB = process.env.DATABASE_URL
}

process.env.URLDB = urlDB