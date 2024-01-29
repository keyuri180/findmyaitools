import React from 'react'
import styles from './searchbar.module.scss';

const SearchIcon  = '/assets/icons/search.svg';
export default function Searchbar({placeholder}) {
  return (
    <div className={styles.searchbar}>
      <input type='text' placeholder={placeholder} />
    <div className={styles.searchIcon}>
        <img src={SearchIcon} alt='SearchIcon'/>
    </div>
    </div>
  )
}
