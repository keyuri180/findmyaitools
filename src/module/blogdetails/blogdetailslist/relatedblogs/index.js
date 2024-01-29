import React from 'react'
import styles from './relatedblogs.module.scss';
export default function Relatedblogs() {
    return (
        <div className={styles.relatedblogs}>
            <h6>Related {`blog’s`}</h6>
            <div className={styles.allListalignment}>
                <div className={styles.text}>
                    <p>
                        {`Zero Trust Meets AI Here’s Why It’s A New Frontier...`}
                    </p>
                </div>
                <div className={styles.text}>
                    <p>
                        {`Discover the Top 10 AI Tools for Transcription to Enhance...`}
                    </p>
                </div>
                <div className={styles.text}>
                    <p>
                        {`Unleash Your Creativity with the Top 10 AI Tools...`}
                    </p>
                </div>
                <div className={styles.text}>
                    <p>
                        {`What is Threads All your questions about Instagram's...`}
                    </p>
                </div>
            </div>
        </div>
    )
}
