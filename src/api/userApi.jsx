import axiosClient from "./axiosClient";
const userApi = {
    login(data){
        const url = "http://localhost/dev/backend_zfashion/sessions";
        return axiosClient.post(url, data);
    },

    signUp(data){
        const url = "http://localhost/dev/backend_zfashion/users";
        return axiosClient.post(url, data);
    }
}
export default userApi;