import React from "react";
import faker from "faker";
import Header from "./Header";
import Avatar from "./Avatar";
import "../styles/TwitterCard.scss";

export default function TwitterCard(props) {
  return (
    <div className="twitter-card">
      <div className="twitter-card__header">
        <Avatar image={faker.image.avatar()} />
        <Header />
      </div>
      <div className="twitter-card__body">
        <div className="twitter-card__body-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aspernatur odit aperiam. Earum consequuntur dicta dolores voluptates,
          ipsa velit fugiat iure a perspiciatis officiis deserunt accusantium
          delectus nemo reiciendis consequatur animi. Doloribus assumenda
          aliquam minima nostrum. Veniam accusantium rem minima fugit? Error
          aliquid expedita saepe temporibus odit asperiores. Vitae, laborum.
        </div>
        <img
          src={faker.image.food()}
          alt=""
          className="twitter-card__body-image"
        />
      </div>
    </div>
  );
}
