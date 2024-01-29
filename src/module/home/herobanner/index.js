import React from 'react'
import styles from './herobanner.module.scss';
import Searchbar from './searchbar';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
import Link from 'next/link';
const RightIcon = '/assets/icons/right.svg';
const LoopinIcon = '/assets/icons/loopin.svg';
const AdobeIcon = '/assets/icons/Adobe.svg';
const MonicaIcon = '/assets/icons/monica.svg';
const BingIcon = '/assets/icons/bing.svg';
const JasperIcon = '/assets/icons/Jasper.svg';
const ChatgptIcon = '/assets/icons/Chatgpt.svg';
export default function Herobanner() {
    return (
        <div className={styles.herobanner} data-scroll-section data-scroll-direction="horizontal"   >
            <div className='container'>
                <div className={styles.relativeSection}>
                    <div className={styles.first}>
                        <AnimatedSection animationType="fade-up" duration={600} delay={400}>
                            <img src={LoopinIcon} alt='LoopinIcon' />
                            <span>loopin</span>
                        </AnimatedSection>
                    </div>

                    <div className={styles.firstRight}>
                        <AnimatedSection animationType="fade-up" duration={600} delay={400}>
                            <img src={BingIcon} alt='BingIcon' />
                            <span>bing chat</span>
                        </AnimatedSection>
                    </div>
                    <div className={styles.sec}>
                        <AnimatedSection animationType="fade-up" duration={600} delay={450}>
                            <img src={AdobeIcon} alt='AdobeIcon' />
                            <span>Adobe</span>
                        </AnimatedSection>
                    </div>
                    <div className={styles.secRight}>
                        <AnimatedSection animationType="fade-up" duration={600} delay={450}>
                            <img src={MonicaIcon} alt='MonicaIcon' />
                            <span>monica</span>
                        </AnimatedSection>
                    </div>
                    <div className={styles.three}>
                        <AnimatedSection animationType="fade-up" duration={600} delay={500}>
                            <img src={ChatgptIcon} alt='ChatgptIcon' />
                            <span> Chat GPT</span>
                        </AnimatedSection>
                    </div>
                    <div className={styles.threeRight}>
                        <AnimatedSection animationType="fade-up" duration={600} delay={500}>
                            <img src={JasperIcon} alt='JasperIcon' />
                            <span> Jasper</span>
                        </AnimatedSection>
                    </div>
                    <AnimatedSection animationType="fade-up" duration={600} delay={100}>
                        <h1>
                            Discover <span>AI Tools</span> for Your Business!
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection animationType="fade-up" duration={600} delay={150}>
                        <p>
                            Streamline Your Workflow with Our List of AI tools Find Your
                            Perfect Solution.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection animationType="fade-up" duration={600} delay={200}>
                        <div className={styles.serchbarCenterAlignment}>
                            <Searchbar placeholder='Type to search for over 1500+ tools...' />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animationType="fade-up" duration={600} delay={250}>
                        <div className={styles.twoButtonAlignment}>
                            <Link href="/aitoolslist">
                            <button>Explore 1500+ AI Tools
                                <img src={RightIcon} alt='RightIcon' />
                            </button>
                            </Link>
                            <Link href="/toolscategories">
                            <button>View All categories
                                <img src={RightIcon} alt='RightIcon' />
                            </button>
                            </Link>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animationType="fade-up" duration={600} delay={280}>
                        <div className={styles.submitButton}>
                            <button>Submit Your Tool</button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    )
}
