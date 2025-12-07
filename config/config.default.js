exports.keys = "askjddjsfkkxaksjdfk";
// 添加 view 配置项
exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks",
  },
};
exports.multipart = {
  fileSize: "10mb",
  whitelist: [".jpg", ".png", ".pdf", "docx", "xlsx"],
};
// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: "https://hacker-news.firebaseio.com/v0",
};
exports.middleware = ["robot"];
// robot's configurations
exports.robot = {
  ua: [/Baiduspider/i],
};
exports.sequelize = {
  dialect: "postgres", // support: mysql, mariadb, postgres, mssql
  database: "egg",
  host: "47.108.224.51",
  port: 5432,
  username: "admin",
  password: "shiq*qk73hj41#",
  // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
  // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
  // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
  // more sequelize options
};
