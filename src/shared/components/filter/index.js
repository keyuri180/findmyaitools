import React from 'react'
import styles from './filter.module.scss';
import Filtermodal from '../filtermodal';
const FilterIcon = '/assets/icons/filter.svg';
export default function Filter() {
    return (
        <>
        <div className={styles.filterbutton}>
            <button>     
                <img src={FilterIcon} alt='FilterIcon' />
                <span>Filter</span></button>
        </div>
        {/* <Filtermodal/> */}
        </>
    )
}
