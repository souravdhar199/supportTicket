import React from "react";
import { useState } from "react";

export default function Login() {
  const [formData, setFromdata] = new useState({
    Password: "",
    Email: "",
  });

  const { Password, Email } = formData;

  // This function will take care of form subsmission
  const onSubmits = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmits}>
          <p>email</p>
          <input
            onChange={(e) =>
              setFromdata({ ...formData, Email: e.target.value })
            }
            type="text"
          />
          <p>Type your Password</p>
          <input
            onChange={(e) =>
              setFromdata({ ...formData, Password: e.target.value })
            }
            type="password"
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
