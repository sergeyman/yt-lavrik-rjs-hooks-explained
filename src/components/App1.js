import React from "react";
import "../styles.css";

import UserList from "./users/list";
//import UserList from "./functionalComponents/users/list";

export default function App1() {
  return (
    <div className="App">
      <h2>Lavrik React.js Hooks explaine</h2>

      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <UserList />
    </div>
  );
}
