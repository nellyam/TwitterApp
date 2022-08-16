const app  = require("../app.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

app.use(session({
    secret: "je suis un secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14
    },
    store: MongoStore.create({ 
        mongoUrl: "mongodb+srv://nelly:1988@cluster0.v2ixo.mongodb.net/twitter?retryWrites=true&w=majority",
        ttl: 60 * 60 * 24 * 14 
    })
}))