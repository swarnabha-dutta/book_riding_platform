const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();


app.use(cors());
app.use(morgan());


app.get("/", (req, res) => {
    res.send("Hello World");
})


module.exports = app;