export default {
    head: [
        ['link', { rel: 'icon', href: 'https://api.flweb.cn/logos/Yulang/logo.svg' }],
    ],
    title: 'Yulang Project',
    lastUpdated: true,
    description: '可能是最Object化的编译型语言',
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: 'Yulang Project', //站点标题
        logo: "https://api.flweb.cn/logos/Yulang/logo.svg",
        description: '可能是最Object化的编译型语言',
        nav: [
            { text: "主页", link: "/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Yulang-Project" },
        ],
        footer: {
            message: 'Yulang Project',
            copyright: 'Copyright © 2018-2025 <a href="https://www.flweb.cn/">风梨团队</a>'
        },
        lastUpdatedText: "最近更新时间",
        search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索文章",
                  buttonAriaLabel: "搜索文章",
                },
                modal: {
                  noResultsText: "无法找到相关结果",
                  resetButtonTitle: "清除查询条件",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
    },
};
