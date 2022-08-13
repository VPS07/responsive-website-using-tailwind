'use script';

const hamMenu = document.getElementById('hammenu');
const listMenu = document.querySelector('.list-menu');
hamMenu.addEventListener('click', function () {
  listMenu.classList.toggle('hidden');
});
