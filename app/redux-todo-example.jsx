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

const store = redux.createStore(
  reducer,
  redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const currentState = store.getState();

let unsucribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is: ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});
// unsucribe(); allows you to unsuscribe from subscribe

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Searching'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Finding'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Lost'
});
