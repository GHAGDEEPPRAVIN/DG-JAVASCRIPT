const cart = [];

    function addToCart(name, price) {
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      renderCart();
    }

    function renderCart() {
      const cartItemsDiv = document.getElementById('cart-items');
      cartItemsDiv.innerHTML = '';

      let total = 0;
      cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
          <span>${item.name} - $${item.price}</span>
          <div>
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            <button onclick="removeFromCart(${index})">Remove</button>
          </div>
        `;
        cartItemsDiv.appendChild(div);
      });

      document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
    }

    function updateQuantity(index, quantity) {
      if (quantity < 1) {
        removeFromCart(index);
        return;
      }
      cart[index].quantity = parseInt(quantity);
      renderCart();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }
 