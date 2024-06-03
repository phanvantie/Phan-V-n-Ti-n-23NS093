document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const backToShopButton = document.getElementById('back-to-shop');

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<li>Giỏ hàng trống! Vui lòng quay lại cửa hàng.</li>';
        } else {
            cartItems.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                    <span>${item.name} - ${item.price}</span>
                    <button class="remove-item" data-index="${index}">Xóa</button>
                `;
                cartItemsContainer.appendChild(listItem);
            });
        }

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cartItems.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cartItems));
                updateCartDisplay();
            });
        });
    }

    updateCartDisplay();

    backToShopButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
