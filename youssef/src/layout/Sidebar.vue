<template>
    <aside class="sidebar">
      <div class="sidebar-header">
        <i class="fa-solid fa-people-roof logo-icon"></i> <!-- Add class for logo -->
      </div>
      <ul class="sidebar-menu">
        <li>
          <router-link to="/" class="sidebar-link">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/add-appointment" class="sidebar-link">
            <i class="fas fa-plus"></i> Add Appointment
          </router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <style scoped>
  .sidebar {
    background-color: #4CAF50;
    color: #ffffff;
    width: 250px; /* Sidebar width */
    height: 100vh; /* Full height */
    padding: 20px;
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.2);
    position: fixed; /* Keep sidebar fixed on the left */
    left: 0; /* Align sidebar to the left */
    top: 0; /* Align sidebar to the top */
    z-index: 1000; /* Ensure it is above other content */
  }
  
  .sidebar-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .logo-icon {
    font-size: 60px; /* Adjust size as needed */
    color: #ffffff; /* Ensure the icon color is white */
  }
  
  .sidebar-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-link {
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    display: block;
  }
  
  .sidebar-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }
  
  .sidebar-link.active {
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }
  
  .sidebar-link i {
    margin-right: 10px; /* Space between icon and text */
    vertical-align: middle; /* Aligns icon vertically with text */
  }
  </style>
  