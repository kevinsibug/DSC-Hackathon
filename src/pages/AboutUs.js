import React from "react";
import Footer from '../components/Footer';
import Fabanner from "../components/Fabanner";
import Header from "../components/Header";
import LeftSubheader from '../components/LeftSubheader';
import AboutBanner from "../components/AboutBanner";

const AboutUs = (props) => {


  return (
    <div>
       <Header />
       <Fabanner />
       <LeftSubheader title={'About Us'}
              desc={'Established this year, 2020, Tindajuan aims to help in supporting starting shops as well as small scale businesses to grow their audience as well as introduce them to the world of E-commerce. Through the vision of small businesses bridged to every Juan, we hope to reach every business we can and offer them a platform to represent themselves in this new normal. '}/>
       <AboutBanner />
       <LeftSubheader />
      <Footer />
    </div>
  );
};

export default AboutUs;