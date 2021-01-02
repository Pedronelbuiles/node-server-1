const DEVELOPMENT = 'dev'
const URLDBLOCAL = 'mongodb://localhost:27017/cafe'
const URLCLOUD = 'mongodb+srv://pedroAdmin:F5uTT5ROuPCzOae2@cluster0.ninjq.mongodb.net/cafe'

//Port
process.env.PORT = process.env.PORT || 3000

//Environment
process.env.NODE_ENV = process.env.NODE_ENV || DEVELOPMENT

//DataBase
let urlDB
if (process.env.NODE_ENV === DEVELOPMENT) {
    urlDB = URLDBLOCAL
}else{
    urlDB = URLCLOUD
}

process.env.URLDB = urlDB