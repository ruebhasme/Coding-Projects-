document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.background-image');
    let index = 0;

    function changeImage() {
        images.forEach(img => img.style.opacity = 0.2); 
        images[index].style.opacity = 1; 
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 4000); 
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const paymentMessage = document.getElementById('payment-message');

    // Clear previous message
    paymentMessage.textContent = '';

    // Validate card number
    const cardNumberPattern = /^[0-9]{16}$/;
    if (!cardNumberPattern.test(cardNumber.replace(/\s/g, ''))) {
        paymentMessage.textContent = 'Invalid card number. Please enter a 16-digit card number.';
        paymentMessage.style.color = 'white';
        return;
    }

    // Validate expiry date (MM/YY)
    const expiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryPattern.test(expiry)) {
        paymentMessage.textContent = 'Invalid expiry date. Please enter a valid date in MM/YY format.';
        paymentMessage.style.color = 'white';
        return;
    }

    // Validate CVV
    const cvvPattern = /^[0-9]{3}$/;
    if (!cvvPattern.test(cvv)) {
        paymentMessage.textContent = 'Invalid CVV. Please enter a 3-digit CVV.';
        paymentMessage.style.color = 'white';
        return;
    }

    // If all validations pass, redirect to thank you page
    window.location.href = 'thankyou.html';
});
