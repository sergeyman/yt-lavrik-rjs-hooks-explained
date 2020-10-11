import React from "react";
import "./styles.css";

import UserList from "./components/users/list";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <UserList />
    </div>
  );
}
