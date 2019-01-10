const express = require("express");
const router = express.Router();

const api_controller = require("../controllers/api.controller");

router.post("/addAPI", async (req, res, next) => {
    try {
        await api_controller.addAPIDetails(req.body);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400);
    }
});

module.exports = router;