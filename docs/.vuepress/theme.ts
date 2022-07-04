import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Mr.Wang",
    url: "http://www.skynetech.cn",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "感谢数年如一坚持的人",
  },

  plugins: {
    
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      echarts: true,
    },
  },
});
