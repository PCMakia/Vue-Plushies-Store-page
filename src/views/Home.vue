<script setup>
import Series from '../components/series.vue'
import backgroundImage from "@/assets/Background.jpg";
import logoImageMain from "@/assets/LogoImage.png";
</script>
<template>
  

    <!-- Header -->
    <header class="bg-dark pad" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
      <div class="noti gather">
        <div class="text-center text-white vertdiv">
          <button class="bt mar" @click="scrollToSection('productReview')">
            <h2 class="display-8 fw-bolder">New products</h2>
          </button>
          <button class="bt mar" @click="scrollToSection('productReview')">
            <h2 class="display-8 fw-bolder">Shop now!</h2>
          </button>
        </div>
        <img class="loimg" :src="logoImageMain" alt="Logo Image" />
      </div>
    </header>

    <Series />

    <div class="headerl" id="shop">
      <h1>Products</h1>
    </div>

    <!-- Product Review Section -->
    <section class="py-5" id="productReview">
      <div class="container px-4 px-lg-5 mt-5" >
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div class="col mb-5" v-for="(product, index) in products" :key="index">
            <div class="card h-100">
              <img :src="product.image" class="card-img-top" :alt="product.name" />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">{{ product.name }}</h5>
                  <span v-if="product.salePrice" class="text-muted text-decoration-line-through">{{ product.regularPrice }}</span>
                  {{ product.salePrice || product.regularPrice }}
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <p>{{ product.description }}</p>
                  <button class="btn btn-outline-dark mt-auto" @click="handleAddToCart(product.id)">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us Form -->
    <form @submit.prevent="submitFeedback" id="customerForm" class="outer-form">
      <h2>Contact Us</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="feedbackForm.name" type="text" id="name" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="feedbackForm.email" type="email" id="email" placeholder="Enter your email" required />
      </div>

      <!-- Feedback Section -->
      <div class="inner-form">
        <h3>Feedback</h3>
        <div class="form-group">
          <label for="feedback">Your Feedback</label>
          <textarea v-model="feedbackForm.message" id="feedback" rows="4" placeholder="Enter your feedback" required></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </div>
    </form>
    <!-- Display Submitted Feedback -->
    <section v-if="ctm_feedback.length" class="feedback-section">
      <h3>Customer Feedbacks</h3>
      <ul>
        <li v-for="(feedback, index) in ctm_feedback" :key="index">
          <strong>{{ feedback.name }}</strong> ({{ feedback.email }}): {{ feedback.message }}
        </li>
      </ul>
    </section>

    
  
</template>

<script>
// Import images statically
  // Make sure the filename is correct here
import { products } from '@/database.js';
import { addToCart, getCart, loadCart } from '@/cart';
import { ctm_feedback } from '@/database.js';
import { ref, watchEffect } from 'vue';

export default {
  name: "HomePage",
  created() {
    loadCart(); // Ensure cart is loaded when the page is initialized
  },
  data() {
    return {
      
      cart: [],
     
      cart: getCart(),
      feedbackForm: {
        name: '',
        email: '',
        message: ''
      },
      ctm_feedback,
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
    submitFeedback() {
      // Add the current form data to the feedback list
      this.ctm_feedback.push({ ...this.feedbackForm });

      // Clear form fields after submission
      this.feedbackForm.name = '';
      this.feedbackForm.email = '';
      this.feedbackForm.message = '';
    }
  },

  computed: {
    cartItemsCount() {
      return getCart().reduce((total, item) => total + item.quantity, 0);
    }
  }
};
</script>

<!-- Link to CSS file -->
<style src="@/assets/styles.css"></style>
