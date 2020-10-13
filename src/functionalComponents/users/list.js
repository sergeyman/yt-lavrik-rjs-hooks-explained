import React, { useState, useEffect } from "react";
import * as usersApi from "./../../api/users";
import UserProfile from "./profile";

//import "./list.css";

export default function () {
  //let [some, someSet] = useState(0); //useReducer() для больших по объему данных
  let [users, setUsers] = useState({ loaded: false, list: null });
  //usersApi.all().then((users) => {}); //NOT CORRECT (side effects)

  //subst all LCM (invoke on rerender comp.)
  useEffect(() => {
    usersApi.all().then((list) => setUsers({ loaded: true, list }));
  });

  let [selectedId, setId] = useState(null);

  /*
  state = {
    loaded: false,
    users: [],
    selectedId: null
  };

  setId(selectedId) {
    this.setState({ selectedId }); // {} = object to setState()
  }

  // request api
  // usersApi.all();				// NOT IN render! only print
  // constructor(props) {			// NO! server responce may come earlier before component is built
  //   super(props);
  //   usersApi.all()
  // }
  componentDidMount() {
    // right, but not optimal <componentWillMount>
    usersApi.all().then((users) => {
      console.log(users);
      this.setState({
        loaded: true,
        users
      });
    });
  }
*/
  // render() {
  // if (!this.state.loaded) {
  if (!users.loaded) {
    return <div>Loading...</div>;
    // return <div>{users.loaded}</div>;
  }

  //let usersList = '';
  // let usersList = this.state.users.map((user) => {
  let usersList = users.list.map((user) => {
    let classes = []; // selected user show
    //if (user.id === this.state.selectedId) {
    if (user.id === 0) {
      classes.push("text-success");
    }
    return (
      <li
        className={classes.join(" ")}
        key={user.id}
        // onClick={() => this.setId(user.id)}
        // onClick={() => {}}
        onClick={() => setId(user.id)} // rewrite null to selectedId
      >
        {user.name}
      </li>
    );
  });

  // let userInfo = this.state.selectedId;
  let userInfo =
    // this.state.selectedId === null ? (
    //1 === null ? (
    selectedId === null ? (
      <div className="alert alert-warning">Please, selected user!</div>
    ) : (
      <UserProfile
        // id={this.state.selectedId}
        // id={null}
        // id={1}               //make profile.js work
        id={selectedId}
        //problem 3 solve #1 full reload
        // key={this.state.selectedId}
      />
    );

  return (
    // <div className="users">
    <div>
      <p>Functional compmnents with hooks</p>
      <ul className="list-group">{usersList}</ul>
      <hr />
      {userInfo}
    </div>
  );
}
// }

/*
CC -> FC
-render
-this
-this.state
-bind()
-setId()
-selectedId

*/
