const express = require("express")

const cors = require("cors")

const app = express();

const port = 8000;

const sequelize = require("./config/sequelize.config")

app.use(express.json())

app.listen(port, () => {
    console.log(`listening on ${port} for requests to respond to`); 
});