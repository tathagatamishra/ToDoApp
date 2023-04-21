require("dotenv").config()
const express = require('express');
const cors = require('cors');

const route = require('./router/route');

require("./db/connection")

const app = express();


app.use(cors());
app.use(express.json());
app.use(route);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Run on ${PORT} ...`)
});