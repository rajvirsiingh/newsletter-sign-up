import React from "react";
import image from "./images/illustration-sign-up-desktop.svg";
const Card = () => {
  return (
    <section className="flex-container">
      <div className="flex-item">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <label>Email address</label>
        <input placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
      </div>
      <div className="flex-item">
        <img src={image} alt="illustration" />
      </div>
    </section>
  );
};

export default Card;
