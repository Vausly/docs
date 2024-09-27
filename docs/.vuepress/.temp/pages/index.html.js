import comp from "C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/documentations\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"/about\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Documentation\",\"details\":\"This is a page used for documentation.\"},{\"title\":\"Vue-Powered\",\"details\":\"Created using VueJS.\"},{\"title\":\"Content Info\",\"details\":\"Not specified.\"},{\"title\":\"Experiment\",\"details\":\"Yes, experiment.\"},{\"title\":\"Info\",\"details\":\"Visit vausly.com for more info!\"},{\"title\":\"Content\",\"details\":\"I create a most valuable content.\"}],\"footer\":\"Copyright © 2017-present Vausly Media\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
