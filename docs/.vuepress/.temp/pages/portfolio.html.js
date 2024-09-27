import comp from "C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"Portfolio\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Portfolio\",\"description\":\"none.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"portfolio.md\"}")
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
