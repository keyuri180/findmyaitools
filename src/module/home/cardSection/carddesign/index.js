import React from 'react'
import styles from './carddesign.module.scss';
const CardImage = '/assets/images/card-image.png';
const ProfileIcon = '/assets/icons/profile.svg';
export default function Carddesign() {
  return (
    <div className={styles.homeCardDesign}>
      <div className={styles.cardImage}>
        <img src={CardImage} alt="CardImage"/>
        <div className={styles.featured}>
            <button>Featured</button>
        </div>
      </div>
      <div className={styles.details}>
        <img src={ProfileIcon} alt='ProfileIcon'/>
        <div>
            <p>TweetEmote</p>
            <span>Social Media Assistant</span>
        </div>
      </div>
    </div>
  )
}
