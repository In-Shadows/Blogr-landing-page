'use strict';

const connect = document.querySelector('.connect');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-menu__connect');
const mobileMenuDropdown = document.querySelector('.mobile-menu__dropdown');

//
connect.addEventListener('click', function () {
  connect.classList.toggle('active');
});

//PREVENTING THE DEFAULT BEHAVIOUR OF ANCHOR ELEMENTS
document
  .querySelectorAll('a')
  .forEach(a => a.addEventListener('click', e => e.preventDefault()));

//SHOWING THE MOBILE MENU WHEN tHE MOBILE MENU ICON IS CLICKED
mobileMenuIcon.addEventListener('click', function () {
  if (
    mobileMenuDropdown.classList.contains('active-dd') &&
    mobileMenu.classList.contains('active')
  ) {
    mobileMenuDropdown.classList.remove('active-dd');
    mobileMenuBtn.classList.remove('active');
  }

  mobileMenu.classList.toggle('active');

  if (mobileMenu.classList.contains('active')) {
    this.src = 'images/icon-close.svg';
  } else {
    this.src = 'images/icon-hamburger.svg';
  }
});

//MOBILE MENU DROPDOWN ON CLICKING CONNECT
mobileMenuBtn.addEventListener('click', function (e) {
  if (e.target.closest('.mobile-menu__navigation__list-item')) {
    this.classList.toggle('active');
    mobileMenuDropdown.classList.toggle('active-dd');
  }
});
