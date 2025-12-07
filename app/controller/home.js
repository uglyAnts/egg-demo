const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      code: "0",
      data: "Hello world",
      msg: "请求成功",
    };
  }
}

module.exports = HomeController;
