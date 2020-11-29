import React from "react";

const SignOut = (props) => {
  const { auth } = props;
  return (
    auth.currentUser && (
      <button className = "google-button-out"
        onClick={() => {
          auth.signOut();
          props.history.push('/');
        }}
      >
        Sign Out
      </button>
    )
  );
};

export default SignOut;
