import React from 'react'
import styles from './aitoolslist.module.scss';
import Filter from '@/shared/components/filter';
import Toolsdropdown from '@/shared/components/toolsdropdown';
import Carddesign from '@/module/home/cardSection/carddesign';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
import Pagination from '@/shared/components/pagination';
export default function Aitoolslist() {
    let duration = 100;

    return (
        <div className={styles.aitoolslistAllContnetAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
            <div className='container'>
                <div className={styles.aitoolslistHeaderAlignment}>
                    <Filter />
                    <h4>
                        AI Tools <span>List</span>
                    </h4>
                    <Toolsdropdown />
                </div>
                <div className={styles.grid}>
                    {
                        [...Array(12)].map((items, index) => {
                            duration = duration + (index ? 200 : 0);
                            return (
                                <AnimatedSection animationType="fade-up" duration={500} delay={duration} key={index}>
                                    <Carddesign />
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
