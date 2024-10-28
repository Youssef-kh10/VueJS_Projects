<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
    <Footer /> <!-- Footer at the bottom -->
  </div>
</template>

<style scoped>
.app-container {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  height: 100vh; /* Full height */
}

.main-content {
  margin-left: 250px; /* Space for sidebar */
  padding: 20px; /* Padding for main content */
  flex-grow: 1; /* Allow this to grow and take available space */
  overflow-y: auto; /* Enable scrolling if content overflows */
}

.footer {
  background-color: #333; /* Dark background for footer */
  color: #fff; /* White text */
  text-align: center; /* Center text */
  padding: 10px 0; /* Padding */
}
</style>
