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
                  { title: '类型推论', path: '/ts/base/type-inference' },
                  { title: '联合类型', path: '/ts/base/union-types' },
                  { title: '对象的类型—接口', path: '/ts/base/interfaces' },
                  { title: '数组的类型', path: '/ts/base/array' },
                  { title: '函數的类型', path: '/ts/base/typeFun' },
                  { title: '类型的断言', path: '/ts/base/typeAssertion' },
                  { title: '声明文件', path: '/ts/base/declaration-files' },
                  { title: '内置对象', path: '/ts/base/built-in-objects' }
              ]
          },
          {
              title: '进阶',
              collapsable: false,
              children: [
                  { title: '类型别名', path: '/ts/advanced/type-aliases' },
                  { title: '字符串字面量类型', path: '/ts/advanced/string-literal-types' },
                  { title: '元组 ', path: '/ts/advanced/tuple' }
              ]
          }
      ]
    }
  }
}