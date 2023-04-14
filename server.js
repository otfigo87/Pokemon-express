const express = require('express');
const pokemon = require('./models/pokemon');
const app = express();
const port = 3000;
//views engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//routes
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})
app.get("/pokemon", (req, res) => {
    res.render('Index', {pokemons: pokemon})
})
app.get("/pokemon/:id", (req, res) => {
    res.render('Show', {pokemons: pokemon, id: req.params.id})
})



app.listen(port, (req, res) => {
    console.log(`Running at port: ${port}`)
})