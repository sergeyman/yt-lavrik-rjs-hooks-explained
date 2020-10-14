import React from "react";
import * as usersApi from "./../../api/users";

export default class extends React.PureComponent {
  state = {
    loaded: false,
    info: null,
    something: 1
  };

  componentDidMount() {
    // right, but not optimal <componentWillMount>
    this.loadInfo();
  }

  // Problem 3 reload users in table
  // обновлять комп. только если мы изменили вход. параметр
  // для него
  componentDidUpdate(prevProps) {
    // !!!!!!!!!! плохо.
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

  //computed values (MobX - computed getter) - не надо пересчитывать кажд. раз
  derSomething(something) {
    console.log("der");
    return something ** 8;
  }

  somethingInc = () => {
    this.setState({ something: this.state.something + 1 });
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    let der = this.derSomething(this.state.something);

    return (
      <div>
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
              <td>{this.state.something}</td>
            </tr>
            <tr>
              <td>Something Derivative</td>
              <td>{der}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
