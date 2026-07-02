import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Quixote Knowledge Base',
  tagline: 'A technical knowledge garden for builders.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kikhot.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kikhot', // Usually your GitHub org/user name.
  projectName: 'kikhot.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'master', // 部署分支，该分支会发布到 GitHub Page

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // breadcrumbs: true,           // docs 上面的面包屑是否显示（默认为true）
          sidebarPath: './sidebars.ts',
          exclude: ['tutorial-basics/**', 'tutorial-extras/**', 'intro.md'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kikhot/kikhot.github.io/tree/docusaurus',
        },
        blog: {
          showReadingTime: true,
          exclude: ['2019-*.md', '2021-*.mdx', '2021-08-26-welcome/**'],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kikhot/kikhot.github.io/tree/docusaurus',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'Quixote, knowledge base, Java, Redis, Spring, AI Agent, technical blog',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,   // docs 左侧的侧边栏设置为可隐藏
      }
    },
    navbar: {
      title: 'Quixote',
      logo: {
        alt: 'Quixote Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'InterviewSidebar',
          position: 'left',
          label: '知识库',
        },
        {
          type: 'docSidebar',
          sidebarId: 'FrameworkSidebar',
          label: 'Java',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'RedisSidebar',
          label: 'Redis',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'MicroserviceSidebar',
          label: '微服务',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'AiAgentSidebar',
          label: 'AI Agent',
          position: 'left',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {to: '/about', label: '关于', position: 'left'},
        {
          href: 'https://github.com/kikhot/kikhot.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge',
          items: [
            {
              label: '知识库',
              to: '/docs/category/面试题',
            },
            {
              label: 'Redis',
              to: '/docs/category/redis篇',
            },
            {
              label: 'Spring',
              to: '/docs/category/框架篇',
            },
          ],
        },
        {
          title: 'Explore',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: '关于',
              to: '/about',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kikhot/kikhot.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quixote. Built for lifelong technical notes.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
