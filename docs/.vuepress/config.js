import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Vausly Experiment',
  description: 'Documentation page of Vausly Project.',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', 'about', '/wiki', '/portfolio', 'social', 'post' ],
  }),

  bundler: viteBundler(),
})

/*
// navigations proposal
module.exports = {
  title: 'Vausly Experiment',
  description: 'This is a page used for documentation.',
  
  
  themeConfig: {
    sidebar: [
      {
        title: 'Wiki',
        collapse: false,

        children: [
          {
            title: 'Test',
            collapse: false,
            sidebarDepth: 1,
            children: [
              'subpage1',
              'subpage2',
              'subpage3'
            ]
          },
          {
            //subcategory
          }
        ]
      }
    ]
}

}
*/
