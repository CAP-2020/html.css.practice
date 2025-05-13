 let bookCloseNav = document.querySelector(".book-close-btn");
 let bookOpenNav = document.querySelector(".book-open-btn");
  //  console.log(bookCloseNav);
  let menuBar = document.querySelector(".menu-bar")
  // console.log(menuBar);


  /* 初期状態でopen→非表示、close→表示、menu-bar→非表示 */
  /* activeをつけると表示・非表示を切り替える */
bookCloseNav.onclick = () => {
  menuBar.classList.toggle('active');
  bookCloseNav.classList.toggle('active'); /* close画像を切り替え */
  bookOpenNav.classList.toggle('active'); /* open画像を切り替え */
}

bookOpenNav.onclick = () => {
  menuBar.classList.toggle('active');
  bookCloseNav.classList.toggle('active');
  bookOpenNav.classList.toggle('active');
}