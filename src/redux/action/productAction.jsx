import * as actionType from "./../constants/actionType";
export const addToCart = (productId, color, size, qty =1) => {
    return {
        type: actionType.ADD_CART,
        payload: {
            productId,
            color,
            size,
            qty,
        },
    };
};

export const deleteCart = (productId, color, size) => {
    return {
        type: actionType.DELETE_CART,
        payload: {
            productId,
            color,
            size,
        },
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
export function setAllProduct(products) {
    return {
        type: "SET_ALL_PRODUCT",
        payload: products,
    }
}
/*GET NUMBER CART*/
export function GetNumberCart() {
    return {
        type: "GET_NUMBER_CART",
    };
}
export function searchProduct(key){
    return {
        type: "SEARCH_PRODUCT",
        payload: key,
    }
}
export const updateCart = (product, color, size, qty =1) => {
    return {
        type: actionType.UPDATE_CART,
        payload: {
            product: product,
            color,
            size,
            qty
        },
    };
};
