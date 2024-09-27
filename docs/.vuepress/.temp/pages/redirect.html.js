import comp from "C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/redirect.html.vue"
const data = JSON.parse("{\"path\":\"/redirect.html\",\"title\":\"Social Media\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Social Media\",\"description\":\"Description of this page\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"redirect.md\"}")
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
