import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
export const fetches = {
    loginFetch: (username, password) => {
        return axios.post(
            "http://localhost/dev/backend_zfashion/sessions",
            JSON.stringify({ username: username, password: password }),
            config
        ).then(response => response.json());
    },
};
