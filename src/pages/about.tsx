import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="关于"
      description="关于 Quixote Knowledge Base 的记录方式与内容定位。">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroEyebrow}>About this knowledge base</div>
          <Heading as="h1" className={styles.heroTitle}>
            记录、连接、复用。
            <span> 把日常遇到的专业知识变成长期资产。</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            这个站点用于沉淀不同领域的知识点：Java 后端、数据库、Redis、微服务、
            AI Agent、工具链，以及未来任何值得反复查阅的专业主题。
          </p>
        </section>
        <section className={styles.section}>
          <div className={styles.cardGrid}>
            <article className={styles.areaCard}>
              <span className={styles.cardMeta}>01</span>
              <Heading as="h3">面向问题</Heading>
              <p>每篇文章尽量围绕一个具体问题展开，方便复习、面试和实战查阅。</p>
            </article>
            <article className={styles.areaCard}>
              <span className={styles.cardMeta}>02</span>
              <Heading as="h3">领域归档</Heading>
              <p>新增知识点优先放入对应领域，让碎片内容逐渐形成可导航的知识地图。</p>
            </article>
            <article className={styles.areaCard}>
              <span className={styles.cardMeta}>03</span>
              <Heading as="h3">持续更新</Heading>
              <p>博客记录阶段性思考，文档沉淀稳定知识，两者共同支撑长期学习。</p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
