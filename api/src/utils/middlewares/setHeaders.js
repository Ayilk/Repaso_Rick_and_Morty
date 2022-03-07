function setHeaders(req,res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "Get", "POST", "OPTIONS", "PUT", "DELETE")
    next();
}

module.exports = setHeaders;