import React from "react";
import * as usersApi from "./../../api/users";
import UserProfile from "./profile";

//import "./list.css";

export default class extends React.PureComponent {
  //PureComponent - ?
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

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    //let usersList = '';
    let usersList = this.state.users.map((user) => {
      let classes = []; // selected user show
      if (user.id === this.state.selectedId) {
        classes.push("text-success");
      }
      return (
        <li
          className={classes.join(" ")}
          key="user.id"
          onClick={() => this.setId(user.id)}
        >
          {user.name}
        </li>
      );
    });

    // let userInfo = this.state.selectedId;
    let userInfo =
      this.state.selectedId === null ? (
        <div className="alert alert-warning">Please, selected user!</div>
      ) : (
        <UserProfile
          id={this.state.selectedId}
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
}
