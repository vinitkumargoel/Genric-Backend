const express = require("express");

const apis = require("./test.json");

const app = express();

const getAPIConfig = (api_path) => {
    for (const i of apis) {
        if (i.api_path == api_path) {
            return i
        }
    }
    return null
}

app.get("/", (req, res, next) => {
    res.sendStatus(200);
});
app.get("/api/*", (req, res, next) => {
    let api_config = getAPIConfig(req.url);
    console.log(api_config);
    if (api_config) {
        res.sendStatus(api_config.response_code);
    } else {
        res.sendStatus(500);
    }
});

app.listen(4000, () => {
    console.log("Server Started");
});