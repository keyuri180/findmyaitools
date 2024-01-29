import React from 'react'
import styles from './imageSection.module.scss';
import Categoriescard from '../categoriescard';
export default function ImageSection() {
  return (
    <div className={styles.imageSectionAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className={styles.title}>
        <h5>
            <span>Image</span>
        </h5>
      </div>
      <div className={styles.grid}>
       {
        [...Array(6)].map(()=> {
            return(
                <Categoriescard/>
            )
        })
       }
      </div>
    </div>
  )
}
