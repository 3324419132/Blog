# Astro 入门套件：博客

```sh
npm create astro@latest -- --template blog
```

[![在 StackBlitz 中打开](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![使用 CodeSandbox 打开](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![在 GitHub Codespaces 中打开](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **经验丰富的宇航员？** 删除此文件。祝您使用愉快！

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

特点：

- ✅ 极简风格（让它成为您自己的风格！）
- ✅ 100/100 Lighthouse 性能
- ✅ SEO 友好，带有规范 URL 和 OpenGraph 数据
- ✅ 网站地图支持
- ✅ RSS Feed 支持
- ✅ Markdown 和 MDX 支持

## 🚀 项目结构

在您的 Astro 项目中，您将看到以下文件夹和文件：

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro 会在 `src/pages/` 目录中查找 `.astro` 或 `.md` 文件。每个页面都会根据其文件名暴露为一个路由。

`src/components/` 没有什么特别之处，但我们喜欢将任何 Astro/React/Vue/Svelte/Preact 组件放在这里。

`src/content/` 目录包含相关 Markdown 和 MDX 文档的"集合"。使用 `getCollection()` 从 `src/content/blog/` 中检索文章，并使用可选的模式对前置元数据进行类型检查。查看 [Astro 的内容集合文档](https://docs.astro.build/en/guides/content-collections/) 了解更多信息。

任何静态资产，如图片，都可以放在 `public/` 目录中。

## 🧞 命令

所有命令都从项目根目录的终端运行：

| 命令                      | 操作                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                        |
| `npm run dev`             | 在 `localhost:4321` 启动本地开发服务器          |
| `npm run build`           | 将您的生产站点构建到 `./dist/`                  |
| `npm run preview`         | 在部署前本地预览您的构建                        |
| `npm run astro ...`       | 运行 CLI 命令，如 `astro add`、`astro check`    |
| `npm run astro -- --help` | 获取使用 Astro CLI 的帮助                       |

## 👀 想了解更多？

查看[我们的文档](https://docs.astro.build)或加入我们的 [Discord 服务器](https://astro.build/chat)。

## 致谢

此主题基于可爱的 [Bear Blog](https://github.com/HermanMartinus/bearblog/)。
