import React from "react";

import firebase from "firebase/app";

const SignIn = (props) => {
  const {auth} = props;

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button className = "google-button" onClick={signInWithGoogle}> Sign in With Google</button>;
};

export default SignIn;
