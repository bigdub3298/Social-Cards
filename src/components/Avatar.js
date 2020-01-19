import React from "react";
import "../styles/Avatar.scss";

export default function Avatar({ image }) {
  return (
    <div className="avatar">
      <img src={image} alt="avatar" className="avatar__img" />
      <div className="avatar__overlay"></div>
    </div>
  );
}
