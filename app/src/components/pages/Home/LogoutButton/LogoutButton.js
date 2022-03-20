import React from "react";
import { useGoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LogoutButton = () => {
  const onLogoutSuccess = () => {
    alert("Logged out Successfully");
    
  };

  const onFailure = () => {
    console.log("Handle Failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });
  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="" className="icon"></img>
      <span>Sign Out</span>
    </button>
  );
};

export default LogoutButton;
