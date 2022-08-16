const mongoose = require("mongoose");
const env = require(`../environnement/${process.env.NODE_ENV}`);
mongoose.connect(env.dbUrl)
.then(() => {
    console.log("Connexion db réussie");
})
.catch(err => console.log({err}))
