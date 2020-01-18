import React from "react";
import "../styles/Header.scss";

export default function Header() {
  return (
    <div className="header">
      <a href="#" className="header__link">
        WorldWideMess
      </a>
      <span className="header__username">@WesleyAustin33</span>
      <div className="header__secondary-content">
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}
