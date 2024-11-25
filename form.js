function updateTotal() {
    let total = 0;
    const rows = document.querySelectorAll('.item-row');
    rows.forEach(row => {
        const quantity = row.querySelector('.quantity-input');
        const cost = row.querySelector('.cost-input');
        total += parseInt(quantity.value || 0) * parseInt(cost.value || 0);
    });
    document.getElementById('total-amount').value = total;
}

function goBack() {
    window.history.back();
}

function handleCategoryChange() {
    const category = document.getElementById("category").value;
    const productName = document.getElementById("product-name");

    // Reset products list
    productName.innerHTML = '<option value="">-- Select Product --</option>';

    if (category === "education") {
        productName.innerHTML += '<option value="book">Books</option>';
        productName.innerHTML += '<option value="course-material">Course Material</option>';
    } else if (category === "shopping") {
        productName.innerHTML += '<option value="clothing">Clothing</option>';
        productName.innerHTML += '<option value="electronics">Electronics</option>';
    } else if (category === "services") {
        productName.innerHTML += '<option value="consulting">Consulting</option>';
        productName.innerHTML += '<option value="software">Software</option>';
    }
}

// // Function for Pay Now button
// function payNow() {
//     window.location.href = "https://www.sbiepay.sbi/secure/home";
//}
// Function to update the total price and log product details where quantity is greater than 0
function updateTotal() {
    const productRows = document.querySelectorAll('.item-row');
    let totalAmount = 0;
    
    // Loop through each product row
    productRows.forEach((row, index) => {
        // Get quantity input and price input
        const quantityInput = row.querySelector('.quantity-input');
        const costInput = row.querySelector('.cost-input');
        
        // Get quantity and price values
        const quantity = parseInt(quantityInput.value, 10);
        const price = parseInt(costInput.value, 10);
        
        // If quantity is greater than 0, log the product details
        if (quantity > 0) {
            console.log(`Product ${index + 1}:`);
            console.log(`Quantity: ${quantity}`);
            console.log(`Price: ${price}`);
            console.log(`Total for this product: ${quantity * price}`);
        }
        
        // Calculate and accumulate the total amount for all products
        totalAmount += quantity * price;
    });

    // Display the total amount in the form
    const totalInput = document.getElementById('total-amount');
    totalInput.value = totalAmount;
}

// Add event listener to the submit button
document.querySelector('.btn-submit').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form submission to print details first
    
    console.log('Form submitted. Here are the product details where quantity is greater than 0:');
    
    // Log product details where quantity is greater than 0 on submit
    updateTotal();

    // Optionally, you can submit the form after logging the details
    // document.getElementById('sbi-connect-form').submit();
});

// Example: Adding event listeners for the quantity inputs
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', updateTotal);
});

// Optionally, you can call updateTotal initially to display the total amount on page load
updateTotal();
