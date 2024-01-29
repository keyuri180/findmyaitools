import React from 'react'
import styles from './categoriessection.module.scss';
import Categoriescard from './categoriescard';
import ImageSection from './imageSection';
import Codesection from './codesection';
import Audiosection from './audiosection';
import Videosection from './videosection';
import Threedsection from './threedsection';
import Businesssection from './businesssection';
import Othersection from './othersection';
export default function Categoriessection() {
  return (
    <div className={styles.categoriessectionAllContnetAlignment} data-scroll data-scroll-section data-scroll-direction="horizontal">
      <div className='container'>
        <div className={styles.title}>
            <h4><span>Text</span></h4>
        </div>
        <div className={styles.grid}>
           {
            [...Array(6)].map(()=> {
                return(
                    <Categoriescard/>
                )
            })
           }
        </div>
        <ImageSection/>
        <Codesection/>
        <Audiosection/>
        <Videosection/>
        <Threedsection/>
        <Businesssection/>
        <Othersection/>
      </div>
    </div>
  )
}
