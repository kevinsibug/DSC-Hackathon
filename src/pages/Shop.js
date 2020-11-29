import React, {useState,useRef} from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import ChatRoom from "../components/ChatRoom";
import Rating from "../components/Rating";


import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Vouchers from "../components/Vouchers";
import SubheaderShop from '../components/SubheaderShop';
import SubheaderShopB from '../components/SubheaderShopB';
import ShopDetails from '../components/ShopDetails';
import ShopContact from '../components/ShopContact';
import ShopBanner from '../components/ShopBanner';
import ShopLocation from '../components/ShopLocation';
import ShopReviews from '../components/ShopReviews';
import Menu from '../components/Menu';

const Shop = (props) => {
  const {firestore, auth } = props;
  const [opened, setOpened] = useState(true);

  const [user] = useAuthState(auth);

  const shopRef = firestore.collection("shops").where("name", "==", `${props.match.params.name}`);
  const [shopSelected] = useCollectionData(shopRef, { idField: "id" });

  const onClick = () => {
    if (opened) {
      setOpened(false)
    } else {
      setOpened(true)
    }

    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }

  }

  const dummy = useRef();
  return (
    
    <div>
      <Header />
      <SignOut {...props} firestore={firestore} auth={auth} user={props.match.params.name}  />
      <Gallery />
      <ShopDetails title={'Juan\'s Paradise'}/>
      <SubheaderShop title={'Shop Vouchers'}
      desc={'Here’s a little treat, check out these vouchers.'}/>
      {/* <Vouchers /> */}
      {user ? <Vouchers /> : <div className = "warning-signin"> <p className = "warning-message">Sign In with Google to View Vouchers</p><SignIn firestore={firestore} auth={auth} user={props.match.params.name}/></div> }
      <SubheaderShop title={'Products'}
      desc={'Pick from our specialties, to be delivered to your doorstep freshly-made.'}/>
      
      <div className = "menu"> 
      <Menu />
      <Menu />
      <Menu />
      </div>

      <ShopBanner title={'On the dot delivery'}
      desc={'Craving for something and want it delivered in an instant? Crown Bakery guarantees a 60 minute delivery if you are within 10km the proximity of the shop! Enjoy the treats and wonders of a filipino-style cuisine delivered to you in a flash.'}/>
      <SubheaderShopB title={'Order Via'} desc={''} />
      <ShopContact />
      <SubheaderShopB title={'Location'}desc={''}/>
      <ShopLocation />
      <SubheaderShopB title={'Reviews'}desc={''}/>
      <ShopReviews />

          



      <img className = "chat-trigger" style = {{cursor: 'pointer'}}src = {`/images/Chat.png`} onClick = {onClick}></img>
      { user ? opened && 
      <div ref={dummy} className = "chat-room"> <ChatRoom firestore={firestore} auth={auth} user={props.match.params.name} /> </div>
      : 
      <div className = "warning-signin"> 
      <p className = "warning-message">Sign In with Google to View Shop's Chat</p>
      <SignIn firestore={firestore} auth={auth} user={props.match.params.name}/>
      </div>}

      {/* {shopSelected &&
              shopSelected.map((value, index) => (
                <Rating key={index} details={value} />
              ))} */}

    </div>
  );
};

export default Shop;
