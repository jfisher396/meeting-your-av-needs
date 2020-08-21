import React, { useState } from "react";
import axios from 'axios'

export default function InfoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setEmail(e.target.value);
    }

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dataToSubmit = {
      name: name,
      email: email
    }
    axios.post("/api/sendMail", dataToSubmit);
    alert("Thank you for your order!");
  }

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6">
            <form onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleClick}
              />
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleClick}
              />
              <button
                onClick={handleSubmit}
                className="success button"
                value="Confirm order"
              >
                Click here to recieve confirmation email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
