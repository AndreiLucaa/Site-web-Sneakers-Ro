document.getElementById('filterButton').addEventListener('click', function() {
  const filterOptions = document.getElementById('filterOptions');
  filterOptions.classList.toggle('show');
  if (filterOptions.style.display === 'none' || filterOptions.style.display === '') {
    filterOptions.style.display = 'flex';
  } else {
    filterOptions.style.display = 'none';
  }
});


function filterProducts() {
  const brandFilter = document.getElementById('brandFilter').value;
  const colorFilter = document.getElementById('colorFilter').value;
  const products = document.querySelectorAll('.produs');

  products.forEach(product => {
    const productBrand = product.getAttribute('data-brand');
    const productColor = product.getAttribute('data-color');
    // const productSize = product.getAttribute('data-size');

    if ((brandFilter === '' || productBrand === brandFilter) &&
        (colorFilter === '' || productColor === colorFilter)) {
      product.parentElement.style.display = 'block';
    } else {
      product.parentElement.style.display = 'none';
    }
  });
}

function sortProducts(attribute, order) {
  const products = Array.from(document.querySelectorAll('.produs'));
  const sortedProducts = products.sort((a, b) => {
    const aValue = parseInt(a.getAttribute(`data-${attribute}`));
    const bValue = parseInt(b.getAttribute(`data-${attribute}`));
    return order === 'asc' ? aValue - bValue : bValue - aValue;
  });

  const productContainer = document.querySelector('.row');
  productContainer.innerHTML = '';
  sortedProducts.forEach(product => {
    productContainer.appendChild(product.parentElement);
  });
}