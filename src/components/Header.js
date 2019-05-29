import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="navbar__custom">
      <div className="logo_wrap">
        <p>{props.page}</p>
      </div>
      <div className="login_btn_wrap">
        <Link to="/signin">Logout</Link>
      </div>
    </div>
  );
};

export default Header;
