import React from 'react'
import styles from './copycodesection.module.scss';
const FeaturedIcon = '/assets/icons/featured.svg';
const CopyIcon = '/assets/icons/copy.svg';
export default function Copycodesection() {
  return (
    <div className={styles.copycodesectionAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
        <div className={styles.box}>
            <div className={styles.leftContnet}>
                <img src={FeaturedIcon} alt='FeaturedIcon'/>
                <span>Maximize Your Reach: Unleashing the Potential of Promote Your Tool</span>
            </div>
            <button>
                <img src={CopyIcon} alt='CopyIcon'/>
            Copy Embed Code
            </button>
        </div>
      </div>
    </div>
  )
}
