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
                { text: "语法概览", link: "/language/concepts" },
                { text: "基础", link: "/language/basics" },
                { text: "类型", link: "/language/types" },
                { text: "内存", link: "/language/memory" },
                { text: "类与模块", link: "/language/classes-modules" },
                { text: "设计", link: "/design/" },
            ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Yulang-Project" },
        ],
        footer: {
            message: 'Yulang Project',
            copyright: 'Copyright © 2018-2025 <a href="https://www.flweb.cn/">风梨团队</a>'
        },
        lastUpdatedText: "最近更新时间",
        sidebar: {
            "/language/": [
                {
                    text: "语言语法",
                    items: [
                        { text: "语法概览", link: "/language/concepts" },
                        { text: "基础语法", link: "/language/basics" },
                        { text: "类型系统", link: "/language/types" },
                        { text: "内存与生命周期", link: "/language/memory" },
                        { text: "类与模块", link: "/language/classes-modules" },
                    ],
                },
            ],
            "/design/": [
                {
                    text: "设计",
                    items: [
                        { text: "基本设计", link: "/design/" },
                    ],
                },
            ],
        },
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
