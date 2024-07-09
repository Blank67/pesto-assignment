import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_END_POINT,
});

export const getCall = async (endpoint: string) => {
    try {
        const response = await axios.get(endpoint);
        return { message: "Success", data: response.data };
    } catch (error) {
        console.log(error);
    }
};

export const postCall = async (endpoint: string, payload: object) => {
    try {
        const response = await axiosInstance.post(endpoint, payload);
        return { message: "Success", data: response.data };
    } catch (error) {
        console.log(error);
    }
};
