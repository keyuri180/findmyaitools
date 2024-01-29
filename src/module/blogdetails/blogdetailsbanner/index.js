import React from 'react'
import styles from './blogdetailsbanner.module.scss';
const BlogdetailsImage = '/assets/images/blog-details.png';
export default function Blogdetailsbanner() {
  return (
    <div className={styles.blogdetailsbanner} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <img src={BlogdetailsImage} alt="BlogdetailsImage"/>
    </div>
  )
}
