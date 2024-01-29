import React from 'react'
import Herobanner from './herobanner'
import CompanyImage from './companyImage'
import CardSection from './cardSection'
import Testimonial from './testimonial'
import CategoriesTools from './categoriesTools'
import GetInTouch from './getInTouch'
import Article from './article'
import ArticlesAndBlogCard from './articlesAndBlogCard'
import Blog from './blog'
import Faqsection from './faqsection'
import Toolssection from './toolssection'

export default function HomePage() {
  return (
    <div>
      <Herobanner/>
      <CompanyImage/>
      <CardSection/>
      <Testimonial/>
      <Toolssection/>
      <CategoriesTools/>
      <GetInTouch/>
      <Article/>
      <Blog/>
      <Faqsection/>
    </div>
  )
}
