const path = require("path")
module.exports = {
    "dbUrl": "mongodb+srv://nelly:1988@cluster0.v2ixo.mongodb.net/twitter?retryWrites=true&w=majority",
    "cert": path.join(__dirname, "../ssl/local.crt"),
    "key": path.join(__dirname, "../ssl/local.key"),
    portHttp: 3000,
    portHttps: 3001
};