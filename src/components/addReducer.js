const initialState = {
    num1:"",
    num2:"",
    sum:""
};

const reducer = (state=initialState, action) => {
    const newState= {...state};
    switch(action.type){
        case 'CHANGE': action.name==="num1"? newState.num1 = action.val : newState.num2 = action.val; 
        break;
        case 'ADD': newState.sum = Number(newState.num1) + Number(newState.num2);
        break;
    }
    return newState;
};
export default reducer;