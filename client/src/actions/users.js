import {ADD_PERSON} from '../actions/types';

export function addPerson(values){
    return{
        type: ADD_PERSON,
        payload: values
    }
};