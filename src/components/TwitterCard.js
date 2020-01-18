import React, { Component } from "react";
import faker from "faker";
import Header from "./Header";
import Avatar from "./Avatar";
import "../styles/TwitterCard.scss";

export class TwitterCard extends Component {
  render() {
    return (
      <div className="twitter-card">
        <div className="twitter-card__header">
          <Avatar image={faker.image.avatar()} />
          <Header />
        </div>
      </div>
    );
  }
}

export default TwitterCard;
