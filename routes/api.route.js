const express = require("express");
const router = express.Router();

const api_controller = require("../controllers/api.controller");

router.get("*", async (req, res, next) => {
    let api_config = await api_controller.getAPIConfig(req.originalUrl);    
    console.log(api_config);
    
    if (api_config) {
        if (api_config.json) {
            res.status(api_config.response_code).json(api_config.json);
        } else {
            res.sendStatus(api_config.response_code);
        }
    } else {
        res.sendStatus(500);
    }
});


module.exports = router;