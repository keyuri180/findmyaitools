import React from 'react'
import styles from './companyImage.module.scss';
const Icon1 = '/assets/icons/1.svg';
const Icon2 = '/assets/icons/2.svg';
const Icon3 = '/assets/icons/3.svg';
const Icon4 = '/assets/icons/4.svg';
const Icon5 = '/assets/icons/5.svg';
export default function CompanyImage() {
  return (
    <div className={styles.companyImage} data-scroll data-scroll-section data-scroll-direction="horizontal">
        <div className='container-md'>
            <div className={styles.imageAlignment}>
                <img src={Icon1} alt='Icon1'/>
                <img src={Icon2} alt='Icon2'/>
                <img src={Icon3} alt='Icon3'/>
                <img src={Icon4} alt='Icon4'/>
                <img src={Icon5} alt='Icon5'/>
            </div>
        </div>
    </div>
  )
}
