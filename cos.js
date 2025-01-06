document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('addToCartBtn');
  
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(event) {
            event.preventDefault();
  
            const productName = document.querySelector('.nume-prod').textContent;
            const productPrice = document.querySelector('.pret').textContent;
            const productSize = document.querySelector('.marime').value;
            const productImage = document.getElementById('ProductImg').src;
  
            if (productSize === 'Select Size') {
                alert('Alege o marime!');
                return;
            }
  
            const product = {
                name: productName,
                price: productPrice,
                size: productSize,
                image: productImage,
                quantity: 1
            };
  
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
  
            alert('Ai adaugat produsul in cos!');
        });
    }
  
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
  
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;
  
        if (cart.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td colspan="4" style="text-align: center; color: #23242a;"><strong>Cosul tau este gol!</strong></td>
            `;
            cartItemsContainer.appendChild(row);
        } else {
            cart.forEach((item, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td class="cart-info">
                <img src="${item.image}" width="80" alt="${item.name}">
                <div>
                    <p class="numeProdCos" >${item.name}</p>
                    
                    <br>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
                </td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td>${parseFloat(item.price) * item.quantity} RON</td>
            `;
            
            cartItemsContainer.appendChild(row);
            total += parseFloat(item.price) * item.quantity;
            });
        }
  
        cartTotalElement.textContent = `Total: ${total} RON`;
  
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }
  
    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
  
    updateCart();
});