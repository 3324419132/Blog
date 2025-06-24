// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links';

// 自定义rehype插件，为代码块添加复制按钮
function rehypeCodeBlockCopy() {
  return (tree) => {
    // 我们使用src/components/CodeBlock.astro中的客户端JavaScript来添加复制按钮
    // 该插件只是一个标记，表明我们启用了代码块复制功能
    return tree;
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://digital-garden.example.com',
  integrations: [
    mdx({
      // 配置MDX/Markdown处理
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }], // 为外部链接添加target和rel属性
        rehypeCodeBlockCopy, // 添加代码块复制功能
      ],
    }), 
    sitemap(),
    tailwind(),
  ],
});