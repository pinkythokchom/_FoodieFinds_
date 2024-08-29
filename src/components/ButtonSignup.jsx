import React from "react";
import "./ButtonSignup.css";
import { Link } from "react-router-dom";

const ButtonSignup = () => {
  return (
    <div className="FullModal" id="id02">
      <div className="head">
        <div className="form">
          <div className="heading">SIGNUP</div>
          <form>
            <div>
              <label style={{ fontSize: "large" }} htmlFor="e-mail">
                Email
              </label>
              <input type="email" id="e-mail" placeholder="Enter you mail" />
            </div>

            <div>
              <label style={{ fontSize: "large" }} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label style={{ fontSize: "large" }} htmlFor="password">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="checkbox">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                required=""
              />
              <label htmlFor="remember" className="text-black">
                Remember me
              </label>
              <br />
              <div className="forgot-password">
                <Link style={{ color: "dodgerblue" }}>Forgot Password?</Link>
              </div>
            </div>
            <p>
              By creating an account you agree to our
              <Link style={{ color: "dodgerblue" }}>Terms & Privacy</Link>.
            </p>
            <div className="login-submit">
              <button className="login-btn" type="submit">
                Submit
              </button>
            </div>
            <p style={{textAlign:'center', marginTop:'10px'}}>
              Already have an account ?{" "}
              <Link
                style={{ color: "dodgerblue" }}
                onClick={document.getElementById("0")}
              >
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ButtonSignup;
