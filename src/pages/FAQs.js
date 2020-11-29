import React from "react";
import Footer from '../components/Footer';
import Fabanner from "../components/Fabanner";
import Header from "../components/Header";
import LeftSubheader from '../components/LeftSubheader';
import FaqSubheader from '../components/FaqSubheader';

const Faqs = (props) => {


  return (
    <div>
       <Header />
       <Fabanner />
       <FaqSubheader title={'Frequently Asked Questions'}
              desc={'How do I set up my shop? '}
              sec={'More details on how to set up your own shop can be done through signing up in the website.'}/>
       <div>
       <h5 className='faqheader-desc'>Can I post a review even without making transactions with the shop?</h5>
       </div>
      <Footer />
    </div>
  );
};

export default Faqs;