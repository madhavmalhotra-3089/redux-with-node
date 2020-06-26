const {ADD_KEY_VALUE, GET_KEY, DELETE_KEY} = require('./actions.js');

exports.storeReducer= function storeReducer(state={}, action) {
    switch(action.type) {
        case ADD_KEY_VALUE:
            return {
                ...state,
                [action.key]: action.value
            };
        case GET_KEY:
            return {
                ...state,
                selectedKey: state[action.key]
            }
            break;
        default:
            return state;
    }

}