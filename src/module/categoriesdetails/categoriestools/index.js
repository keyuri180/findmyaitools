'use client'
import React from 'react'
import styles from './categoriestools.module.scss';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
import Carddesign from '@/module/home/cardSection/carddesign';
export default function Categoriestools() {
  let duration = 100;

  return (
    <div className={styles.categoriestoolsallContnetAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
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
