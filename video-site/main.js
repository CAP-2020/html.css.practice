const menuToggle = document.querySelector('.toggle');
const showCase = document.querySelector('.showCase');
const menuOpacity = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showCase.classList.toggle('active');
  menuOpacity.classList.toggle('active'); // ← 追加！メニュー表示切り替え
});
