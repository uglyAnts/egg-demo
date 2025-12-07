const fs = require("fs").promises;
const os = require("os");
const path = require("path");
const FileType = require("file-type");

module.exports = {
  async validateUpload(options = {}) {
    const { ctx } = this;
    const {
      maxSize = 5 * 1024 * 1024,
      allowedExtensions = [],
      allowedMimeTypes = [],
      destDir = path.join(ctx.app.config.baseDir, "app/public/uploads"),
    } = options;

    // 1. 获取上传流
    const stream = await ctx.getFileStream();

    // 2. 文件大小初步校验（注意：fileSize 可能不可靠，最终以实际为准）
    if (stream.fileSize > maxSize) {
      throw new Error(`文件大小不能超过 ${maxSize / 1024 / 1024}MB`);
    }

    // 3. 扩展名校验
    const originalFilename = stream.filename;
    const ext = path.extname(originalFilename).toLowerCase();
    if (allowedExtensions.length && !allowedExtensions.includes(ext)) {
      throw new Error(`不支持的文件扩展名：${ext}`);
    }

    // 4. 创建临时文件路径
    const tempFilePath = path.join(
      os.tmpdir(),
      `upload_${Date.now()}_${Math.random().toString(36).slice(2)}`
    );

    try {
      // 5. 将整个文件流写入临时文件
      const writeStream = fs.createWriteStream(tempFilePath);
      await stream.pipe(writeStream);
      const stat = await fs.stat(tempFilePath);
      if (stat.size > maxSize) {
        throw new Error(`文件大小不能超过 ${maxSize / 1024 / 1024}MB`);
      }

      // 6. 读取临时文件头部，检测真实 MIME
      const buffer = await fs.readFile(tempFilePath, { length: 4100 });
      const fileTypeResult = await FileType.fromBuffer(buffer);
      if (!fileTypeResult) {
        throw new Error("无法识别文件类型");
      }

      const realMimeType = fileTypeResult.mime;
      if (allowedMimeTypes.length && !allowedMimeTypes.includes(realMimeType)) {
        throw new Error(`不支持的文件类型：${realMimeType}`);
      }

      // 7. 确保扩展名与真实类型一致（可选）
      const safeExt = "." + fileTypeResult.ext;
      const finalFilename = `${path.parse(originalFilename).name}${safeExt}`;
      const finalPath = path.join(destDir, finalFilename);

      // 确保目标目录存在
      await fs.mkdir(destDir, { recursive: true });

      // 8. 移动临时文件到正式位置
      await fs.rename(tempFilePath, finalPath);

      return {
        filepath: finalPath,
        filename: finalFilename,
        mimeType: realMimeType,
        size: stat.size,
      };
    } catch (err) {
      // 清理临时文件
      try {
        await fs.unlink(tempFilePath);
      } catch (e) {
        ctx.app.logger.warn("Failed to delete temp file:", e);
      }
      throw err;
    }
  },
};
