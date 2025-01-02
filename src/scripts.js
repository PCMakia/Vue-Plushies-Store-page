/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// List of product objects

// Function to save form data to LocalStorage

// Listen for the form submission
// Get the form and customer data output element
// Get form by its class name
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.outer-form');
    const submitButton = form.querySelector('button[type="submit"]');

    if (form && submitButton) {
        // Add event listener to form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get form data
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const feedback = form.querySelector('#feedback').value;

            // Save the form data (for example, into a local array)
            const customerFormData = {
                name: name,
                email: email,
                feedback: feedback,
            };

            // Save the data to localStorage
            let storedData = JSON.parse(localStorage.getItem('customerFeedback')) || [];
            storedData.push(customerFormData);
            localStorage.setItem('customerFeedback', JSON.stringify(storedData));

            // Display the submitted data in the console (you can later change this to display on the page)
            console.log("Customer Feedback Submitted:");
            console.log(customerFormData);
        });
    } else {
        console.error("Form or submit button not found in the DOM.");
    }
});



