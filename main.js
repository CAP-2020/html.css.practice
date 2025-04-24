let bookCloseNav = document.querySelector('.book-close-btn');
let bookOpenNav = document.querySelector('.book-open-btn');
let menuBar = document.querySelector('.menu-bar');
/* menu-barはcssで-200pxに設定中。activeで解除 */

/* closeを押した時の設定。
  メニューバーのactiveクラスを切り替えOpen、Closeのactiveも切り替える。
*/
bookCloseNav.onclick = () => {
  menuBar.classList.toggle('active');
  bookCloseNav.classList.toggle('active');
  bookOpenNav.classList.toggle('active');
}

/* Openを押した時の設定。
  メニューバーのactiveを切り替え。
  open、closeのactiveも切り替える。 */
bookOpenNav.onclick = () => {
  menuBar.classList.toggle('active');
  bookOpenNav.classList.toggle('active');
  bookCloseNav.classList.toggle('active');
  }
