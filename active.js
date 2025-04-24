const menuToggle = document.querySelector('.toggle');
const showCase = document.querySelector('.showCase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showCase.classList.toggle('active');
})