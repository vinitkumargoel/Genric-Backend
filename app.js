const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./config.json");
const api_route = require("./routes/api.route");
const admin_route = require("./routes/admin.route");


const app = express();
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: '50mb'
}));

mongoose.connect(config.dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.get("/", (req, res, next) => {
    res.sendStatus(200);
});

app.use("/admin", admin_route);
app.use("/api", api_route);


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database: Connected");
});

app.listen(config.port, () => {
    console.log(`Server Started on ${config.port}`);
});