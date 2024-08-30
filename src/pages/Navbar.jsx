import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Popup from "reactjs-popup";
import ButtonLogin from "../components/ButtonLogin";
import ButtonSignup from "../components/ButtonSignup";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="logo">
          <svg
            id="logo-84"
            width="50"
            height="30"
            viewBox="0 0 40 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="ccustom"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z"
              fill="#3B4158"
            ></path>
          </svg>
        </Link>

        <div className="search">
          <input
            type="search"
            placeholder="Search here.."
            className="search-input"
          />
          <button className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z"></path>
            </svg>
          </button>
        </div>

        <div className="navlink">
          <ul className="navUl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reserve">Reserve</Link>
            </li>
            <li>
              <Link to="/restaurant">Restaurants</Link>
            </li>
          </ul>
        </div>

        <div className="buttons">
          <Popup className="login-popup"
            trigger={<button className="nav-login"> LogIn </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="content">
                  <ButtonLogin />
                </div>
              </div>
            )}
          </Popup>
          <Popup
            trigger={<button className="nav-signup"> Signup </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="content">
                  <ButtonSignup />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
