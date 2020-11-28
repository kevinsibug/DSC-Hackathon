import React, {useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import ChatRoom from "../components/ChatRoom";


const Shop = (props) => {
  const {firestore, auth } = props;
  const [opened, setOpened] = useState(true);

  const [user] = useAuthState(auth);

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
    </div>
  );
};

export default Shop;
