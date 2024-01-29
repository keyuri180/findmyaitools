import React from 'react'
import styles from './categoriesTools.module.scss';
import ViewAll from '@/shared/components/viewAll';
import Carddesign from '../cardSection/carddesign';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
export default function CategoriesTools() {
  let duration = 100;

  return (
    <div className={styles.categoriesToolsAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
        <div className={styles.titleAlignment}>
          <AnimatedSection animationType="fade-up" duration={600} delay={400}>
            <h3>Popular  <span>Tools</span></h3>
          </AnimatedSection>
          <ViewAll />
        </div>
        <div className={styles.grid}>
          {
            [...Array(4)].map((items, index) => {
              duration = duration + (index ? 200 : 0);
              return (
                <AnimatedSection animationType="fade-up" duration={500} delay={duration} key={index}>
                  <Carddesign />
                </AnimatedSection>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
