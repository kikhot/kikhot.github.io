import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type KnowledgeArea = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

type LatestNote = {
  title: string;
  href: string;
  category: string;
};

const knowledgeAreas: KnowledgeArea[] = [
  {
    title: 'Java 后端',
    description: 'Spring、MyBatis、JVM、事务、并发和工程化实践。',
    href: '/docs/category/框架篇',
    icon: '⌁',
  },
  {
    title: 'Redis & 数据库',
    description: '缓存策略、分布式锁、持久化、MySQL 和高可用体系。',
    href: '/docs/category/redis篇',
    icon: '◇',
  },
  {
    title: '微服务',
    description: '注册中心、限流、熔断、监控和分布式系统基础。',
    href: '/docs/category/微服务篇',
    icon: '▦',
  },
  {
    title: 'AI Agent',
    description: '智能体规则、技能体系、工作流和工具协作方法。',
    href: '/docs/ai-agent/skill/三大编程智能体的RULES和SKILLS规范',
    icon: '✦',
  },
];

const latestNotes: LatestNote[] = [
  {
    title: 'Spring Bean 的生命周期',
    href: '/docs/interview-questions/框架篇/Spring-bean的生命周期',
    category: 'Spring',
  },
  {
    title: 'Redis 分布式锁',
    href: '/docs/interview-questions/redis篇/Redis分布式锁',
    category: 'Redis',
  },
  {
    title: 'CAP 和 BASE 理论',
    href: '/docs/interview-questions/微服务篇/分布式系统理论-CAP和BASE',
    category: 'Microservices',
  },
];

const overviewItems = ['Open notes', 'Knowledge map', 'Latest notes'];
const pageAnchors = ['What is this?', 'How it works', 'Knowledge domains', 'Latest notes', 'Writing system'];

function LeftRail() {
  return (
    <aside className={styles.leftRail} aria-label="Overview">
      <div className={styles.railTitle}>Overview</div>
      {overviewItems.map((item, index) => (
        <a className={index === 0 ? styles.railItemActive : styles.railItem} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
          {item}
        </a>
      ))}
      <div className={styles.railTitle}>Fields</div>
      <Link className={styles.railItem} to="/docs/category/框架篇">Java</Link>
      <Link className={styles.railItem} to="/docs/category/redis篇">Redis</Link>
      <Link className={styles.railItem} to="/docs/category/微服务篇">Microservices</Link>
      <Link className={styles.railItem} to="/docs/ai-agent/skill/三大编程智能体的RULES和SKILLS规范">AI Agent</Link>
    </aside>
  );
}

function RightRail() {
  return (
    <aside className={styles.rightRail} aria-label="On this page">
      <div className={styles.railTitle}>On this page</div>
      {pageAnchors.map((item, index) => (
        <a className={index === 1 ? styles.railItemActive : styles.railItem} href={`#${item.toLowerCase().replaceAll(' ', '-').replace('?', '')}`} key={item}>
          {item}
        </a>
      ))}
    </aside>
  );
}

function Hero() {
  return (
    <section className={styles.hero} id="open-notes">
      <div className={styles.breadcrumb}>Get started / Overview / Quixote</div>
      <div className={styles.sectionMarker}>Overview</div>
      <Heading as="h1" className={styles.heroTitle}>Knowledge for builders</Heading>
      <p className={styles.quote}>“把今天遇到的知识点，变成明天能快速找回的地图。”</p>
      <p className={styles.heroLead}>
        一个面向程序员的个人知识库：按领域沉淀 Java、Redis、微服务、AI Agent 和工具链笔记。
        写给未来的自己，也写给正在寻找答案的人。
      </p>
      <div className={styles.heroActions}>
        <Link className={styles.primaryButton} to="/docs/category/面试题">Start reading</Link>
        <Link className={styles.ghostButton} to="/blog">View blog</Link>
      </div>
    </section>
  );
}

function KnowledgeGrid() {
  return (
    <section className={styles.section} id="knowledge-domains">
      <div className={styles.sectionHeader}>
        <span>Knowledge domains</span>
        <Heading as="h2">How it works</Heading>
      </div>
      <p className={styles.sectionIntro}>
        新知识点优先进入对应领域；稳定知识放在 docs，阶段性思考放在 blog。
      </p>
      <div className={styles.cardGrid}>
        {knowledgeAreas.map((area) => (
          <Link className={styles.areaCard} to={area.href} key={area.title}>
            <span className={styles.cardIcon}>{area.icon}</span>
            <Heading as="h3">{area.title}</Heading>
            <p>{area.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function LatestNotes() {
  return (
    <section className={styles.section} id="latest-notes">
      <div className={styles.sectionHeader}>
        <span>Latest notes</span>
        <Heading as="h2">Recently useful</Heading>
      </div>
      <div className={styles.noteList}>
        {latestNotes.map((note) => (
          <Link className={styles.noteItem} to={note.href} key={note.title}>
            <span>{note.category}</span>
            <strong>{note.title}</strong>
            <small>Open note ↗</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className={styles.section} id="writing-system">
      <div className={styles.sectionHeader}>
        <span>Writing system</span>
        <Heading as="h2">What is this?</Heading>
      </div>
      <div className={styles.callout}>
        <p>
          这里不是收藏夹，而是一个可生长的知识系统。每篇笔记尽量回答一个具体问题：
          它是什么、为什么重要、怎么使用、哪里容易踩坑。
        </p>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Knowledge for builders"
      description="Quixote 的个人知识库与技术博客，沉淀 Java、Redis、微服务、AI Agent 等领域知识。">
      <main className={styles.docsShell}>
        <LeftRail />
        <article className={styles.content}>
          <Hero />
          <KnowledgeGrid />
          <LatestNotes />
          <Philosophy />
        </article>
        <RightRail />
      </main>
    </Layout>
  );
}
