import * as actionsTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({ id: new Date(), value: action.result })})    
        // return {
            //     ...state,
            //     results: state.results.concat({ id: new Date(), value: action.result })
            // }
        case actionsTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            // update array immutably using filter (returns a new array)
           return deleteResult(state, action)
            // return {
            //     ...state,
            //     results: updatedArray
            // }
    }
    return state;
};

export default reducer;