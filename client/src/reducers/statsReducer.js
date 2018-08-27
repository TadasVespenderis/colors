import {ADD_STATS_DATA} from '../actions/types';

const statsReducer = (state=[
    {   color: 'rgb(255, 0, 0)', maxLevel: 0},
    {   color: 'rgb(165, 42, 42)', maxLevel: 0},
    {   color: 'rgb(244, 164, 96)', maxLevel: 0},
    {   color: 'rgb(255, 165, 0)', maxLevel: 0},
    {   color: 'rgb(255, 255, 0)', maxLevel: 0},
    {   color: 'rgb(173, 255, 47)', maxLevel: 0},
    {   color: 'rgb(0, 128, 0)', maxLevel: 0},
    {   color: 'rgb(0, 191, 255)', maxLevel: 0},
    {   color: 'rgb(65, 105, 225)', maxLevel: 0},
    {   color: 'rgb(0, 0, 255)', maxLevel: 0},
    {   color: 'rgb(128, 0, 128)', maxLevel: 0}
    ], action)=>{
    switch (action.type){
        case ADD_STATS_DATA:
            const newState = state.map ((game)=>{
                if(game.color === action.payload.color[0] && game.maxLevel < action.payload.level){
                    return {color: game.color, maxLevel : action.payload.level}
                }else {return game}
            });
            return newState;
        default:
            return state;
    }
};

export default statsReducer;