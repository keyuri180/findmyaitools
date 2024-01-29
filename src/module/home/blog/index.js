import React from 'react'
import styles from './blog.module.scss';
import ArticlesAndBlogCard from '../articlesAndBlogCard';
import ViewAll from '@/shared/components/viewAll';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
export default function Blog() {
  let duration = 100;
  return (
    <div className={styles.blogAllAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
    <div className='container'>
    <AnimatedSection animationType="fade-up" duration={600} delay={400}>
      <div className={styles.headerAlignment}>
      <h3><span>{`Blog’s`}</span></h3>
          <ViewAll/>
      </div>
      </AnimatedSection>
      <div className={styles.grid}>
        {
          [...Array(3)].map((items, index)=> {
            return(
              <AnimatedSection animationType="fade-up" duration={500} delay={duration} key={index}>
              <ArticlesAndBlogCard/>
              </AnimatedSection>
            )
          })
        }
      </div>
    </div>
  </div>
  )
}
