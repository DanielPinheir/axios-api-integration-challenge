const express = require("express");
const { detailCompany } = require("./controllers/companies");

const rotas = express();

rotas.get("/companies", detailCompany);

module.exports = rotas;
