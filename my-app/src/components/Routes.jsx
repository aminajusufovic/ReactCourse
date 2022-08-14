import { Route, Routes, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import Todo from "./components/Todo";

import "./App.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/dropdown"} element={<Dropdown />} />
        <Route path={"/list"} element={<Todo />} />
        <Route path={"/"} element={<h1>Welcome</h1>} />
      </Routes>
      <div>
        <Link to={"/"}>
          <h1>Welcome</h1>
        </Link>
        <Link to={"/counter"}>
          <h1>Counter</h1>
        </Link>
        <Link to={"/dropdown"}>
          <h1>Dropdown</h1>
        </Link>
        <Link to={"/list"}>
          <h1>List</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
