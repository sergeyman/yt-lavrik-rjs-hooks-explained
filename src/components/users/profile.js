import React from "react";
import * as usersApi from "./../../api/users";

export default class extends React.PureComponent {
  state = {
    loaded: false,
    info: null
  };

  componentDidMount() {
    // right, but not optimal <componentWillMount>
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
      <table className="table tabel-bordered">
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
