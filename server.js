require('dotenv').config();
const express = require('express');
const pokemon = require('./models/pokemons');
const Pokemon = require('./models/Pokemon');
const app = express();
const port = 3000;
//connection to mdb
const connect = require("./config/db");
connect();

//views engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//middleware
app.use(express.urlencoded({ extended: false }));

//insert data to db
// Pokemon.insertMany(pokemon)
// .then(pokemons => console.log(pokemons))
// .catch(error => console.error(error))

//routes
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})
app.get("/pokemon", (req, res) => {
    Pokemon.find()
    .then(pokemons => {
        res.render('Index', {pokemons})
    })
    .catch(error => console.log(error))
    // res.render('Index', {pokemons: pokemon})
})
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body)
    .then((pokemonCreated) => {
      console.log(pokemonCreated);
    })
    .catch((error) => console.log(error));
});
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});
app.get("/pokemon/:id", (req, res) => {
    Pokemon.find()
      .then((pokemons) => {
        res.render("Show", { pokemons, id: req.params.id });
      })
      .catch((error) => console.log(error));
    // res.render('Show', {pokemons: pokemon, id: req.params.id})
})




app.listen(port, (req, res) => {
    console.log(`Running at port: ${port}`)
})