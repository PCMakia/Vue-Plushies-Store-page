<script setup>
import Series from '../components/series.vue'
import { JewelpetS } from '@/database';
</script>
<template>
  
  <Series />
    <!-- Product Review Section -->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div class="col mb-5" v-for="(product, index) in JewelpetS" :key="index">
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
  

  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">
        Copyright &copy; Bao Le & Sunny Nguyen
      </p>
    </div>
  </footer>
</template>

<script>
import { addToCart, getCart, loadCart } from '@/cart';

export default {
  name: "Jewelpet",
  created() {
    loadCart(); // Ensure cart is loaded when the page is initialized
  },
  data() {
    return {
      cart: getCart(),
    };
  },
  methods: {
    handleAddToCart(productId) {
      addToCart(productId);
      this.updateCartCount();
    },
    updateCartCount() {
      this.cart = getCart(); // Refresh cart data after adding an item
    }
  },
  computed: {
    cartItemsCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
  }
};
</script>

<style src="@/assets/styles.css"></style>
