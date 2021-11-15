import {
    shirtMale,
    sweaterMale,
    sweaterFemale,
    khakiMale,
    skirtFemale,
} from "./../../imageSource";
import * as ActionType from "./../constants/actionType";
//TODO: fetch api to get data here 

const initialState = {
    products: [
        {
            id: 1,
            title: "Áo thun nam chuột Mickey",
            status: "New",
            src: shirtMale.LARGE_1,
            price: 200000,
            rate: 4,
            color: ["yellow", "white", "navy", "orange", "pink"],
            size: ["S", "M", "L", "XL"],
            desc: "Áo với form dáng thoải mái, với chất liệu vải 100% cotton dễ chịu khi mặc. Là trang phục hàng ngày hoàn hảo, dễ dàng kết hợp với mọi thứ",
        },
        {
            id: 2,
            title: "Áo len nam",
            status: "-30%",
            src: sweaterMale.LARGE_4,
            price: 400000,
            rate: 5,
            color: ["yellow", "white", "navy", "orange", "pink"],
            size: ["S", "M", "L", "XL"],
            desc: "Với phong cách casual, áo thích hợp cho các hoạt động ngoại khóa ngoài trời, đi học, đi làm và đi chơi cùng gia đình hoặc bạn bè.",
        },
        {
            id: 3,
            title: "Áo len nữ",
            status: "New",
            src: sweaterFemale.LARGE_1,
            price: 450000,
            rate: 3,
            color: ["yellow", "white", "orange", "pink"],
            size: ["S", "M", "L"],
            desc: "Với phong cách casual, áo thích hợp cho các hoạt động ngoại khóa ngoài trời, đi học, đi làm và đi chơi cùng gia đình hoặc bạn bè.",
        },
        {
            id: 4,
            title: "Áo thun nam Marvel",
            status: "",
            src: shirtMale.LARGE_6,
            price: 250000,
            rate: 4,
            color: ["white", "navy", "orange", "pink"],
            size: ["S", "M", "L"],
            desc: "Áo với form dáng thoải mái, với chất liệu vải 100% cotton dễ chịu khi mặc. Là trang phục hàng ngày hoàn hảo, dễ dàng kết hợp với mọi thứ",
        },
        {
            id: 5,
            title: "Quần khaki nam",
            status: "-10%",
            src: khakiMale.LARGE_2,
            price: 300000,
            rate: 4,
            color: ["yellow", "white", "navy", "orange", "pink"],
            size: ["S", "M", "L", "XL"],
            desc: "Chiếc quần dài cho nam được thiết kế hiện đại và năng động, dễ dàng kết hợp với nhiều item khác nhau cho vẻ ngoài trẻ trung, mang lại cảm giác thoải mái, tiện dụng khi tham gia nhiều hoạt động",
        },
        {
            id: 6,
            title: "Váy ngắn nữ",
            status: "New",
            src: skirtFemale.LARGE_2,
            price: 250000,
            rate: 5,
            color: ["yellow", "white", "navy", "orange", "pink"],
            size: ["S", "M", "L", "XL"],
            desc: " Với thiết kế tinh tế, trẻ trung, chất vải được nghiên cứu tạo cảm giác thoải mái nhất khi mặc. Set váy áo như món quà dành cho những cô gái đáng yêu trong mùa hè này. ",
        },
        {
            id: 7,
            title: "Váy ngắn nữ",
            status: "-25%",
            src: skirtFemale.LARGE_1,
            price: 300000,
            rate: 3,
            color: ["yellow", "white", "navy", "orange", "pink"],
            size: ["S", "M", "L", "XL"],
            desc: " Với thiết kế tinh tế, trẻ trung, chất vải được nghiên cứu tạo cảm giác thoải mái nhất khi mặc. Set váy áo như món quà dành cho những cô gái đáng yêu trong mùa hè này. ",
        },
        {
            id: 8,
            title: "Áo len nam",
            status: "",
            src: sweaterMale.LARGE_2,
            price: 200000,
            rate: 3,
            color: ["yellow", "white", "navy", "orange", "pink"],
            size: ["S", "M", "L", "XL"],
            esc: "Với phong cách casual, áo thích hợp cho các hoạt động ngoại khóa ngoài trời, đi học, đi làm và đi chơi cùng gia đình hoặc bạn bè.",
        },
    ],
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
        default:
            return { ...state };
    }
};
