/*
Actions are the stuff that you want to be able to do in your store. 
In this file, we define the various actions that we want this demo app to be able to do.
*/

const ADD_KEY_VALUE = "ADD_RANDOM_KEY_VALUE";
const GET_KEY = "GET_RANDOM_KEY";

exports.ADD_KEY_VALUE = ADD_KEY_VALUE;
exports.GET_KEY = GET_KEY;

exports.addKeyValue= function addKeyValue(key, value) {
  return {
    type: ADD_KEY_VALUE,
    key,
    value,
  };
}

exports.getKey= function getKey(key) {
  return {
    type: GET_KEY,
    key,
  };
}

