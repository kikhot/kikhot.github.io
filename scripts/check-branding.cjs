const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function assertContains(file, expected) {
  const content = read(file);
  if (!content.includes(expected)) {
    throw new Error(`${file} should contain: ${expected}`);
  }
}

function assertNotContains(file, unexpected) {
  const content = read(file);
  if (content.includes(unexpected)) {
    throw new Error(`${file} should not contain: ${unexpected}`);
  }
}

function assertNoMdxPlaceholders(file) {
  const content = read(file);
  const match = content.match(/<[a-zA-Z][^>\s]*>/);
  if (match) {
    throw new Error(`${file} should not contain raw MDX placeholder: ${match[0]}`);
  }
}

assertContains('docusaurus.config.ts', "title: 'Quixote Knowledge Base'");
assertContains('docusaurus.config.ts', "defaultLocale: 'zh-Hans'");
assertContains('docusaurus.config.ts', "defaultMode: 'dark'");
assertContains('docusaurus.config.ts', "label: '知识库'");
assertContains('docusaurus.config.ts', "label: 'Java'");
assertContains('docusaurus.config.ts', "label: 'Redis'");
assertContains('docusaurus.config.ts', "label: 'AI Agent'");
assertContains('docusaurus.config.ts', "label: '博客'");
assertContains('docusaurus.config.ts', "label: '关于'");
assertContains('docusaurus.config.ts', "href: 'https://github.com/kikhot/kikhot.github.io'");
assertContains('docusaurus.config.ts', "sidebarId: 'AiAgentSidebar'");
assertContains('docusaurus.config.ts', "sidebarId: 'FrameworkSidebar'");
assertContains('docusaurus.config.ts', "sidebarId: 'RedisSidebar'");
assertContains('docusaurus.config.ts', "sidebarId: 'MicroserviceSidebar'");
assertContains('docusaurus.config.ts', "exclude: ['tutorial-basics/**', 'tutorial-extras/**', 'intro.md']");
assertContains('docusaurus.config.ts', "exclude: ['2019-*.md', '2021-*.mdx', '2021-08-26-welcome/**']");
assertNotContains('docusaurus.config.ts', 'facebook/docusaurus');
assertNotContains('docusaurus.config.ts', 'My Project, Inc.');

assertContains('src/pages/index.tsx', 'Knowledge for builders');
assertContains('src/pages/index.tsx', 'Java 后端');
assertContains('src/pages/index.tsx', 'AI Agent');
assertContains('src/pages/index.tsx', 'Latest notes');
assertContains('src/pages/index.tsx', 'Overview');
assertContains('src/pages/index.tsx', 'On this page');
assertNotContains('src/pages/index.tsx', 'Docusaurus Tutorial');

assertContains('src/pages/about.tsx', '记录、连接、复用');
assertContains('src/css/custom.css', '--kikhot-bg');
assertContains('src/css/custom.css', '--claw-accent');
assertContains('src/css/custom.css', '#ff6a3d');
assertContains('src/pages/index.module.css', '.hero');
assertContains('src/pages/index.module.css', '.docsShell');
assertContains('src/pages/index.module.css', '.rightRail');

assertContains('src/theme/TOC/index.js', 'Outline');
assertContains('src/theme/TOC/index.js', 'isOutlineCollapsed');
assertContains('src/theme/TOC/index.js', 'toggle outline');
assertContains('src/theme/TOC/index.js', 'handleAnchorClick');
assertContains('src/theme/TOC/index.js', 'getAnchorScrollOffset');
assertContains('src/theme/TOC/index.js', 'window.scrollTo');
assertContains('src/theme/TOC/index.js', 'aria-expanded');
assertContains('src/theme/TOC/index.js', 'collapsedGroups');
assertContains('src/css/custom.css', 'scroll-margin-top');
assertContains('src/theme/TOC/styles.module.css', 'scrollbar-width: thin');
assertContains('src/theme/TOC/styles.module.css', 'outlineCollapsed');
assertNotContains('src/theme/TOC/index.js', 'Hide outline');
assertNotContains('src/theme/TOC/index.js', 'Show outline');

assertContains('sidebars.ts', 'AiAgentSidebar');
assertContains('sidebars.ts', "dirName: 'ai-agent'");
assertContains('sidebars.ts', 'FrameworkSidebar');
assertContains('sidebars.ts', "dirName: 'interview-questions/框架篇'");
assertContains('sidebars.ts', 'RedisSidebar');
assertContains('sidebars.ts', "dirName: 'interview-questions/redis篇'");
assertContains('sidebars.ts', 'MicroserviceSidebar');
assertContains('sidebars.ts', "dirName: 'interview-questions/微服务篇'");
assertNotContains('sidebars.ts', "dirName: '.'");

assertNotContains('blog/authors.yml', 'yangshun');
assertNotContains('blog/authors.yml', 'slorber');
assertContains('blog/authors.yml', 'Quixote:');

assertNoMdxPlaceholders('docs/ai-agent/skill/三大编程智能体的RULES和SKILLS规范.md');

console.log('Branding checks passed.');
