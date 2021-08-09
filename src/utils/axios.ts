import axios from "axios";

import { apiUrl } from "./constants";

const axiosInstance = axios.create({ baseURL: apiUrl });

export default axiosInstance;
