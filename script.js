// Select DOM elements
const sortSelect = document.getElementById('sortSelect'); // Sort dropdown
const filterPriceCheckbox = document.getElementById('filterPriceCheckbox'); // Price filter checkbox
const filterNewCheckbox = document.getElementById('filterNewCheckbox'); // New arrivals filter checkbox
const productGrid = document.getElementById('productGrid'); // Product grid container


const products = [
{ id: 1, name: 'HANDICRAFT BAG', description: '', price: 180, image: 'assets/images/product27.png', isNew: true },
{ id: 2, name: 'T-SHIRT L (43 CM)', description: '', price: 520, image: 'assets/images/product1.png', isNew: false },
{ id: 3, name: 'T-SHIRT XL (45cm)', description: '', price: 520, image: 'assets/images/product1.png', isNew: true },  
{ id: 4, name: 'T-SHIRT XXL (46 CM)', description: '', price: 520, image: 'assets/images/product1.png', isNew: false },
{ id: 10, name: '3D CRYSTAL ', description: '', price: 850, image: 'assets/images/product10.png', isNew: true },

{ id: 6, name: 'WOODY FLAIR', description: '', price: 15, image: 'assets/images/product37.png', isNew: false },
{ id: 7, name: 'LOGO MAGNET', description: '', price: 75, image: 'assets/images/product21.png', isNew: true },
{ id: 8, name: 'JUTE BAG', description: '', price: 160, image: 'assets/images/product28.png', isNew: false },


{ id: 12, name: 'TABLE CLOCK', description: '', price: 430, image: 'assets/images/product3.png', isNew: true },
{ id: 13, name: 'SHAWL', description: '', price: 150, image: 'assets/images/product7.png', isNew: false },
{ id: 15, name: 'SMALL  MOMENTO', description: '', price: 600, image: 'assets/images/product32.png', isNew: true },
{ id: 16, name: 'QUALITY PEN MOU', description: '', price: 600, image: 'assets/images/product38.png', isNew: false },
{ id: 14, name: 'SMALL ROUND MOMENTO', description: '', price: 600, image: 'assets/images/product31.png', isNew: true },
{ id: 11, name: 'DIGITAL ALARM CLOCK', description: '', price: 500, image: 'assets/images/product15.png', isNew: false },
{ id: 9, name: 'CERAMIC MUG', description: '', price: 130, image: 'assets/images/product17.png', isNew: true },
{ id: 5, name: 'PARKER PEN', description: '', price: 800, image: 'assets/images/product34.png', isNew: false },

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