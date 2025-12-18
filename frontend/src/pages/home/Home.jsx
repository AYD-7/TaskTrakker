import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './HomeComponents/Hero'
import Services from './HomeComponents/Services'
import WhyChooseUs from './HomeComponents/WhyChooseUs'
import RegisterNow from './HomeComponents/RegisterNow'

const Home = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <RegisterNow />

    </div>
  )
}

export default Home