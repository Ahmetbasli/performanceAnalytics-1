const BaseService = require("./base-service");
const WebsiteModel = require("../models/website");

class WebsiteService extends BaseService {
  model = WebsiteModel;

  async findOneByUrl(Url) {
    return this.model.findOne({ url: Url });
  }

  async addNewAnalyticsData(website, data) {
    console.dir(this);
    website.analyticsDatas.push(data);
    await website.save();
  }
}

module.exports = new WebsiteService();
