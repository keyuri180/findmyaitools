import React from 'react'
import styles from './footer.module.scss';
import Subscribe from './subscribe';
const LinkdinIcon = '/assets/icons/linkdin.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const TwitterIcon = '/assets/icons/twitter.svg';
export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.footerAlignment}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerLinkAlignment}>
                        <div>
                            <h6>Product</h6>
                            <a>Employee database</a>
                            <a>Payroll</a>
                            <a>Absences</a>
                            <a>Time tracking</a>
                            <a>Shift planner</a>
                            <a>Recruiting</a>
                        </div>
                        <div>
                            <h6>Information</h6>
                            <a>FAQ</a>
                            <a>Blog</a>
                            <a>Support</a>
                        </div>
                        <div>
                            <h6>Company</h6>
                            <a>About us</a>
                            <a>Careers</a>
                            <a>Contact us</a>
                            <a>Lift Media</a>
                        </div>
                    </div>
                    <Subscribe/>
                </div>
            </div>
            <div className={styles.copyRightAlignment}>
                <p>Copyright © All Rights Reserved by <span>Techxus Infotech</span> Team.</p>
                <div className={styles.iconsAlignment}>
                    <img src={LinkdinIcon} alt="LinkdinIcon"/>
                    <img src={FacebookIcon} alt="FacebookIcon"/>
                    <img src={TwitterIcon} alt="TwitterIcon"/>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
