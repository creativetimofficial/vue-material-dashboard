// Import the necessary libraries
import axios from 'axios';

// Create a custom Axios instance with base URL and other configurations
const axiosInstance = axios.create({
  baseURL: 'http://45.119.160.27:8080', // Your API base URL
  withCredentials: false, // Disable sending credentials (cookies, authentication headers)
  headers: {
    'Content-Type': 'application/json', // Set the content type for all requests
  },
});

// Optionally, you can intercept requests or responses and modify them
axiosInstance.interceptors.request.use(request => {
  // Modify the request or add custom headers if needed
  return request;
});

axiosInstance.interceptors.response.use(response => {
  // Modify the response data if needed
  return response;
});

export default axiosInstance;