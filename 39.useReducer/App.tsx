import React, { useReducer } from "react";
import appReducer, { defaultInitial } from "./AppReducer";

function App() {
  const [state, dispatch] = useReducer(appReducer, defaultInitial);
  return (
    <button
      onClick={() => {
        dispatch({ type: "ADD", name: "点击了" });
      }}
    >
      {state.name}
    </button>
  );
}

export default App;