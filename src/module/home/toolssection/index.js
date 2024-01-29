import React from 'react'
import styles from './toolssection.module.scss';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
import ViewAll from '@/shared/components/viewAll';
const TextIcon = '/assets/icons/text.svg';
export default function Toolssection() {
  let duration = 100;

    return (
        <div className={styles.toolssectionAlignment}>
            <div className='container'>
                <div className={styles.titleAlignment}>
                    <AnimatedSection animationType="fade-up" duration={600} delay={400}>
                        <h3>Categories  <span>Tools</span></h3>
                    </AnimatedSection>
                    <ViewAll />
                </div>
                <div className={styles.grid}>
                   {
                    [...Array(10)].map((items, index)=> {
                        duration = duration + (index ? 200 : 0);
                        return(
                            <AnimatedSection animationType="fade-up" duration={500} delay={duration} key={index}>
                            <div className={styles.gridItems}>
                            <div className={styles.iconCenter}>
                                <img src={TextIcon} alt='TextIcon'/>
                            </div>
                            <span>Text</span>
                        </div>
                        </AnimatedSection>
                        )
                    })
                   }
                </div>
            </div>
        </div>
    )
}
