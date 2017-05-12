const redux = require('redux');

console.log('Starting redux-todo-example');

let defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Searching'
});

console.log('Search Text should Searching', store.getState());
