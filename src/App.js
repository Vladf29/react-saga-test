import { connect } from "react-redux";
import "./App.css";
import Counter from "./Counter";
import { action } from "./store/store";

function App({ action }) {
  return (
    <div className="App">
      <Counter />
      <hr />
      <button onClick={() => action("FETCH_REQUESTED")}>Fetch user</button>
      <button onClick={() => action("CREATE_USER")}>User create</button>
    </div>
  );
}

export default connect(null, { action: action })(App);
