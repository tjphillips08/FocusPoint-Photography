import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const fetchImages = () => axios.get(`${API_URL}/images`);
export const fetchAppointments = () => axios.get(`${API_URL}/appointments`);
export const createAppointment = (appointmentData) => 
    axios.post(`${API_URL}/appointments`, appointmentData);
