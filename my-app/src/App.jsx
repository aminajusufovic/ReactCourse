import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  let formValue = {
    name: "",
    email: "",
    lastname: "",
  };
  const [users, setUsers] = useState({
    name: "",
    email: "",
    lastname: "",
  });

  return (
    <div>
      <input
        type="text"
        placeholder="FirstName"
        onChange={(e) => {
          formValue.name = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="LirstName"
        onChange={(e) => {
          formValue.lastname = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          formValue.email = e.target.value;
        }}
      />
      <button
        onClick={() => {
          if (formValue.name && formValue.lastname && formValue.email) {
            console.log(formValue);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
