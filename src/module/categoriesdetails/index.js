import React from 'react'
import Categoriesdetailsbreadcrumbs from './categoriesdetailsbreadcrumbs'
import Categoriesinformation from './categoriesinformation'
import Copycodesection from './copycodesection'
import Categoriestextsection from './categoriestextsection'
import Categoriestools from './categoriestools'

export default function Categoriesdetails() {
  return (
    <div>
      <Categoriesdetailsbreadcrumbs/>
      <Categoriesinformation/>
      <Copycodesection/>
      <Categoriestextsection/>
      <Categoriestools/>
    </div>
  )
}
