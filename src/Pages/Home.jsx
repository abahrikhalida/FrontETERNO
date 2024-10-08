import React from 'react'
import Hero from '../Components/Hero/Hero'
import Favcollection from '../Components/Favcollection/Favcollection'
import Productscollection from '../Components/Productscollection/Productscollection'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
     <Hero/>
     <Favcollection/>
     <Productscollection/>
     <Footer/>
    </div>
  )
}

export default Home
