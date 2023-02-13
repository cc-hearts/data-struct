import { DefaultTheme, defineConfig } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  { text: "面经", link: "/experience/"},
  { text: "算法", link: "/algorithm/"},
];

export default defineConfig({
  title: "interview/code",
  description: "life",
  lang: "cn-ZH",
  base: "/",
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    nav,
  },
});