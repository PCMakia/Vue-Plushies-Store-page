<script setup>
// No need to import HelloWorld or TheWelcome since they are deleted
import logoImage from "@/assets/Logo.png";

// You don't need to import the Home component directly here since you are using Vue Router 
// and <router-view /> will handle loading components dynamically based on the route.
</script>
<!-- Link to any global styles or base styles -->
<link rel="stylesheet" href="./assets/base.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=shopping_cart" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

<template>
  <!-- Navbar -->
  <div class="backgroundmain">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light backgroundnav ">
      <div class="container px-4 px-lg-5">
        <router-link class="navbar-brand" to="/">
          <img class="logo" :src="logoImage" alt="Logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav marleft">
            <li class="nav-item">
              <router-link class="nav-link bt" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link bt" href="#shop">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link bt" href="#">Best-seller</a>
            </li>
            <li class="nav-item">
              <a class="nav-link bt" href="https://dictionary.cambridge.org/us/dictionary/english/plushie">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link bt" href="#customerForm">Contact</a>
            </li>
          </ul>
            
           <router-link to="/cart" class="btn btn-outline-dark">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h660L669-440H324l-44 80h480v80H145l119-216-144-304H40v-80h130l38 80Z"/></svg>
            Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">{{ cartItemsCount }}</span>
           </router-link>
           
        </div>
      </div>
    </nav>

    <!-- Main App Layout -->
    <div>
      <!-- router-view will load components based on the current route -->
      <router-view />
    </div>
    
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Bao Le & Sunny Nguyen 2024</p>
      </div>
    </footer>
  </div>
</template>


<script>
import { addToCart, getCart, loadCart } from '@/cart';
export default {
  name: "HomePage",
  created() {
    loadCart(); // Ensure cart is loaded when the page is initialized
  },
  data() {
    return {
      
      cart: [],
     
      cart: getCart(),
    
     
    };
  },
  methods: {
    handleAddToCart(productId) {
      addToCart(productId); // Add product to cart
      
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    
  },

  computed: {
    cartItemsCount() {
      return getCart().reduce((total, item) => total + item.quantity, 0);
    }
  }
};

</script>
