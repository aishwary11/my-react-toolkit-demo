import axios from "axios";
import { toast } from "react-toastify";
export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  cancelToken: axios.CancelToken.source().token
});

export const toastWarn = (msg) => toast.warning(msg);
export const toastSuccess = (msg) => toast.success(msg);
export const toastError = (msg) => toast.error(msg);