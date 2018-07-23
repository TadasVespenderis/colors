const activeReducer = ( state = ['rgb(255, 0, 0)'], action)=>{
        switch (action.type){
            case 'CHANGE_ACTIVE':
                return state = [action.payload];
            default: return state
        }
};

export default activeReducer;