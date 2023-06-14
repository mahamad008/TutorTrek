import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import CONSTANTS_COMMON from "../../constants/common";
import CustomApiError from "../../utils/CustomApiError";

const api: AxiosInstance = axios.create({
  baseURL: CONSTANTS_COMMON.API_BASE_URL,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response) {
      const { data, status } = error.response;
      
      if (status === 400) {
        console.log('Bad Request:', data);
      } else if (status === 401) {
        console.log('Unauthorized:', data);
      } else if (status === 404) {
        console.log('Not Found:', data);
      } else if (status === 409) {
        throw new CustomApiError("Conflict",data)
      } else {
        throw new CustomApiError("Request failed with status ${status}",data)
      }
    } else if (error.request) {
      console.log('No response received:', error.request);
    } else {
      console.log('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
