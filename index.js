// Define chocolate prices (per item)
const chocolatePrices = {
    darkChocolate: 2.50,
    milkChocolate: 2.00,
    // Add more chocolate options here
};

// Function to update total price
function updateTotalPrice() {
    let totalPrice = 0;

    for (const chocolate in chocolatePrices) {
        const quantity = parseInt(document.getElementById(chocolate).value);
        totalPrice += quantity * chocolatePrices[chocolate];
    }

    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

// Event listeners for input changes
const chocolateInputs = document.querySelectorAll('input[type="number"]');
chocolateInputs.forEach((input) => {
    input.addEventListener('input', updateTotalPrice);
});
