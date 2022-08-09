import React from 'react';
import './Home.css';
import { Navbar } from './Navbar';
import CarouselMain from './Carousel';
import BigCard from './BigCard';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <CarouselMain />
      <div className="block">
        <BigCard title="Up to 70% off | Clearance store" photo="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"/>
        <BigCard title="Prime Day is back" photo="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-teaser-GW_379x304_deals._SY304_CB631772745_.jpg"/>
        <BigCard title="Pay your credit card bills on Amazon" photo="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"/>
        <BigCard title="Upgrade your home | Amazon Brands & more" photo="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"/>
        <BigCard title="Automotive essentials | Up to 60% off" photo="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"/>
        <BigCard title="Up to 60% off | Car & bike accessories & more" photo="https://m.media-amazon.com/images/I/41Yn1JlUmJL._AC_SY200_.jpg"/>
      </div>
    </div>
  )
}

export default Home