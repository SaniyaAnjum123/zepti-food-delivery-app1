import React from 'react'
import Navbar from '../components/Navbar';
import Carousal from '../components/Carousal';
import OfferItems from '../components/Offeritems';

import Foodcategories from '../components/Foodcategories';
import Card from '../components/Card';






import Footer from '../components/Footer';
export default function Home() {
  return (
<div>
      <div> <Navbar /> </div>
      <div> <Carousal /></div>
      <div> <Footer /> </div>
      
            {/* Banner */}
            <div style={{ width: "100%", height: "200px", backgroundImage: "url('/banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>

            {/* Welcome Message */}
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Welcome to Zepti Mart</h1>

            {/* Food Categories */}
            <Foodcategories />
            <OfferItems />
      <div> <Card /> </div>
      
 
    </div>

  )
}
