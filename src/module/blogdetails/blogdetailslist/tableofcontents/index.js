import React from 'react'
import styles from './tableofcontents.module.scss';
export default function Tableofcontents() {
  return (
    <div className={styles.tableofcontents}>
      <h6>Table Of Contents</h6>
      <div className={styles.allListAlignment}>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Unspam.email</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Seventh Sense</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>SmartWriter.AI</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Instantly.ai</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Postcards</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Convertkit</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>EmailOctopus</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Unlayer</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Zeta Email</span>
        </div>
        <div className={styles.textGrid}>
            <div className={styles.icon}></div>
            <span>Optimove</span>
        </div>
      </div>
    </div>
  )
}
