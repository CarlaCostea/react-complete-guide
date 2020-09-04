import * as actionsTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1})
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
        case actionsTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
            // return {
            //     // shorter way to update state immutably
            //     ...state,
            //     counter: state.counter - 1
            // }
        case actionsTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val})
        }
    return state;
};

export default reducer;