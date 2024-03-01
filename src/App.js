// import "./styles.css";

import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(`${event.target.fname.value} ${event.target.lname.value}`);
  };
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" required />
        <br />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {name && <p>Full Name: {name}</p>}
    </div>
  );
}
