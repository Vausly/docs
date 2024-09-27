import CodeTabs from "C:/Users/ASUS/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+b_dv52hvcs3otlzwqdfjf7qnlvya/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "C:/Users/ASUS/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+b_dv52hvcs3otlzwqdfjf7qnlvya/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/ASUS/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+b_dv52hvcs3otlzwqdfjf7qnlvya/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
