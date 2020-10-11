import React from "react";
import "./styles.css";

import UserList from "./components/users/list";
export default function App() {
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
