import React, { useContext } from "react";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ListingContext from "../context/listingContext";

import Header from "../components/Header";
import Gallery from "../components/Gallery";
import SubheaderShop from '../components/SubheaderShop';
import ShopDetails from '../components/ShopDetails';
import ShopContact from '../components/ShopContact';
const Shop = (props) => {

  return (
    <div>
      <Header />
      <Gallery />
      <ShopDetails title={'Crown Bakery'}/>
      <SubheaderShop title={'For You'}
      desc={'Here’s a little treat for you, hurry and claim those vouchers!'}/>
      <SubheaderShop title={'Products'}
      desc={'Pick from our specialties, to be delivered to your doorstep freshly-made.'}/>
      <SubheaderShop title={'Order Via'} desc={''} />
      <ShopContact />
      <SubheaderShop title={'Location'}
      desc={''}/>
      <SubheaderShop title={'Reviews'}
      desc={''}/>
    </div>
  );
};

export default Shop;
