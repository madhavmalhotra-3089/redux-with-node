const {createStore} = require('redux');
const {storeReducer} = require('./reducers');
const {addKeyValue, getKey, deleteKey} = require('./actions');

const store = createStore(storeReducer);
console.log(store.getState());


const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addKeyValue("key", "value"))
store.dispatch(addKeyValue("key2", "value"))
store.dispatch(addKeyValue("key3", "value"))

store.dispatch(getKey('key'));
