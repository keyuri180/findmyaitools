import React from 'react'
import styles from './blogbanner.module.scss';
import Searchbar from '@/module/home/herobanner/searchbar';
export default function Blogbanner() {
  return (
    <div className={styles.blogbannerAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
        <div className={styles.line}></div>
        <div className={styles.textSectionAlignment}>
            <h1>
            {`Discover New Blog’s Here`}
            </h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum been the industry's.
            </p>
            <div className={styles.lastContnet}>
                <div className={styles.blogsearch}>
                    <Searchbar placeholder='Search...' />
                </div>
                <div className={styles.buttonalignment}>
                    <button>All</button>
                    <button>Health</button>
                    <button>AI Tools</button>
                    <button>Marketing</button>
                    <button>Real Estate</button>
                    <button>Finance</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
