import { SEND_DATA } from "../actionTypes";

const initState = {
    textFieldData: "",
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_DATA:
            return {
                ...state,
                textFieldData: action.payload
            }
        default:
            return state
    }
}

export default appReducer;
