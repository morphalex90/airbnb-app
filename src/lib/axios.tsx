import axios, { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

const clientAxiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Bearer ${getCookie("access_token")}`,
    },
});

export default clientAxiosInstance;