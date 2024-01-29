import React from 'react'
import styles from './cardSection.module.scss';
import Carddesign from './carddesign';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
export default function CardSection() {
  let duration = 100;
  return (
    <div className={styles.cardSectionAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
        <div className={styles.grid}>
          {
            [...Array(4)].map((items, index) => {
              duration = duration + (index ? 200 : 0);
              return (
                <div className={styles.gridItems}>
                    <AnimatedSection animationType="fade-up" duration={500} delay={duration} key={index}>
                    <Carddesign />
                    <Carddesign />
                </AnimatedSection>
                  </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
