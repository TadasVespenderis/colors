import {ADD_PERSON} from '../actions/types';

const users = (state=[], action)=>{
    // console.log(action.payload);
    // console.log(action)
    switch (action.type) {
        case ADD_PERSON:
            return [...state, action.payload];
        // case 'REMOVE_ITEM':
            // console.log(action.payload)
        //     return [...state.filter((item)=>item._id !== action.payload._id)];
        default:
            return state;
    }
};

export default users;