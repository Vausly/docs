import comp from "C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/post.html.vue"
const data = JSON.parse("{\"path\":\"/post.html\",\"title\":\"Vausly Post\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Vausly Post\",\"description\":\"Get most comprehensive content about internet, technology, history, game, Minecraft, my projects, or anything else.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"post.md\"}")
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
