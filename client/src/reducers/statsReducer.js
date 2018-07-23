import {ADD_STATS_DATA} from '../actions/types';

const statsReducer = (state=[], action)=>{
    switch (action.type){
        case ADD_STATS_DATA:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default statsReducer;