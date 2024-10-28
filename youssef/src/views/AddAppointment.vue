<template>
    <div>
      <h2>Ajouter un Rendez-vous</h2>
      <form @submit.prevent="addAppointment" class="appointment-form">
        <div>
          <label>Nom du Patient :</label>
          <input v-model="patientName" type="text" required />
        </div>
        <div>
          <label>Date :</label>
          <input v-model="date" type="date" required />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const patientName = ref('');
  const date = ref('');
  
  const addAppointment = () => {
    // Récupérer les rendez-vous existants
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    // Créer un nouveau rendez-vous
    const newAppointment = {
      id: Date.now(), // Simuler un ID unique
      patientName: patientName.value,
      date: date.value
    };
    
    // Ajouter le nouveau rendez-vous à la liste
    existingAppointments.push(newAppointment);
    
    // Sauvegarder dans le localStorage
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));
    
    // Rediriger vers le tableau de bord
    router.push({ name: 'Dashboard' });
  };
  </script>
  
  <style scoped>
  .appointment-form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
  
  .appointment-form div {
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>