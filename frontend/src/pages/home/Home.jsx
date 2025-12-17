import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './HomeComponents/Hero'
import Services from './HomeComponents/Services'

const Home = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}

export default Home