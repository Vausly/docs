export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About"} }],
  ["/about_id.html", { loader: () => import(/* webpackChunkName: "about_id.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/about_id.html.js"), meta: {"title":"About"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"Portfolio"} }],
  ["/post.html", { loader: () => import(/* webpackChunkName: "post.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/post.html.js"), meta: {"title":"Vausly Post"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/social.html", { loader: () => import(/* webpackChunkName: "social.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/social.html.js"), meta: {"title":"Social"} }],
  ["/wiki.html", { loader: () => import(/* webpackChunkName: "wiki.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/wiki.html.js"), meta: {"title":"Wiki"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/ASUS/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
