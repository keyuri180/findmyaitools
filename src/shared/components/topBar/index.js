import React from 'react'
import styles from './topBar.module.scss';
export default function TopBar() {
    return (
        <div className={styles.topbar}>
            <div className='container'>
                <p>
                    {`🚀 Hurry! New Year, New Savings – Get 25% Off On All AI Tools . Use Code: NEWYEAR24 👉 Gr`}<span>{`ab Yours Before It Expires!`}</span>
                </p>
            </div>
        </div>
    )
}
