import React from 'react'
import Header from '../../Common/Layout/Header/Header'
import HomeCarsoual from './HomeCarsoual/HomeCarsoual'
import Footer from '../../Common/Layout/Footer/Footer'
import Aboutus from '../About/Aboutus/Aboutus'
import HomeService from './HomeService/HomeService'
import AboutService from '../About/AboutService/AboutService'
import HowWeOperate from '../About/HowWeOperate/HowWeOperate'
import HomeServices from './HomeServices/HomeServices'

const Home = () => {
  return (
    <div>
     
      <Header/>
      <HomeCarsoual/>
      <HomeService/>

      <Aboutus/>
      <HomeServices/>
      <AboutService/>
      <HowWeOperate/>
      <Footer/>

    </div>
  )
}

export default Home
