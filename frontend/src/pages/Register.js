import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Register() {
  //Stores all the form data
  const [formData, setFromdata] = new useState({
    Name: "",
    Password: "",
    Password2: "",
    Email: "",
  });

  const { Name, Password, Password2, Email } = formData;

  // This function will take care of form subsmission
  const onSubmits = (e) => {
    e.preventDefault();
    if (Password !== Password2) {
      toast.error("Passward Did not Match");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmits}>
          <p>Name</p>
          <input
            onChange={(e) => setFromdata({ ...formData, Name: e.target.value })}
            type="text"
          />
          <p>Type your Password</p>
          <input
            onChange={(e) =>
              setFromdata({ ...formData, Password: e.target.value })
            }
            type="password"
          />
          <p>Confiermed password</p>
          <input
            onChange={(e) =>
              setFromdata({ ...formData, Password2: e.target.value })
            }
            type="password"
          />
          <p>email</p>
          <input
            onChange={(e) =>
              setFromdata({ ...formData, Email: e.target.value })
            }
            type="text"
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
