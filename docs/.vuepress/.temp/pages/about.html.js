import comp from "C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"About\",\"description\":\"About me\"},\"headers\":[{\"level\":2,\"title\":\"Intro\",\"slug\":\"intro\",\"link\":\"#intro\",\"children\":[]},{\"level\":2,\"title\":\"My Projects\",\"slug\":\"my-projects\",\"link\":\"#my-projects\",\"children\":[]},{\"level\":2,\"title\":\"When did I start creating digital content?\",\"slug\":\"when-did-i-start-creating-digital-content\",\"link\":\"#when-did-i-start-creating-digital-content\",\"children\":[]},{\"level\":2,\"title\":\"When did you start make a​ video content?\",\"slug\":\"when-did-you-start-make-a​-video-content\",\"link\":\"#when-did-you-start-make-a​-video-content\",\"children\":[]},{\"level\":2,\"title\":\"Which platforms do you create content on?\",\"slug\":\"which-platforms-do-you-create-content-on\",\"link\":\"#which-platforms-do-you-create-content-on\",\"children\":[]},{\"level\":2,\"title\":\"Where you live now?\",\"slug\":\"where-you-live-now\",\"link\":\"#where-you-live-now\",\"children\":[]},{\"level\":2,\"title\":\"My Hobby\",\"slug\":\"my-hobby\",\"link\":\"#my-hobby\",\"children\":[]},{\"level\":2,\"title\":\"Other Information\",\"slug\":\"other-information\",\"link\":\"#other-information\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about.md\"}")
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
