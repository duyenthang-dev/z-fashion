import * as actionType from "./../constants/actionType";
export const Login = (user) => {
    return {
        type: actionType.LOGIN,
        payload: {
            user,
        },
    };
};

export const signUp = (user) => {
    return {
        type: actionType.SIGNUP,
        payload: {
            user,
        },
    }; 
};
