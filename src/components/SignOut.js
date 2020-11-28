import React from "react";

const SignOut = (props) => {
  const { auth } = props;
  return (
    auth.currentUser && (
      <button
        onClick={() => {
          auth.signOut();
          // document.reload();
        }}
      >
        Sign Out
      </button>
    )
  );
};

export default SignOut;
