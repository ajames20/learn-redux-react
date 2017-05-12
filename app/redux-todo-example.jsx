const redux = require('redux');

console.log('Starting redux-todo-example');

let defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

const reducer = (state = defaultState, action) => {
  return state;
};
const store = redux.createStore(reducer);

console.log('currentState', store.getState());
