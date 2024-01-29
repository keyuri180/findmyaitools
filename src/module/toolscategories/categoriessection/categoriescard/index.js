import React from 'react'
import Link from 'next/link';
import styles from './categoriescard.module.scss';
const RightIcon = '/assets/icons/right-sm.svg';
export default function Categoriescard() {
  return (
    <div className={styles.categoriescard}>
      <Link href="/copywriting">
      <button>105+</button>
      <div className={styles.textGrid}>
        <span>
            Compelling Content Made Easy - Top AI
            Copywriting Tools
        </span>
        <img src={RightIcon} alt='RightIcon'/>
      </div>
      </Link>
    </div>
  )
}
