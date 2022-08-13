'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

const topSellersNodelist = document.querySelectorAll('.top-seller-item');
const topSellers = Array.prototype.slice.call(topSellersNodelist);;
const search = document.querySelector('.search-field');
const allnames = [];
topSellers.map(n => {
  allnames.push(n.querySelector('h3').innerText);
})

search.addEventListener('keyup', () => {
  topSellers.map((n, idx) => {
    let txt = n.querySelector('h3').innerText;
    txt.toLowerCase().indexOf(search.value.toLowerCase()) > -1 ? n.style.display = '' : n.style.display = 'none';
  })
})