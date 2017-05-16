const redux = require('redux');

console.log('Starting redux example');

const reducer = (state = { name: 'Anonymous' }, action) => {
  // state = state || {name: 'Anonymous'};

  return state;
};
const store = redux.createStore(reducer);
// Subcribe to changes
store.subscribe(() => {
  var state = store.getState();
  console.log('Name is: ', state.name);
});

const currentState = store.getState();
