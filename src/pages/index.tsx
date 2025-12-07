import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/my-book/img/robot_hero.png" alt="Robot Hero" className={styles.heroImage} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={clsx('container', styles.contentSection)}>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <Heading as="h2" className="text--center">
                Your Journey into Physical AI and Humanoid Robotics Starts Here
              </Heading>
              <p className="text--center">
                This textbook provides a comprehensive guide to understanding and building intelligent systems that interact with the physical world. Dive into the fundamentals of robotics, explore advanced AI concepts, and discover the challenges and innovations driving the future of humanoid development. From theoretical foundations to practical applications, prepare to embark on an exciting learning adventure.
              </p>
              <p className="text--center">
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
