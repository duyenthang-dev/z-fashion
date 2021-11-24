import * as ActionType from "./../constants/actionType";
//TODO: fetch api to get data here

const initialState = {
    products: [],
    cart: [],
    currentItem: null,
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_CART:
            const item = state.products.find(
                (prod) => prod.id === action.payload.productId
            );
            //* check if item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.productId &&
                item.color === action.payload.color &&
                item.size === action.payload.size
                    ? true
                    : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                          item.id === action.payload.productId
                              ? {
                                    ...item,
                                    color: action.payload.color,
                                    size: action.payload.size,
                                    qty: item.qty + action.payload.qty,
                                }
                              : item
                      )
                    : [
                          ...state.cart,
                          {
                              ...item,
                              color: action.payload.color,
                              size: action.payload.size,
                              qty: action.payload.qty,
                          },
                      ],
            };
        case ActionType.DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) =>
                        item.id !== action.payload.productId ||
                        !(
                            item.id === action.payload.productId &&
                            item.color === action.payload.color &&
                            item.size === action.payload.size
                        )
                ),
            };
        case ActionType.UPDATE_CART:
            return {};

        case ActionType.INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                ),
            };
        case ActionType.DECREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 }
                        : item
                ),
            };
        case ActionType.SET_ALL_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return { ...state };
    }
};
