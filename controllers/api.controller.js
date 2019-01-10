const apis = require("../test.json");
const api_config_schema = require("../schemas/api.config.schema");

const getAPIConfig = async (api_path) => api_config_schema.findOne({api_path:api_path}).exec();

const addAPIDetails = async (data) => await new api_config_schema(data).save();

module.exports = {
    getAPIConfig: getAPIConfig,
    addAPIDetails: addAPIDetails
};