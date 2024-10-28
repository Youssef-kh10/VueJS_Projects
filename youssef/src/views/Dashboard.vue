<template>
    <div>
      <h1>Liste des Rendez-vous</h1>
      <router-link to="/add-appointment" class="add-button">
        Ajouter un Rendez-vous
      </router-link>
      <div class="appointment-grid">
        <div
          class="appointment-card"
          v-for="appointment in appointments"
          :key="appointment.id"
        >
          <router-link
            :to="{ name: 'AppointmentDetails', params: { id: appointment.id }}"
            class="appointment-link"
          >
            <h3>{{ appointment.patientName }}</h3>
            <p>Date: {{ formatDate(appointment.date) }}</p>
          </router-link>
          <button
            @click="deleteAppointment(appointment.id)"
            class="delete-button"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const appointments = ref([]);
  
  const loadAppointments = () => {
    const stored = localStorage.getItem('appointments');
    appointments.value = stored ? JSON.parse(stored) : [];
  };
  
  const deleteAppointment = (id) => {
    appointments.value = appointments.value.filter(app => app.id !== id);
    localStorage.setItem('appointments', JSON.stringify(appointments.value));
  };
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR');
  };
  
  onMounted(() => {
    loadAppointments();
  });
  </script>
  
  <style scoped>
  .appointment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .appointment-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.2s;
  }
  
  .appointment-card:hover {
    transform: scale(1.05);
  }
  
  .appointment-link {
    text-decoration: none;
    color: #333;
  }
  
  .add-button {
    display: inline-block;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  
  .delete-button {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .delete-button:hover {
    background-color: #cc0000;
  }
  </style>
  