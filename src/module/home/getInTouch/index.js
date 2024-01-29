import React from 'react'
import styles from './getInTouch.module.scss';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
export default function GetInTouch() {
    return (
        <div className={styles.getInTouchAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
            <AnimatedSection animationType="fade-up" duration={600} delay={400}>
            <div className='container'>
                <div className={styles.box}>
                    <h4>Get In Touch</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    </p>
                    <p>
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    </p>
                    <p>
                        it to make a type specimen book.
                    </p>
                    <div className={styles.btnCenteralignment}>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
            </AnimatedSection>
        </div>
    )
}
