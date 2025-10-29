document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 100 && scrollTop > lastScrollTop) {
      header.style.top = '-100px';
    } else {
      header.style.top = '0';
    }

    lastScrollTop = scrollTop;
  });
});



const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const products = document.querySelectorAll('.card');

products.forEach(product => {
  const addCartBtn = product.querySelector('.btn-add-cart');
  const qtyInput = product.querySelector('.qty-input');

  addCartBtn.addEventListener('click', () => {
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);
    const quantity = parseInt(qtyInput.value);

    const item = { name, price, quantity };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'carrinho.html';
  });
});
