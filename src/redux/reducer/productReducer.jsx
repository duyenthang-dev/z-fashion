import { shirtMale, sweaterMale } from "./../../imageSource";
const initialState = {
    listProduct: [
        {
            id: 1,
            title: "Áo thun nam chuột Mickey",
            status: "New",
            src: shirtMale.LARGE_1,
            price: 200000,
            rate: 4,
            desc: "Áo với form dáng thoải mái, với chất liệu vải 100% cotton dễ chịu khi mặc. Là trang phục hàng ngày hoàn hảo, dễ dàng kết hợp với mọi thứ",
        },
        {
            id: 2,
            title: "Áo len nam",
            status: "-30%",
            src: sweaterMale.LARGE_4,
            price: 400000,
            rate: 5,
            desc: "Với phong cách casual, áo thích hợp cho các hoạt động ngoại khóa ngoài trời, đi học, đi làm và đi chơi cùng gia đình hoặc bạn bè.",
        },
    ],
    productDetails:{
        
    }
};

export const ProductReducer = (state = initialState, action) => {
    return { ...state };
};
