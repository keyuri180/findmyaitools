'use client'
import React, { useEffect } from 'react'
import TopBar from '../topBar'
import Navbar from '../navbar'
import Footer from '../footer'
export default function Wrapper({ children }) {
  useEffect(() => {
    (async function () {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      var scroll = new LocomotiveScroll();
    })();
  }, [])
  return (
    <div>
      <TopBar />
      <Navbar />
      <div data-scroll>
        {children}
      </div>
      <Footer />
    </div>
  )
}
