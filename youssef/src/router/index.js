import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import AppointmentDetails from '../views/AppointmentDetails.vue';
import AddAppointment from '../views/AddAppointment.vue';
import Layout from '../layout/Layout.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'appointment/:id',
        name: 'AppointmentDetails',
        component: AppointmentDetails,
        props: true
      },
      {
        path: 'add-appointment',
        name: 'AddAppointment',
        component: AddAppointment
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;