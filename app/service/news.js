const Service = require("egg").Service;

class NewsService extends Service {
  async list(page = 1) {
    // // read config
    // const { serverUrl, pageSize } = this.config.news;

    // // use build-in http client to GET hacker-news api
    // const { data: idList } = await this.ctx.curl(
    //   `${serverUrl}/topstories.json`,
    //   {
    //     data: {
    //       orderBy: '"$key"',
    //       startAt: `"${pageSize * (page - 1)}"`,
    //       endAt: `"${pageSize * page - 1}"`,
    //     },
    //     dataType: "json",
    //   }
    // );
    // const newsList = await Promise.all(
    //   Object.keys(idList).map((key) => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: "json" });
    //   })
    // );
    const newsList = [
      {
        title: "测试",
        url: "www.baidu.com",
        time: "2024-02-21 21:24:12",
      },
      {
        title: "测试",
        url: "www.baidu.com",
        time: "2024-02-21 21:24:12",
      },
      {
        title: "测试",
        url: "www.baidu.com",
        time: "2024-02-21 21:24:12",
      },
      {
        title: "测试",
        url: "www.baidu.com",
        time: "2024-02-21 21:24:12",
      },
      {
        title: "测试",
        url: "www.baidu.com",
        time: "2024-02-21 21:24:12",
      },
    ];
    return newsList;
  }
}

module.exports = NewsService;
