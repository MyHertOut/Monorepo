module.exports = {
  title: "g-ui",
  description: "g-ui 组件库",
  themeConfig: {
    lastUpdated: "最后更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "编辑此网站",
    repo: "https://github.com/guan-chun/g-ui",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present guan-chun",
    },
    nav: [
      { text: "指南", link: "/guide/installation", activeMatch: "/guide/" },
      { text: "组件", link: "/components/icon", activeMatch: "/components/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "安装", link: "/guide/installation" },
            { text: "快速开始", link: "/guide/quickStart" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          link: "/components/button",
        },
      ],
    },
  },
};
