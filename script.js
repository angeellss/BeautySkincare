document.getElementById('shop-now').addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.products').offsetTop,
    behavior: 'smooth'
  });
});

const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Produk ditambahkan ke keranjang!');
  });
});