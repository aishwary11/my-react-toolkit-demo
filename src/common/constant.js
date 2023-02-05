import axios from "axios";
import { toast } from "react-toastify";
export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
const toastConfig = {
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT
};

export const toastSuccess = (msg) => toast.success(msg, toastConfig);
export const toastError = (msg) => toast.error(msg, toastConfig);