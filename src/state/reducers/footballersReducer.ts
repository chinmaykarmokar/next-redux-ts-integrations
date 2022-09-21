import { useSelector } from "react-redux"

const initialState = {
    footballers: [],
    loading: true
}

const footballersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getUsers":
            return {
                ... state,
                footballersData: action.payload,
                loading: false
            }

        case "createPlayer":
            return {
                ... state,
                footballers: action.payload,
                loading: false
            }        

        default: 
            return state    
    }
}

export default footballersReducer;