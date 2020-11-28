import React, {useState} from "react";

import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import ChatRoom from "../components/ChatRoom";

const Shop = (props) => {
  const {firestore, auth } = props;
  const [opened, setOpened] = useState(true);

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
      <SignIn firestore={firestore} auth={auth} user={props.match.params.name} />
      <SignOut firestore={firestore} auth={auth} user={props.match.params.name} />
      <button onClick = {onClick}>Toggle Chat</button>

      {opened && <ChatRoom firestore={firestore} auth={auth} user={props.match.params.name} />}
    </div>
  );
};

export default Shop;
