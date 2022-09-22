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
                createFootballerData: action.payload,
                loading: false
            } 
            
        case "updatePlayer": 
            return {
                ... state,
                updatedData: action.payload,
                loading: false
            } 

        default: 
            return state    
    }
}

export default footballersReducer;