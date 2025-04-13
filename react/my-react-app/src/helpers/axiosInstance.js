import axios from "axios";
import { COIN_GECO_API } from "./constants";


export const axiosInstance = axios.create({
    baseURL: COIN_GECO_API,
    timeout: 10000,
    });