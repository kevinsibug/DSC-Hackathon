import React, {useState} from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import ChatRoom from "../components/ChatRoom";
import Rating from "../components/Rating";

const Shop = (props) => {
  const {firestore, auth } = props;
  const [opened, setOpened] = useState(true);

  const [user] = useAuthState(auth);

  const shopRef = firestore.collection("shops").where("name", "==", `${props.match.params.name}`);
  const [shopSelected] = useCollectionData(shopRef, { idField: "id" });
  console.log(shopSelected)
  const onClick = () => {
    if (opened) {
      setOpened(false)
    } else {
      setOpened(true)
    }
  }
  return (
    <div>
      <Header /> 
      <SignOut firestore={firestore} auth={auth} user={props.match.params.name} />
      <img style = {{cursor: 'pointer'}}src = {`/images/Chat.png`} onClick = {onClick}></img>
      { user ? opened && <ChatRoom firestore={firestore} auth={auth} user={props.match.params.name} /> : <SignIn firestore={firestore} auth={auth} user={props.match.params.name}/>}

      {shopSelected &&
              shopSelected.map((value, index) => (
                <Rating key={index} details={value} />
              ))}
    </div>
  );
};

export default Shop;
