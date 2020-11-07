import React from "react";
import { connect } from "react-redux";

import { action } from "./store/store";

export const Counter = ({ counter, action }) => {
  return (
    <div>
      <div> {counter}</div>
      <button onClick={() => action("INCREMENT")}>Increase</button>
      <button onClick={() => action("DECREMENT")}>Decrease</button>
      <button onClick={() => action("INCREMENT_ASYNC")}>INCREMENT_ASYNC</button>
    </div>
  );
};

export default connect((state) => ({ counter: state }), { action })(Counter);
