import React from "react";
import "./Login.css";
import Input from "../Input";

const Login = (props) => {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="password" />

        {props.IsRegistered === false && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">
          {props.IsRegistered ? "Login" : "Register"}
          <Input type="text" placeholder="Username" />
          {/* <Input type="text" placeholder="Username" /> */}
        </button>
      </form>
    </div>
  );
};

export default Login;
