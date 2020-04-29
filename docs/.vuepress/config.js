module.exports = {
  base: '/lin-blog/',
  title: 'ji_lin',
  description: 'Vuepress blog demo',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
  	// 你的GitHub仓库
    repo: 'https://github.com/liangjilin/lin-blog',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
  	nav: [
  		{ text: 'Home', link: '/' },
  		{ text: 'TypeScript', link: '/ts/' }
  	],
    sidebar: {
        '/ts/': [
          {
              title: '简介',
              collapsable: false,
              path: '/ts/'
          },
          {
              title: '基础',
              collapsable: false,
              // path: '/base/',
              children: [
                  { title: '原始数据类型', path: '/ts/base/primitive-data-types' },
                  { title: '任意值', path: '/ts/base/any' },
                  { title: '类型推论', path: '/ts/base/type-inference' }
              ]
          }
      ]
    }
  }
}