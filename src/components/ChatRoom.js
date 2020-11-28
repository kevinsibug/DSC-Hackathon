import React, { useState, useRef, useContext } from "react";
import firebase from "firebase/app";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ListingContext from "../context/listingContext";

import "../Chat.css";
const ChatRoom = (props) => {
  const { chat, firestore, auth, user } = props;

  const listingContext = useContext(ListingContext);
  const { shop } = listingContext;

  const dummy = useRef();

  const shopRef = firestore.collection("shops").where("name", "==", `${user}`);
  const [shopSelected] = useCollectionData(shopRef, { idField: "id" });

  let chatName;
  if (shopSelected) {
    chatName = shopSelected[0].chatRoomName;
  }

  const messagesRef = firestore.collection(`${chatName}`);
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="chat-header"></div>
      <main className="main-chat">
        {messages &&
          messages.map((msg) => (
            <ChatMessage auth={auth} key={msg.id} message={msg} />
          ))}

        <div ref={dummy}></div>
      </main>

      <form className="form-chat" onSubmit={sendMessage}>
        <input
          className="form-input"
          value={formValue}
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
        />
        <button className="form-button" type="submit">
          🕊
        </button>
      </form>
    </>
  );
};

const ChatMessage = (props) => {
  const { auth } = props;
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img className="img-chat" src={photoURL} />
      <p className="p-message">{text}</p>
    </div>
  );
};

export default ChatRoom;
