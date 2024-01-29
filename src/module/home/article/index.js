import React from 'react'
import styles from './article.module.scss';
import ViewAll from '@/shared/components/viewAll';
import ArticlesAndBlogCard from '../articlesAndBlogCard';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
export default function Article() {
  let duration = 100;

  return (
    <div className={styles.articleAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
          <AnimatedSection animationType="fade-up" duration={600} delay={400}>
        <div className={styles.headerAlignment}>
            <h3>Categories <span>Tools</span></h3>
          <ViewAll />
        </div>
          </AnimatedSection>
        <div className={styles.grid}>
          {
            [...Array(3)].map((items, index) => {
              duration = duration + (index ? 200 : 0);

              return (
                <AnimatedSection animationType="fade-up" duration={500} delay={duration} key={index}>
                  <ArticlesAndBlogCard />
                </AnimatedSection>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
