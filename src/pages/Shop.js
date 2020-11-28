import React, { useContext } from "react";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ListingContext from "../context/listingContext";

import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Vouchers from "../components/Vouchers";
import SubheaderShop from '../components/SubheaderShop';
import SubheaderShopB from '../components/SubheaderShopB';
import ShopDetails from '../components/ShopDetails';
import ShopContact from '../components/ShopContact';
import ShopBanner from '../components/ShopBanner';
import ShopLocation from '../components/ShopLocation';
const Shop = (props) => {

  return (
    <div>
      <Header />
      <Gallery />
      <ShopDetails title={'Crown Bakery'}/>
      <SubheaderShop title={'Shop Vouchers'}
      desc={'Here’s a little treat, check out these vouchers.'}/>
      <Vouchers />
      <SubheaderShop title={'Products'}
      desc={'Pick from our specialties, to be delivered to your doorstep freshly-made.'}/>
      <ShopBanner title={'On the dot delivery'}
      desc={'Craving for something and want it delivered in an instant? Crown Bakery guarantees a 60 minute delivery if you are within 10km the proximity of the shop! Enjoy the treats and wonders of a filipino-style cuisine delivered to you in a flash.'}/>
      <SubheaderShopB title={'Order Via'} desc={''} />
      <ShopContact />
      <SubheaderShopB title={'Location'}desc={''}/>
      <ShopLocation />
      <SubheaderShop title={'Reviews'}desc={''}/>
    </div>
  );
};

export default Shop;
