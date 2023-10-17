document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-list li');
    const cartList = document.querySelector('.cart-list');
    const totalAmount = document.getElementById('total-amount');

    let cart = [];

    productItems.forEach(item => {
        const name = item.querySelector('.product-name').textContent;
        const price = parseFloat(item.querySelector('.product-price').textContent.slice(1)); // Remove the dollar sign and parse as float

        const button = item.querySelector('.add-to-cart');
        button.addEventListener('click', () => {
            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
            total += item.price;
        });

        totalAmount.textContent = total.toFixed(2);
    }
});

