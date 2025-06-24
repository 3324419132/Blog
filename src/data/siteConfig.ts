// 网站基本配置
export const siteConfig = {
  // 网站基本信息
  title: '数字花园',
  description: '代码植根于思想，生活盛开如繁花',
  author: '大豆橙',
  
  // 社交媒体链接
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    zhihu: 'https://zhihu.com/people/yourusername',
    juejin: 'https://juejin.cn/user/yourusername',
  },
  
  // 导航菜单
  navItems: [
    { text: '首页', link: '/' },
    { text: '博客', link: '/blog' },
    { text: '项目', link: '/projects' },
    { text: '关于', link: '/about' },
  ],
  
  // 博客分类
  blogCategories: [
    '前端开发',
    '后端技术',
    '设计模式',
    '工程化',
    '学习笔记',
    '思考随笔'
  ],
  
  // 项目分类
  projectCategories: [
    'Web应用',
    '移动应用',
    '工具库',
    '开源项目',
    '设计作品'
  ],
  
  // 首页展示设置
  homeSettings: {
    // 首页最多展示的博客文章数量
    maxBlogPosts: 3,
    // 首页最多展示的项目数量
    maxProjects: 2,
    // 是否在首页显示最新文章
    showLatestPosts: true,
    // 是否在首页显示精选项目
    showFeaturedProjects: true
  }
};

// 当前状态数据
export const currentStatus = {
  reading: "《深入理解TypeScript》",
  project: "AI驱动的内容管理系统",
  thinking: "如何将机器学习应用于前端开发"
};

// 博客文章排序函数
export function sortBlogPosts(posts: any[]) {
  return posts.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
}

// 获取精选内容
export function getFeaturedContent(blogPosts: any[], projects: any[]) {
  // 获取最新的博客文章
  const latestPosts = sortBlogPosts(blogPosts).slice(0, 2);
  
  // 标记为精选的项目
  const featuredProjects = projects
    .filter(project => project.data.featured)
    .slice(0, 1);
  
  // 如果没有标记为精选的项目，则使用最新的项目
  const projectsToShow = featuredProjects.length > 0 
    ? featuredProjects 
    : projects.slice(0, 1);
  
  return [...latestPosts, ...projectsToShow];
} 