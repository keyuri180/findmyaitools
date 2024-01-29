import React from 'react'
import styles from './pagination.module.scss';
const PaginationArrow = '/assets/icons/pagination-arrow.svg';
export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <div className={styles.arrow}>
        <img src={PaginationArrow} alt='PaginationArrow'/>
      </div>
      <div className={styles.count}>1</div>
      <div className={styles.count}>2</div>
      <div className={styles.count}>3</div>
      <div className={styles.count}>4</div>
      <div className={styles.count}>5</div>
      <div className={styles.arrow}>
        <img src={PaginationArrow} alt='PaginationArrow'/>
      </div>
    </div>
  )
}
