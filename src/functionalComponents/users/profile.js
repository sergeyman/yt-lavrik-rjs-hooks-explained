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
-RJS hooks for LCM - неявные, слишком много их, устарел componentReceiveProps(), много надо знать про this, bind() (или () => {}) !!!!!!!!!  // говорим this, думаем bind() 
// => || bind() //!!!!!!!!!!!!!!!!!!!!!!!   NO this!!!!!!!!!!  NO bind()!!!!!!!!!!!!! Use hooks!!!!!!!!!!!!!!
'() => {}' AF - no this (только для внешнего контекста ???)
BUT:
	state - нет перед глазами, раньше он лежал в одном месте, а теперь он размазан.
//HOCs hell Component + store: +id, nav, ReactRouter/withRouter() HOC (1 Comp -> 3 Comp) Постепнно это стал антипаттерном. Плохо для минификации, производительности.
Хуки - одна ф-я. useDispatcher - легко подключть Redux. Нет матрешки.
//the two ways of binding methods in React: using the constructor and using arrow functions.
RJS hooks +:
ГРУППИРУЕМ по смыслу (не разбрасываем по коду работа с юзером, id this.setState({}))
Раньше FC просто возвращали разметку или другой К. (были презентационными компонентами) и не имели состояния. Теперь они используют хуки.

-RJS useState():    // analog for setState() method in class-based components
	>>const [userName, setUserName] = useState('John');
	>>const [imageUrl, setImageUrl] = useState('https://picsum.photos/600/150');
	The function useState() returns a pair: the current state value and a function to update it. 
	It's the syntax of array destructuring (ECMAScript 6). The above line means that the hook useState() takes
	the string 'John' as an initial value and returns an array, and we use destructuring to get the two
	elements of this array into two variables: and userName setUserName. The syntax of array
	destructuring allows you to give any names to these variables. 
	The function useState() is not a pure function because it stores the component’s state somewhere inside React. It’s a function with side effects. 
	The React reducer is a pure function that specifies how the app state should be changed. Pure functions can’t have side effects.
	The reducer never changes the current state, but creates its new version and returns a new reference to it.
	>>setUserName('Mary');	// to update the value of userName.
-RJS useEffect(): 	// for working with external data. Function with side effects (use external data, may produce diff. results on the same args.
	By default, React automatically invokes the callback function passed to useEffect() after every DOM rendering.
	>>useEffect(() => console.log("useEffect() was invoked")); // each time on enter char to the input field and UI refresh. (on every re-render event invoking)
	BUT:
	>>useEffect(() => console.log("useEffect() was invoked"), []);	// on adding empty array as 2 arg - to be executed only once after init. rendering

-RJS useMemo(), useCallback() - save function. Use derivative computed fields.

*/
