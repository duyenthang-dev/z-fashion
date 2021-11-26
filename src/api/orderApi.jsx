import axiosClient from "./axiosClient";
const orderApi = {
    sendRequest(data){
        const url = "http://localhost/dev/backend_zfashion/payment_momo_aio";
        return axiosClient.post(url, data);
    }
}
export default orderApi;