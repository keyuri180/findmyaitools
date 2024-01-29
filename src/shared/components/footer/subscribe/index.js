import React from 'react'
import styles from './subscribe.module.scss';
const RightIcon = '/assets/icons/right-fill.svg';
export default function Subscribe() {
  return (
    <div className={styles.subscribeBox}>
      <h6>Subscribe</h6>
      <div className={styles.input}>
        <input type='text' placeholder='Email address'/>
        <div className={styles.sendButton}>
            <img src={RightIcon} alt='RightIcon'/>
        </div>
      </div>
      <p>
        Stay up to date with our latest AI Tools List and New AI Tools by subscribing to our newsletter. Simply enter your email address below and click 'subscribe' 
        to get started.
      </p>
    </div>
  )
}
