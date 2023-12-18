import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../services/authorize";

export default function Nav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <nav>
      <ul className="nav nav-tabs d-flex justify-content-center">
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        {getUser() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <Link to="/create" className="nav-link">
              Write Article
            </Link>
          </li>
        )}
        {!getUser() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <Link to="/login" className="nav-link">
              Sign in
            </Link>
          </li>
        )}
        {getUser() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <button
              className="nav-link"
              onClick={() => logout(() => handleClick())}
            >
              Log out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
