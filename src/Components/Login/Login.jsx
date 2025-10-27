import React, { useState } from "react";
import "./Login.css";
import logo from "../images/Tw-logo.svg";
import { set } from "react-hook-form";
import errorimg from "../images/error.png";
import { auth } from "../firebaseConfig/firebase";
import { signInWithEmailAndPassword , setPersistence, getAuth, browserSessionPersistence } from "firebase/auth";

const Login = () => {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const [error, seterror] = useState(false);
  const [errormsg, setErrormsg] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {

        signInWithEmailAndPassword(auth, email, password).catch((error) => {
          seterror(true);
          const errormsg = error.message;
          setErrormsg(errormsg);
        });      })
      .catch((error) => {
        seterror(false);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="login-page">
      <div className="bg">
        <div className="login-container">
          <div>
            <header className="login-header">
                
                <img src={logo} alt="header_image"/>
            </header>
          </div>
          <div className="login-form-container">
            <form onSubmit={submit} >
              <div className="input-container login-inputs">
                <input
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  id="email"
                  required
                />

                <input
                  className="password-input"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                  type={passwordType}
                  id="password"
                  required
                  
                />


              </div>
              <label className="showPassword-label showPassword-login">
        <input type="checkbox"  className="box-label" onClick={togglePassword}/>
       Show Password
      </label>
              <div className="error-container">
                {error && <div><img srcSet={errorimg} alt="" className="status" /><span className="error">Login Failed</span></div>}
              </div>

                <div class="btn-signup ">
                <button className="css-1f1mtmi login-btn" type="submit">
                    Login
                  </button>                 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
