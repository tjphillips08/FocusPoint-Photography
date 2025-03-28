<script setup>
import { ref, watch } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import apiClient from "@/services/api.js"; // Make sure apiClient is imported

const selectedDate = ref(null);
const selectedTime = ref("");
const timeSlots = ref([]);
const unavailableDates = ref([]); // List of unavailable dates to disable on the calendar

// Fetch available time slots when the date is selected
const fetchAvailableTimes = async () => {
  if (!selectedDate.value) return;

  const formattedDate = selectedDate.value.toISOString().split("T")[0]; // Format to "YYYY-MM-DD"
  try {
    const response = await apiClient.get(`/appointments/available-times?date=${formattedDate}`);
    timeSlots.value = response.data; // Store available time slots
  } catch (error) {
    console.error("Error fetching available times:", error);
  }
};

// Watch the selected date to fetch available times
watch(selectedDate, fetchAvailableTimes);

// Submit the booking when the user clicks on "Book Now"
const submitBooking = async () => {
  if (!selectedDate.value || !selectedTime.value) {
    alert("Please select a date and time.");
    return;
  }

  try {
    await apiClient.post("/appointments/book", {
      date: selectedDate.value,
      time: selectedTime.value,
    });
    alert("Appointment booked successfully!");
  } catch (error) {
    console.error("Booking failed:", error);
    alert("Failed to book appointment.");
  }
};
</script>

<template>
  <div class="booking-container">
    <h2>Book an Appointment</h2>

    <!-- Date Picker -->
    <Datepicker
      v-model="selectedDate"
      :enable-time-picker="false"
      placeholder="Select a date"
      :disabled-dates="unavailableDates"
    />

    <!-- Time Slots Section -->
    <div v-if="timeSlots.length" class="time-slot-container">
      <h3>Select a Time</h3>
      <div class="time-slot-list">
        <button 
          v-for="time in timeSlots" 
          :key="time" 
          @click="selectedTime = time"
          :class="{ selected: selectedTime === time }">
          {{ time }}
        </button>
      </div>
    </div>
    
    <!-- Book Now Button -->
    <button @click="submitBooking" class="submit-btn">Book Now</button>
  </div>
</template>

<style scoped>
.booking-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.time-slot-container {
  margin-top: 20px;
}

.time-slot-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
}

button.selected {
  background: #007bff;
  color: white;
}

.submit-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
</style>





  