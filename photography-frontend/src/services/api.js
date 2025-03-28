import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Create a reusable axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchImages = () => apiClient.get("/images");
export const fetchAppointments = () => apiClient.get("/appointments");
export const createAppointment = (appointmentData) => apiClient.post("/appointments", appointmentData);

// Export the axios instance for reuse
export default apiClient;

