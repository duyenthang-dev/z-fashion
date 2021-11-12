import * as actionType from "./../constants/actionType";
export const addToCart = (product) => {
    return {
        type: actionType.ADD_CART,
        payload: product,
    };
};

export const updateCart = (product) => {
    return {
        type: actionType.UPDATE_CART,
        payload: product,
    };
};

export const deleteCart = (product) => {
    return {
        type: actionType.DELETE_CART,
        payload: product,
    };
};

export const increaseQuantity = (product) => {
    return {
        type: actionType.INCREASE_QUANTITY,
        payload: product,
    };
};

export const decreaseQuantity = (product) => {
    return {
        type: actionType.DECREASE_QUANTITY,
        payload: product,
    };
};

export function GetAllProduct(product) {
    return {
        type: "GET_ALL_PRODUCT",
        product,
    };
}

/*GET NUMBER CART*/
export function GetNumberCart() {
    return {
        type: "GET_NUMBER_CART",
    };
}

