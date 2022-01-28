import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <i class="fas fa-home"></i>
      </Link>
    </div>
  );
};

export default Header;
