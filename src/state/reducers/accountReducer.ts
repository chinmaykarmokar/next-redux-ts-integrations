const accountReducer = (state = 0, action: any) => {
    switch (action.type) {
        case "deposit": 
            return state + action.payload;

        case "withdraw": 
            return state - action.payload;

        default: 
            return state;
    }
}

export default accountReducer;