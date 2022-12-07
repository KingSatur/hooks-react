import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe("todoReducer tests", () => {
  const initalState = [
    {
      id: 1,
      description: "Todo 1",
      done: false,
    },
  ];
  it("Should return default initial state", () => {
    const newState = todoReducer(initalState, {});
    expect(newState).toBe(initalState);
  });

  it("Should add todo", () => {
    const addTodo = {
      type: "ADD",
      payload: {
        id: 2,
        description: "Saludar",
        done: false,
      },
    };

    const newState = todoReducer(initalState, addTodo);

    expect(newState.length).toBe(2);
    expect(newState).toContain(addTodo?.payload);
  });

  it("Should delete todo", () => {
    const removeTodo = {
      type: "REMOVE",
      payload: 1,
    };

    const newState = todoReducer(initalState, removeTodo);

    expect(newState.length).toBe(0);
  });

  it("Should toggle todo", () => {
    const toggle = {
      type: "TOGGLE",
      payload: 1,
    };

    const newState = todoReducer(initalState, toggle);

    expect(newState[0]?.done).toBe(true);

    const newState2 = todoReducer(newState, toggle);

    expect(newState2[0]?.done).toBe(false);
  });
});
