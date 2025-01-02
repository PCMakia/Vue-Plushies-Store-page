
import { reactive } from 'vue';

// Make cart reactive using reactive instead of Vue.observable
var cart = reactive(JSON.parse(localStorage.getItem('cart') || '[]'));
export function getCart() {
    return cart;
  }

// Function to add item to the cart
export function addToCart(productId, quantity = 1) {
    const existingProductIndex = cart.findIndex(item => item.id === productId);
  
    if (existingProductIndex !== -1) {
      // Product already exists, update only the quantity
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Product does not exist, push a new entry with both id and quantity
      cart.push({ id: productId, quantity });
    }
    
    saveCart();
  }
  
  
  

// Function to remove item from cart
export function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

// Function to clear the cart
export function clearCart() {
    cart.length = 0;  // Empty the cart array
    saveCart();  // Save empty cart to localStorage
    window.dispatchEvent(new Event('cart-updated'));  // Trigger the cart-updated event
  }

// Save the cart in localStorage to persist it across sessions
export function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  

// Load cart from localStorage
export function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Ensure the cart is populated without resetting it
    cart.length = 0; // Clear the reactive cart array
    savedCart.forEach(item => cart.push(item)); // Repopulate the cart with saved items
  }
  function updateCartListeners() {
    window.dispatchEvent(new Event('cart-updated'));
  }


// Load cart when the page loads
loadCart();


