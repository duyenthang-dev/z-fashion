import * as ActionType from "./../constants/actionType";
const initialState = {
    user: [],
    currentUser: "",
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            console.log(action?.payload?.username);
            return {
                ...state,
                currentUser: action.payload?.username,
            };
        default:
            return {
                ...state,
            };
    }
};
