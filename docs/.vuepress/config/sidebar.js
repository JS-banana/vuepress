// 此文件没有用到，仅用于测试和侧边栏数据格式的参考。

module.exports = {
  // 侧边栏
  '/01.前端/': [
    {
      title: 'JavaScript',
      collapsable: false, //是否可折叠，可选的，默认true
      children: [
        ['01.React/01.测试', '测试'],
        ['02.Vue/01.测试', '测试'],
        ['03.第三方库/01.通用库', '通用库'],
        ['04.JavaScript/01.类型检测', '类型检测'],
        ['05.Webpack/01.webpack优化系列一', 'webpack优化系列一'],
      ],
    },
  ],
  '/02.学习/': [
    {
      title: '学习',
      collapsable: false,
      sidebarDepth: 3, // 深度，可选的, 默认值是 1
      children: [
        [
          '02.学习/01.面试/',
          {
            title: '面试内容',
            collapsable: true,
            children: [['01.准备内容', '基本语法']],
          },
        ],
        ['02.学习/02.markdown', '基本语法'],
        ['03.学习/03.推荐书籍', '前端必读'],
        ['02.学习/04.学习路线', '推荐网站'],
        // [
        //   '05.性能优化/01.优化方向',
        //   {
        //     title: '优化方向',
        //     collapsable: true,
        //   },
        // ],
      ],
    },
  ],
  '/03.技术/': [
    {
      title: '技术',
      collapsable: false, //是否可折叠，可选的，默认true
      sidebarDepth: 2, // 深度，可选的, 默认值是 1
      children: [
        ['01.Git/01.常用命令', '常用命令'], // 同 {path: '01.Git使用手册', title: 'Git使用文档'}
        ['02.Github/01.加速', '加速'], //
        ['03.Linux/01.常用命令', '常用命令'], //
        ['04.Nginx/01.搭建web服务', '搭建web服务'], //
        ['05.Windows/01.环境变量', '环境变量'],
        ['06.Cloud&CDN/01.又拍云', '又拍云'],
        ['07.Npm/01.包体积', '包体积'],
      ],
    },
  ],
  // '/04.其他/': [
  //   {
  //     title: '学习',
  //     collapsable: false,
  //     children: [
  //       ['01.学习/01.学习网站','学习网站'],
  //       ['01.学习/02.学习效率低，忘性很大怎么办？','学习效率低，忘性很大怎么办？'],
  //     ]
  //   },
  //   {
  //     title: '学习笔记',
  //     collapsable: false,
  //     children: [
  //       ['02.学习笔记/01.小程序笔记','小程序笔记'],
  //     ]
  //   },
  //   {
  //     title: '面试',
  //     collapsable: false, //是否可折叠，可选的，默认true
  //     children: [
  //       ['03.面试/01.面试问题集锦','面试问题集锦'],
  //     ]
  //   },
  //   ['01.在线工具','在线工具'],
  //   ['02.友情链接','友情链接'],
  // ],
  // '/': [ // 在最后定义，在没有单独设置侧边栏时统一使用这个侧边栏
  //   '',
  //   'git',
  //   'github',
  //   'markdown',
  //   'study',
  //   'interview'
  //   // '/',
  //   // {
  //   //   title: 'foo', // 标题，必要的
  //   //   path: '/foo/', // 标题的路径，可选的, 应该是一个绝对路径
  //   //   collapsable: false, // 是否可折叠，可选的，默认true
  //   //   sidebarDepth: 1,    // 深度，可选的, 默认值是 1
  //   //   children: [
  //   //     ['foo/', '子页1'],
  //   //     'foo/1',
  //   //     'foo/2',
  //   //   ]
  //   // },
  //   // {
  //   //   title: 'bar',
  //   //   children: [
  //   //     ['bar/', '子页2'],
  //   //     'bar/3',
  //   //     'bar/4',
  //   //   ]
  //   // }
  // ],
};
