// app/controller/users.js
const Controller = require("egg").Controller;
class UploadController extends Controller {
  async upload() {
    const { ctx } = this;

    try {
      const result = await ctx.validateUpload({
        maxSize: 2 * 1024 * 1024, // 2MB
        allowedExtensions: [".jpg", ".jpeg", ".png", ".gif"],
        allowedMimeTypes: ["image/jpeg", "image/png", "image/gif"],
        destDir: path.join(this.app.config.baseDir, "app/public/uploads"),
      });

      ctx.body = {
        success: true,
        url: `/public/uploads/${result.filename}`,
        mimeType: result.mimeType,
        size: result.size,
      };
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        success: false,
        message: err.message,
      };
    }
  }
}

module.exports = UploadController;
