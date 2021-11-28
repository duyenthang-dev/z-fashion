import * as ActionType from "./../constants/actionType";
const initialState = {
    users: localStorage.getItem("user"),
};
export const UserReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ActionType.SIGNUP:
            return{
                ...state,
                users: action.payload.user,
            }
        case ActionType.LOGIN:
            return{
                ...state,
                users: action.payload.user,
            }
        default:
            return {...state};
    }
};
