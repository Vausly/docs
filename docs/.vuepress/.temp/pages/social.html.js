import comp from "C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/social.html.vue"
const data = JSON.parse("{\"path\":\"/social.html\",\"title\":\"Social\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Social\",\"description\":\"Social media\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"social.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
