import React, { useState, useEffect, useMemo } from "react";
import * as usersApi from "./../../api/users";

// export default class extends React.PureComponent {
export default function (props) {
  // No state in FC
  // state = {
  //   loaded: false,
  //   info: null,
  //   something: null
  // };

  let [user, setUser] = useState({ loaded: false, info: null });
  useEffect(() => {
    if (user.loaded) {
      setUser({ loaded: false, info: null });
    }

    usersApi.get(props.id).then((info) => {
      // this.setState({
      setUser({
        loaded: true,
        info
      });
    });
  }, [props.id]); // иначе дергается //if (prevProps.id !== this.props.id) {

  let [something, setSomething] = useState(1);
  // let der = useMemo(() => something ** 8, [something]);
  let der = useMemo(() => {
    console.log(1);
    return something ** 8;
  }, [something]);

  // No LCM in FC
  // componentDidMount() {
  //   // right, but not optimal <componentWillMount>
  //   this.loadInfo();
  // }

  // Problem 3 reload users in table
  // обновлять комп. только если мы изменили вход. параметр
  // для него

  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.id) {
  //     console.log("update"); // twise?

  //     this.loadInfo();
  //   }
  // }

  // loadInfo() {
  //   if (this.state.loaded) {
  //     this.setState({ loaded: false, info: false });
  //   }
  //   usersApi.get(this.props.id).then((info) => {
  //     //console.log(users);
  //     this.setState({
  //       loaded: true,
  //       info
  //     });
  //   });
  // }

  // render() {
  // if (!this.state.loaded) {    // this.state -> user !!!!
  if (!user.loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="table tabel-bordered actions">
        <tbody>
          <tr>
            <td>Name</td>
            {/* <td>{this.state.info.name}</td> */}
            <td>{user.info.name}</td>
          </tr>
          <tr>
            <td>About</td>
            {/* <td>{this.state.info.desc}</td> */}
            <td>{user.info.desc}</td>
          </tr>
          {/* <tr onClick={this.somethingInc}> */}
          {/* <tr onClick={1}> */}
          <tr onClick={() => setSomething(something++)}>
            <td>Something Counter</td>
            {/* <td>{this.state.something}</td> */}
            <td>{something}</td>
          </tr>
          <tr>
            <td>Something Der</td>
            {/* <td>{this.state.something}</td> */}
            <td>{der}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// }

/*
[1:16]

*/
