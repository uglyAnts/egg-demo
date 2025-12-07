const Controller = require('egg').Controller
class AuthController extends Controller {
  async login() {
    const { accountName, accountPassword } = this.ctx.request.body
    const body = await this.ctx.service.auth.login(accountName, accountPassword)
    this.ctx.logger.info(body, 'xxxxxxx');
    this.ctx.body = body
  }
  register() {
    const { accountName, accountPassword } = this.ctx.request.body
    const account = this.ctx.model.Account.create({
      accountName, accountPassword
    })
    this.ctx.body = account;
  }
}
module.exports = AuthController