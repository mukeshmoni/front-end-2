// Select DOM elements
const sortSelect = document.getElementById('sortSelect'); // Sort dropdown
const filterPriceCheckbox = document.getElementById('filterPriceCheckbox'); // Price filter checkbox
const filterNewCheckbox = document.getElementById('filterNewCheckbox'); // New arrivals filter checkbox
const productGrid = document.getElementById('productGrid'); // Product grid container


const products = [
  { id: 1, name: 'Product 1', description: '', price: 25.99, image: 'assets/images/product1.png', isNew: true },
  { id: 2, name: 'Product 2', description: '', price: 45.00, image: 'assets/images/product2.png', isNew: false },
  { id: 3, name: 'Product 3', description: '', price: 30.50, image: 'assets/images/product3.png', isNew: true },
  { id: 4, name: 'Product 4', description: '', price: 55.00, image: 'assets/images/product7.png', isNew: true },
  { id: 9, name: 'Product 9', description: '', price: 18.75, image: 'assets/images/product24.png', isNew: false },
  { id: 10, name: 'Product 10', description: '', price: 72.45, image: 'assets/images/product28.png', isNew: false },
  { id: 11, name: 'Product 11', description: '', price: 27.50, image: 'assets/images/product21.png', isNew: true },
  { id: 12, name: 'Product 12', description: '', price: 61.75, image: 'assets/images/product31.png', isNew: true },
  { id: 13, name: 'Product 13', description: '', price: 80.00, image: 'assets/images/product32.png', isNew: false },
  { id: 14, name: 'Product 14', description: '', price: 34.99, image: 'assets/images/product10.png', isNew: false },
  { id: 15, name: 'Product 15', description: '', price: 89.99, image: 'assets/images/product35.png', isNew: true },
  { id: 16, name: 'QUALITY PEN', description: '', price: 600, image: 'assets/images/product38.png', isNew: false },
  { id: 5, name: 'Product 5', description: '', price: 77.99, image: 'assets/images/product20.png', isNew: false },
   { id: 8, name: 'Product 8', description: '', price: 50.00, image: 'assets/images/product16.png', isNew: false },
  { id: 7, name: 'Product 7', description: '.', price: 39.49, image: 'assets/images/product15.png', isNew: true },
  { id: 6, name: 'Product 6', description: '', price: 36.00, image: 'assets/images/product33.png', isNew: true },
];


// Function to display products in the main product grid
function displayProducts(productsToDisplay) {
  productGrid.innerHTML = ''; // Clear the grid
  productsToDisplay.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('col-1', 'col-md-1', 'col-lg-3'); // 4 columns on medium screens, 2 on small screens

    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-price">₹${product.price.toFixed(2)}</p>
          <!-- Buy Now Button -->
          
        </div>
      </div>
    `;

    productGrid.appendChild(card); // Add card to grid
  });
}

// Function to handle Buy Now button click
function buyNow(productId) {
  // You can pass the productId or other details to the form.html page using query parameters or localStorage
  localStorage.setItem('selectedProductId', productId); // Store the selected product's ID in localStorage
  window.location.href = 'form.html'; // Navigate to form.html page
}

// Function to apply filters and sorting
function applyFiltersAndSort() {
  let filteredProducts = [...products]; // Copy the products array

  // Apply filters
  if (filterPriceCheckbox.checked) {
    filteredProducts = filteredProducts.filter(product => product.price < 50);
  }
  if (filterNewCheckbox.checked) {
    filteredProducts = filteredProducts.filter(product => product.isNew);
  }

  // Apply sorting
  const sortOption = sortSelect.value;
  if (sortOption === 'priceLow') {
    filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); // Low to high
  } else if (sortOption === 'priceHigh') {
    filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)); // High to low
  } else if (sortOption === 'newest') {
    filteredProducts.sort((a, b) => b.id - a.id); // Newest first
  }

  displayProducts(filteredProducts); // Display the filtered and sorted products
}

// Initial display of products
applyFiltersAndSort();

// Event listeners for filters and sort dropdown
sortSelect.addEventListener('change', applyFiltersAndSort);
filterPriceCheckbox.addEventListener('change', applyFiltersAndSort);
filterNewCheckbox.addEventListener('change', applyFiltersAndSort);