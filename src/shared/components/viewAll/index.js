import React from 'react'
import styles from './viewAll.module.scss';
const WhiteIcon = '/assets/icons/right-white.svg';
export default function ViewAll() {
  return (
    <div className={styles.viewAllAlignment}>
      <span>View All</span>
      <img src={WhiteIcon} alt='WhiteIcon'/>
    </div>
  )
}
