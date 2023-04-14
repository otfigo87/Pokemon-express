const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

app.listen(port, (req, res) => {
    console.log(`Running at port: ${port}`)
})