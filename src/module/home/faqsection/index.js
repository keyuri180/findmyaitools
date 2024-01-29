'use client'
import React, { useState } from 'react'
import styles from './faqsection.module.scss';
import classNames from 'classnames';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
const PlusIcon = '/assets/icons/plus.svg';
export default function Faqsection() {
    const [toogle, setToogle] = useState(false);
    return (
        <div className={styles.faqsectionAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
            <div className='container'>
                <div className={styles.title}>
                    <AnimatedSection animationType="fade-up" duration={600} delay={400}>
                        <h3>Frequently <span>Asked</span> Questions</h3>
                    </AnimatedSection>
                </div>
                <div className={styles.boxcenterAlignment}>
                    <div className={classNames(styles.mainBox, toogle ? styles.show : '')}>
                        <div className={styles.header}>
                            <div className={styles.text}>
                                <h5>01</h5>
                                <h5>What are the benefits of using the FindMyAiTool?</h5>
                            </div>
                            <div className={classNames(styles.icon, toogle ? styles.iconsColorChange : '')} onClick={() => setToogle(!toogle)}>
                                <img src={PlusIcon} alt="PlusIcon" />
                            </div>
                        </div>
                        <div className={classNames(styles.body, toogle ? styles.showData : styles.hideData)}>
                            <div className={styles.bodyTextGrid}>
                                <div></div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                    of type and scrambled it to make a type specimen book. It has survived not only five but
                                    also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.mainBox)}>
                        <div className={styles.header}>
                            <div className={styles.text}>
                                <h5>02</h5>
                                <h5>What are the benefits of using the FindMyAiTool?</h5>
                            </div>
                            <div className={classNames(styles.icon)} >
                                <img src={PlusIcon} alt="PlusIcon" />
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.mainBox)}>
                        <div className={styles.header}>
                            <div className={styles.text}>
                                <h5>03</h5>
                                <h5>What are the benefits of using the FindMyAiTool?</h5>
                            </div>
                            <div className={classNames(styles.icon)} >
                                <img src={PlusIcon} alt="PlusIcon" />
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.mainBox)}>
                        <div className={styles.header}>
                            <div className={styles.text}>
                                <h5>04</h5>
                                <h5>What are some popular AI tools and resources listed in the FindMyAiTool?</h5>
                            </div>
                            <div className={classNames(styles.icon)} >
                                <img src={PlusIcon} alt="PlusIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

