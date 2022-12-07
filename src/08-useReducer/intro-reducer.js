const initialState = [
  {
    id: 1,
    todo: "Recollect data",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action?.type === "[TODO] add todo") {
    return [...state, action?.payload];
  }

  return state;
};

const newTodo = {
  id: 2,
  todo: "Comprar comida",
  done: false,
};

const addToAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

let todos = todoReducer();

todos = todoReducer(todos, addToAction);

console.log(todos);
