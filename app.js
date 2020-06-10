const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req, res){
    res.send("Página de contato");
});

app.get("/sobre", function(req, res){
    res.send("Sobre a empresa");
});

app.listen(8080);