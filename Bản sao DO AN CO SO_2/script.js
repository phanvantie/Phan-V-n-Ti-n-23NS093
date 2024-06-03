const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const comment = document.querySelector('#list-comment');
const commentItem = document.querySelectorAll('#list-comment .item');
const cartButton = document.getElementById('giohang');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let translateY = 0;
let count = commentItem.length;

// Hàm thêm vào giỏ hàng
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

// Thêm sự kiện click vào giá tiền của sản phẩm
document.querySelectorAll('#list-products .item .price').forEach(price => {
    price.addEventListener('click', function () {
        const productElement = this.closest('.item');
        const productName = productElement.querySelector('.desc').textContent;
        const productPrice = this.textContent;
        const productImage = productElement.querySelector('img').src;
        addToCart({ name: productName, price: productPrice, image: productImage });
    });
});

// Sự kiện click vào biểu tượng giỏ hàng
cartButton.addEventListener('click', function () {
    window.location.href = 'cart.html';
});


next.addEventListener('click', function (event) {
    event.preventDefault();
    if (count == 1) {
        // Xem hết bình luận
        return false;
    }
    translateY += -400;
    comment.style.transform = `translateY(${translateY}px)`;
    count--;
});

prev.addEventListener('click', function (event) {
    event.preventDefault();
    if (count == 3) {
        // Xem hết bình luận
        return false;
    }
    translateY += 400;
    comment.style.transform = `translateY(${translateY}px)`;
    count++;
});
