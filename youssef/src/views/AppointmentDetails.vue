<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header bg-white py-3">
              <div class="d-flex justify-content-between align-items-center">
                <h2 class="h4 mb-0">Détails du Rendez-vous</h2>
                <router-link to="/" class="btn btn-outline-primary btn-sm">
                  <i class="fas fa-arrow-left me-2"></i>
                  Retour
                </router-link>
              </div>
            </div>
            <div class="card-body" v-if="appointment">
              <div class="appointment-info">
                <div class="info-item">
                  <i class="fas fa-user text-primary"></i>
                  <div>
                    <label>Patient</label>
                    <p>{{ appointment.patientName }}</p>
                  </div>
                </div>
                <div class="info-item">
                  <i class="fas fa-calendar text-primary"></i>
                  <div>
                    <label>Date</label>
                    <p>{{ formatDate(appointment.date) }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Update Form -->
              <h3>Modifier Rendez-vous</h3>
              <form @submit.prevent="updateAppointment">
                <div class="mb-3">
                  <label for="patientName" class="form-label">Nom du Patient</label>
                  <input
                    type="text"
                    id="patientName"
                    v-model="updatedPatientName"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="appointmentDate" class="form-label">Date</label>
                  <input
                    type="date"
                    id="appointmentDate"
                    v-model="updatedDate"
                    class="form-control"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-warning">Mettre à jour</button>
                <button 
                  @click="deleteAppointment"
                  class="btn btn-danger"
                >
                  <i class="fas fa-trash me-2"></i>
                  Supprimer
                </button>
              </form>
            </div>
            <div class="card-body" v-else>
              <p>Rendez-vous non trouvé.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        appointment: null, // Initialize appointment as null
        updatedPatientName: '', // Store updated patient name
        updatedDate: '', // Store updated appointment date
      };
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString('fr-FR'); // Format date to French locale
      },
      deleteAppointment() {
        console.log("Appointment Deleted");
        // Implement delete logic here
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        const filteredAppointments = appointments.filter(app => app.id !== this.appointment.id);
        localStorage.setItem('appointments', JSON.stringify(filteredAppointments));
        this.appointment = null; // Clear appointment
        alert("Rendez-vous supprimé avec succès.");
      },
      updateAppointment() {
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
  
        // Find and update the specific appointment
        const index = appointments.findIndex(app => app.id === this.appointment.id);
        if (index !== -1) {
          // Update the appointment details
          appointments[index].patientName = this.updatedPatientName;
          appointments[index].date = this.updatedDate;
          
          // Save the updated list back to local storage
          localStorage.setItem('appointments', JSON.stringify(appointments));
          this.appointment = appointments[index]; // Update the displayed appointment
          alert("Rendez-vous mis à jour avec succès.");
        }
      },
      loadAppointment(id) {
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
  
        // Debugging logs
        console.log("Loaded Appointments:", appointments);
        console.log("Searching for ID:", id);
        
        const foundAppointment = appointments.find(app => String(app.id) === String(id));
  
        // Log the found appointment
        console.log("Found Appointment:", foundAppointment);
  
        if (foundAppointment) {
          this.appointment = foundAppointment;
          this.updatedPatientName = foundAppointment.patientName; // Set initial values for form
          this.updatedDate = foundAppointment.date;
          console.log("Setting appointment to:", this.appointment);
        } else {
          console.log("No appointment found for this ID.");
          this.appointment = null; // Set to null if not found
        }
      }
    },
    mounted() {
      const id = this.$route.params.id; // Get ID from the route parameters
      this.loadAppointment(id); // Load the appointment by ID
    }
  };
  </script>
  
  <style scoped>
  .appointment-info {
    display: grid;
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .info-item i {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
  
  .info-item label {
    color: #6c757d;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }
  
  .info-item p {
    font-size: 1.1rem;
    margin: 0;
  }
  
  .gap-2 {
    gap: 0.5rem !important;
  }
  </style>
  