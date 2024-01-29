import React from 'react'
import styles from './categoriestextsection.module.scss';
const ThumbIcon = '/assets/icons/thumb.svg';
const ThumbIconSec = '/assets/icons/thumb-sec.svg';
export default function Categoriestextsection() {
    return (
        <div className={styles.categoriestextsectionAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
            <div className='container'>
                <div className={styles.textStyle}>
                    <p>
                        - An intelligent editor that helps you write better tweets with AI suggestions, rewriting, hashtag generator, and more.
                    </p>
                    <p>
                        - A thread maker that helps you turn any article, video, or idea into a captivating thread with AI hooks and summaries.
                    </p>
                    <p>
                        - A scheduler that helps you plan and publish your tweets and threads at the best times for your audience.
                    </p>
                    <p>- An analytics dashboard that helps you track and measure your Twitter performance, engagement, and growth.</p>
                    <span>
                        Tweetmonk is trusted by over 3000 users, including businesses and individuals such as Autodesk India, Microsoft, and Bosch India. You can sign
                        up for Tweetmonk with your Twitter account and choose a plan that suits your needs. Tweetmonk is a smart and simple way to automate and
                        grow your Twitter account with AI-powered tweet scheduling.
                    </span>
                </div>
                <div className={styles.textGridCard}>
                    <div className={styles.items}>
                        <div className={styles.centerAlignment}>
                            <img src={ThumbIcon} alt='ThumbIcon' />
                        </div>
                        <h6>Pros</h6>
                        <ul>
                            <li>
                                It helps you create and schedule engaging tweets and
                                threads with the help of AI tools
                            </li>
                            <li>
                                It offers various features such as image editing, hashtag
                                generator, article to tweets, video tweets, polls, etc.
                            </li>
                            <li>
                                It helps you grow your Twitter reach and audience by
                                providing analytics and insights
                            </li>
                        </ul>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.items}>
                        <div className={styles.centerAlignment}>
                            <img src={ThumbIconSec} alt='ThumbIconSec' />
                        </div>
                        <h6>Cons</h6>
                        <ul>
                            <li>
                                It helps you create and schedule engaging tweets and
                                threads with the help of AI tools
                            </li>
                            <li>
                                It offers various features such as image editing, hashtag
                                generator, article to tweets, video tweets, polls, etc.
                            </li>
                            <li>
                                It helps you grow your Twitter reach and audience by
                                providing analytics and insights
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
