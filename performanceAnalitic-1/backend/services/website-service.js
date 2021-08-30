const BaseService = require("./base-service");
const WebsiteModel = require("../models/website");

class WebsiteService extends BaseService {
  model = WebsiteModel;

  async findOneByOrigin(origin) {
    return this.model.findOne({ origin });
  }

  async addNewAnalyticsData(website, data) {
    console.dir(this);
    website.analyticsDatas.push(data);
    await website.save();
  }
}

module.exports = new WebsiteService();
