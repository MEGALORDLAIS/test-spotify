import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="logo spotify" />
      <a className="header_link" href="/">
        <h1>Spotift</h1>
      </a>
    </div>
  );
};

export default Header;
