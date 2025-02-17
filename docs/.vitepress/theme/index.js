import DefaultTheme from "vitepress/theme";
import GIcon from "@guan-chun/components/icon";
import "@guan-chun/themechalk/src/index.scss";
console.log(GIcon);
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(GIcon); // 全局注册 GIcon 组件
  },
};

// The enhanceApp function is called when the app is created, and it receives the app instance as its only argument. You can use it to add global components, mixins, directives, or plugins to the app.