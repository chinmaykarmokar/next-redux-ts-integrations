import { useSelector } from "react-redux"

const initialState = {
    dummyData: [],
    loading: true
}

const dummyDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getUsers":
            return {
                ... state,
                dummyData: action.payload,
                loading: false
            }

        case "createPlayer":
            return {
                ... state,
                data: action.payload,
                loading: false
            }        

        default: 
            return state    
    }
}

export default dummyDataReducer;