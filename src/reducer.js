const initialState = {
    text: "",
    temp: ""
};

const reducer = (state=initialState, action) => {
    const newState={...state};
    switch(action.type){
        case 'CHANGE': newState.text = action.val;
        console.log(newState.text);
        break;
        case 'CONVERT': if(newState.text){
        action.name==="C-F"? newState.temp = ((Number(newState.text)*9/5)+32): newState.temp = ((Number(newState.text)-32)*5/9);
        console.log(newState.temp);
        document.getElementById('boot').innerHTML = newState.text +" equals "+newState.temp;
        } else {
            document.getElementById('boot').innerHTML = "please enter the temperature";
        }
        default: return newState;
    }
    return newState;
};

export default reducer;