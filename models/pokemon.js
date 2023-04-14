const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon