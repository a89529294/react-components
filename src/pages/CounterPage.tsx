import { ChangeEvent, FormEvent, useReducer } from "react";
import produce from "immer";

import Button from "../components/Button";
import Panel from "../components/Panel";

function reducer(
  state: {
    count: number;
    valueToAdd: number;
  },
  action:
    | { type: "incrementCount" | "decrementCount" | "resetValue" | "addValueToCount" }
    | { type: "setValueTo"; payload: number }
) {
  switch (action.type) {
    case "incrementCount":
      ++state.count;
      break;
    case "decrementCount":
      --state.count;
      break;
    case "addValueToCount":
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      break;
    case "setValueTo":
      state.valueToAdd = action.payload;
      break;
    case "resetValue":
      state.valueToAdd = 0;
      break;
  }
}

function CounterPage({ initialCount }: { initialCount: number }) {
  const [{ count, valueToAdd }, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    dispatch({ type: "setValueTo", payload: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "addValueToCount" });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex ">
        <Button onClick={() => dispatch({ type: "incrementCount" })}>Increment</Button>
        <Button onClick={() => dispatch({ type: "decrementCount" })}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={valueToAdd.toString()}
          onChange={handleChange}
          onBlur={() => Number.isNaN(valueToAdd) && dispatch({ type: "resetValue" })}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
