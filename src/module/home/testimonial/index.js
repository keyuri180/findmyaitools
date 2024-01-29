'use client'
import React from 'react'
import styles from './testimonial.module.scss';
import Slider from "react-slick";
import { Space_Mono } from 'next/font/google';
import AnimatedSection from '@/shared/components/Animation/AnimatedSection';
const ProfileImage = '/assets/images/profile-image.svg';
const LeftArrow = '/assets/icons/slider-left.svg';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={styles.rightArrow}
        onClick={onClick}
      >
        <img src={LeftArrow} alt='LeftArrow'/>
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.leftArrow}
        onClick={onClick}
      >
        <img src={LeftArrow} alt='LeftArrow'/>
        </div>
    );
  }
  
export default function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={styles.testimonialAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
            <div className='container'>
                <div className={styles.title}>
                <AnimatedSection animationType="fade-up" duration={600} delay={400}>
                    <h2>Testimonial</h2>
                    </AnimatedSection>
                </div>
                <div className={styles.sliderDesign}>
                    <Slider {...settings}>
                        {
                            [...Array(7)].map((e, i) => {
                                return (
                                    <div className={styles.card} key={i}>
                                        <div className={styles.profile}>
                                            <img src={ProfileImage} alt="ProfileImage" />
                                            <div>
                                                <p>
                                                    Jane Smith
                                                </p>
                                                <span>Freelance Designer</span>
                                            </div>
                                        </div>
                                        <div className={styles.details}>
                                            <h5>impressed with the uptime</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing
                                                and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since the
                                                1500s, when an unknown printer took a galley of
                                                type and scrambled.
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                    </Slider>
                </div>
            </div>
        </div>
    )
}
