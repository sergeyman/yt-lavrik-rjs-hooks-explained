import React from "react";
import * as usersApi from "./../../api/users";

export default class extends React.PureComponent {
  state = {
    loaded: false,
    info: null
  };

  componentDidMount() {
    // right, but not optimal <componentWillMount>
    this.loadInfo();
  }

  // Problem 3 reload users in table
  // обновлять комп. только если мы изменили вход. параметр
  // для него
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      console.log("update"); // twise?

      this.loadInfo();
    }
  }

  loadInfo() {
    if (this.state.loaded) {
      this.setState({ loaded: false, info: false });
    }
    usersApi.get(this.props.id).then((info) => {
      //console.log(users);
      this.setState({
        loaded: true,
        info
      });
    });
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <table className="table tabel-bordered actions">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{this.state.info.name}</td>
          </tr>
          <tr>
            <td>About</td>
            <td>{this.state.info.desc}</td>
          </tr>
          <tr onClick={this.somethingInc}>
            <td>Something Counter</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
