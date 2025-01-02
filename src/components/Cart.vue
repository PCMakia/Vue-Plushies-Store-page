<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <ul class="cart-list">
      <li v-for="item in cartItems" :key="item.id">
        Product ID: {{ item.id }} - Quantity: {{ item.quantity }}
      </li>
    </ul>
    <button @click="handleClearCart" class="btn btn-clear">Clear Cart</button>
    <router-link to="/" class="btn btn-home">Go to Home</router-link>
  </div>
</template>

<script>
import { getCart, clearCart } from '@/cart';

export default {
  data() {
    return {
      cartItems: getCart()
    };
  },
  methods: {
    handleClearCart() {
      clearCart();
      this.cartItems = getCart(); // Refresh cartItems after clearing
    }
  },
  watch: {
    cartItems() {
      this.cartItems = getCart(); // Ensure cart updates if there's a change
    }
  }
};
</script>


<style scoped>
.cart {
  text-align: center;
  padding: 20px;
  background-color: #FEEEDF; /* Background color */
  min-height: 100vh; /* Full viewport height */
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-list li {
  padding: 10px;
  font-size: 1.2em;
}

.btn {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  display: inline-block;
  width: 150px; /* Ensures consistent button width */
  text-align: center;
}

.btn-clear {
  background-color: #ff4d4d;
  color: white;
}

.btn-home {
  background-color: #4caf50;
  color: white;
  text-decoration: none;
}

.btn-clear:hover {
  background-color: #ff1a1a;
}

.btn-home:hover {
  background-color: #45a049;
}
</style>

