import {ADD_STATS_DATA} from '../actions/types';

export function addStats (value){
      return{
        type: ADD_STATS_DATA,
        payload: value
    }
}