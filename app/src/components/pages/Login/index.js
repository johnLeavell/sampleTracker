import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authAPI from "../../../utils/authAPI";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register("email")} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" {...register("password")} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Login;
// log in with google or account information.  or create an account
