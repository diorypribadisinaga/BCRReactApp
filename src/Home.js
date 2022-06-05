import React from 'react'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import MulaiSewa from './components/MulaiSewa'
import Navigasi from './components/Navbar'
import Rental from './components/Rental'
import Tanya from './components/Tanya'
import Testimonial from './components/Testimonial'
import WhyUs from './components/WhyUs'

export default function Home() {
  return (
    <div>
        <Navigasi/>
        <Jumbotron/>
        <Rental/>
        <WhyUs/>
        <Testimonial/>
        <MulaiSewa/>
        <Tanya/>
        <Footer/>
    </div>
  )
}
