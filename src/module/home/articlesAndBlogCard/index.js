import React from 'react'
import styles from './articlesAndBlogCard.module.scss';
const BlogImage = '/assets/images/blog-image.png';
const CalenderIcon = '/assets/icons/calender.svg';
const LineIcon = '/assets/icons/line.svg';
import Link from 'next/link';
const EyeIcon = '/assets/icons/eye.svg';
export default function ArticlesAndBlogCard() {
    return (
        <div className={styles.articlesAndBlogCard}>
            <Link href="/blogdetails">
            <div className={styles.image}>
                <img src={BlogImage} alt='BlogImage' />
            </div>
            <div className={styles.detailsAlignment}>
                <h5>Top 10 AI Tools For Email Marketing
                    To Boost</h5>
                <div className={styles.line}></div>
                <div className={styles.lastContnetAlignment}>
                    <div className={styles.icontext}>
                        <img src={CalenderIcon} alt='CalenderIcon'/>
                        <span>25/05/2023</span>
                    </div>
                    <img src={LineIcon} alt='LineIcon'/>
                    <div className={styles.icontext}>
                        <img src={EyeIcon} alt='EyeIcon'/>
                        <span>8K Viewers</span>
                    </div>
                </div>
                <div className={styles.button}>
                    <button>Read More</button>
                </div>
            </div>
            </Link>
        </div>
    )
}
