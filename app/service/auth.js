const Service = require("egg").Service;
class AuthService extends Service {
  async login(accountName, accountPassword) {
    const account = await this.ctx.model.Account.findByPk(accountName)
    if (account) {
      this.ctx.logger.info(account.accountPassword, accountPassword);
      if (account.accountPassword == accountPassword) {
        return {
          code: '0',
          accountName,
          data: {
            name: '小石'
          }
        }
      } else {
        return {
          code: '0x111',
          msg: '密码错误'
        }
      }
    } else {
      return {
        code: '0x12342',
        msg: '用户不存在'
      }
    }
  }
}
module.exports = AuthService