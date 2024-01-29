import React from 'react'
import styles from './categoriesinformation.module.scss';
const CategoriesinformationImg = '/assets/images/categoriesinformation-img.png';
const ProfileIcon = '/assets/icons/profile-sm.svg';
const LockIcon = '/assets/icons/lock.svg';
const VisitIcon = '/assets/icons/Visit.svg';
const MessageIcon = '/assets/icons/message.svg';
export default function Categoriesinformation() {
    return (
        <div className={styles.categoriesinformationAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
            <div className='container'>
                <div className={styles.grid}>

                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={CategoriesinformationImg} alt="CategoriesinformationImg" />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.profile}>
                            <img src={ProfileIcon} alt='ProfileIcon' />
                            <div>
                                <p>TweetEmote</p>
                                <span>SOCIAL MEDIA ASSISTANT</span>
                            </div>
                        </div>
                        <div className={styles.textStyle}>
                            <p>
                                If you are looking for a way to grow your Twitter account, you might want to check out Tweetmonk. Tweetmonk is a tweet scheduler that helps you create and schedule engaging tweets and threads using AI tools. Here are some of
                                the features that Tweetmonk offers.
                            </p>
                        </div>
                        <div className={styles.twoContentAlignment}>
                            <button>
                                <img src={LockIcon} alt='LockIcon' />
                                Freemium
                            </button>
                            <span>Paid plans start from $8/mo</span>
                        </div>
                        <div className={styles.buttongrid}>
                            <button>
                                <img src={VisitIcon} alt='VisitIcon' />
                                Visit
                            </button>
                            <button>
                                <img src={MessageIcon} alt='MessageIcon' />
                                352
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
