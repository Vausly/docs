import comp from "C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/wiki.html.vue"
const data = JSON.parse("{\"path\":\"/wiki.html\",\"title\":\"Wiki\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Wiki\",\"description\":\"none.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"wiki.md\"}")
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
