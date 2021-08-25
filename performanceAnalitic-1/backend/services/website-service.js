const BaseService = require("./base-service");
const WebsiteModel = require("../models/website");

class WebsiteService extends BaseService {
  model = WebsiteModel;
}

module.exports = new WebsiteService();
