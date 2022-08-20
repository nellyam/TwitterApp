const path = require("path")
module.exports = {
    "dbUrl": "mongodb+srv://nelly:1988@cluster0.v2ixo.mongodb.net/twitter?retryWrites=true&w=majority",
    "cert": "/etc/letsencrypt/live/nelly-projects.fr/fullchain.pem",
    "key": "/etc/letsencrypt/live/nelly-projects.fr/privkey.pem",
    portHttp: 3000,
    portHttps: 443
};
