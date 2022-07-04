import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "吕大爷的传达室",
  description: "vuepress-theme-hope站点",

  base: "/jp/",

  theme,
});
