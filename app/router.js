module.exports = (app) => {
  const { router, controller } = app;
  router.post("/login", controller.auth.login);
  router.post("/register", controller.auth.register);
  router.get("/", controller.home.index);
  router.get("/news", controller.news.list);
  router.resources("users", "/users", controller.users);
};
