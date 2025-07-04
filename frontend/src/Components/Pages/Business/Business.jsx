import React from 'react'
import PageTop from "../../Common/PageTop/PageTop";
import Header from "../../Common/Layout/Header/Header";
import Footer from "../../Common/Layout/Footer/Footer";
import BusinessDetails from './BusinessDetails/BusinessDetails';

const Business = () => {
  return (
    <div>
       <Header />
      <PageTop title={"Business"}/>
      <BusinessDetails/>
      <Footer />
    </div>
  )
}

export default Business
