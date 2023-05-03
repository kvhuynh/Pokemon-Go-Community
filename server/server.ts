export {}

const { testRouter } = require('./routes/user.routes')


const express = require('express')

const cors = require("cors")

const app = express();

const port = 8000;

const sequelize = require('./config/sequelize.config')


app.use(express.json())

app.use(cors())
// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


app.use('/api/test', testRouter)


app.listen(port, () => {
    console.log(`listening on ${port} for requests to respond to`); 
});

sequelize.sync();