'use client'
import React from 'react'
import styles from './blogslider.module.scss';
import Slider from "react-slick";
export default function Blogslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={styles.blogsliderAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
        <div className={styles.textGrid}>
          <div className={styles.line}></div>
          <span>{`Blog’s`}</span>
          <div className={styles.line}></div>
        </div>
        <Slider {...settings}>
          <div className={styles.sliderBox}></div>
          <div className={styles.sliderBox}></div>
          <div className={styles.sliderBox}></div>

        </Slider>
      </div>
    </div>
  )
}
