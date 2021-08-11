interface Menu  {
  key: string | number
  title: string,
  children?: {
    title: string,
    children: {
      key: string | number
      title: string,
    }[]
  }[]
}

export const menuList: Menu[] = [
  {
    key: 'idnex',
    title: '首页'
  },
  {
    key: 'blog',
    title: '博客分类'
  },
  {
    key: 'interview',
    title: '面试题汇总'
  },
  {
    key: 'skin',
    title: '换肤',
    children: [
      {
        title: '英雄联盟',
        children: [
          {
            key: 'LeeSin',
            title: '李青'
          },
          {
            key: 'Vayne',
            title: '薇恩'
          },
          {
            key: 'Yasuo',
            title: '亚索'
          }
        ]
      },
      {
        title: '动漫人物',
        children: [
          {
            key: 'Zoro',
            title: '索隆'
          },
          {
            key: 'Obito',
            title: '带土'
          }
        ]
      },
    ]
  }
]
