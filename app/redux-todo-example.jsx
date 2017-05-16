const redux = require('redux');

console.log('Starting redux-todo-example');

let defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let nextTodoID = 1;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoID++,
            todos: action.todo
          }
        ]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
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
  console.log('New State: ', store.getState());
});
// unsucribe(); allows you to unsuscribe from subscribe

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Searching'
});

store.dispatch({
  type: 'ADD_TODO',
  todo: 'Running'
});

store.dispatch({
  type: 'ADD_TODO',
  todo: 'Walking'
});

store.dispatch({
  type: 'REMOVE_TODO',
  id: 2
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Lost'
});

store.dispatch({
  type: 'ADD_TODO',
  todo: 'Get Milk'
});
