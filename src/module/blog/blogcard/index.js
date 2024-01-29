import React from 'react'
import styles from './blogcard.module.scss';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
import ArticlesAndBlogCard from '@/module/home/articlesAndBlogCard';
import Pagination from '@/shared/components/pagination';
export default function Blogcard() {
  let duration = 100;

  return (
    <div className={styles.blogcardAllAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
      <div className={styles.grid}>
        {
          [...Array(9)].map((items, index)=> {
            return(
              <AnimatedSection animationType="fade-up" duration={500} delay={duration} key={index}>
              <ArticlesAndBlogCard/>
              </AnimatedSection>
            )
          })
        }
      </div>
      <Pagination/>
      </div>
    </div>
  )
}
