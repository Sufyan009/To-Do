import "./App.css";
import Crud from "./Crud";
import Todos from "./Todos";

function App() {
  // const users = [
  //   { name: "Ali", age: 25 },
  //   { name: "Sehbaz", age: 30 },
  //   { name: "Jerry", age: 28 },
  //   { name: "Khan", age: 22 },
  //   { name: "Malik", age: 35 }
  // ];

  return (
    <div className="App">
      
      {/* <Todos /> */}
      <Crud />
      {/* {users.map((user, key) =>{
        return(
          <User name={user.name}  age={user.age}/>
        );
      })} */}
    </div>
  );
}

// const User = (props) =>{
//   return(
//     <h2>{props.name} {props.age}</h2>

//   );

// }

export default App;
