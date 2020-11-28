import React from "react";

const SignOut = (props) => {
  const { auth } = props;
  return (
    auth.currentUser && (
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </button>
    )
  );
};

export default SignOut;
