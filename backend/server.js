const express = require("express");
const connectDB = require("./config/db");
const port = 5000
const dotenv = require("dotenv").config();
const app = express();

// Connection à la db
connectDB();

//Middleware qui permet de traiter les donnée de la request
app.use(express.json())
app.use(express.urlencoded({extended: false }))

app.use("/post", require("./routes/post.routes"));

// lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port))