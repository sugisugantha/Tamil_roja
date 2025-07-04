import React, { Fragment } from 'react'
import Header from '../../Common/Layout/Header/Header'

import Footer from '../../Common/Layout/Footer/Footer'
import PageTop from '../../Common/PageTop/PageTop'
import ContactRef from './ContactRef/ContactRef'
import ContactMap from './ContactMap/ContactMap'

const Contact = () => {
  return (
    <Fragment>
        <Header/>
      <PageTop title={"Contact"}/>
     <ContactRef/>
     <ContactMap/>
       
        <Footer/>
    </Fragment>
  )
}

export default Contact