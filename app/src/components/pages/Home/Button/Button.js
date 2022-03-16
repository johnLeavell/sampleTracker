import React, { useState } from " react";
import { Navigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "../style.css";

const Button = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const login = (response) => {
    if (response.accessToken) {
      setIsLoggedIn(true);
      setAccessToken(response.accessToken);
    }
  };

  const logout = (response) => {
    setIsLoggedIn(false);
    setAccessToken("");
  };

  const handleLoginFailure = (response) => {
    alert("Failed to log in");
  };

  const handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };

  return (
    <div>
      {isLoggedIn ? (
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          className="google-logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          className="google-login"
          buttonText="Sign in with Google"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
        ></GoogleLogin>
      )}
      {accessToken ? <Navigate to="/" /> : null}
    </div>
  );
};

export default Button;
