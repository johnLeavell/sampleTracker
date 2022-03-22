import React from "react";
import { useGoogleLogin } from "react-google-login";
import refreshTokenSetup from "../../../../utils/refreshToken";

const clientId = process.env.GOOGLE_CLIENT_ID;

const LoginButton = () => {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login Failure: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
  return (
    <button onClick={signIn}>
      <img src="icons/google.svg" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default LoginButton;
