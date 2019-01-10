const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiConfigSchema = new Schema({
    "api_path": {
        type: String,
        required: true,
        unique: true
    },
    "response_code": {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("apiConfig", apiConfigSchema, "apiConfig");