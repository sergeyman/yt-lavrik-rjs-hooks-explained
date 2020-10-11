import React from "react";
import * as usersApi from "./../../api/users";
import UserProfile from "./profile";

export default class extends React.PureComponent {
  //PureComponent - ?
  state = {};

  render() {
    if (true) {
      return <div>Loading...</div>;
    }

    let usersList = "";
    let userInfo = "";

    return (
      <div>
        <ul className="list-group">{usersList}</ul>
        <hr />
        {userInfo}
      </div>
    );
  }
}
