import React from 'react'
import styles from './categoriesdetailsbreadcrumbs.module.scss';
const RightIcon = '/assets/icons/breadcrumbs -right.svg';
export default function Categoriesdetailsbreadcrumbs() {
  return (
    <div className={styles.categoriesdetailsbreadcrumbs} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
        <div className={styles.alignment}>
            <span>AI Tools List</span>
            <img src={RightIcon} alt="RightIcon"/>
            <span>Social Media Assistant</span>
            <img src={RightIcon} alt="RightIcon"/>
            <span>TweetEmote</span>
        </div>
      </div>
    </div>
  )
}
