  /* APIで画像を取得 */
fetch("https://api.unsplash.com/photos/random?query=???")
/* fetchのアドレスを記述！ */
.then(response => response.json())
.then(data => {
  console.log(data);
  const imageUrl = data.urls?.regular;
  if(imageUrl){
    document.querySelector('.fill').style.backgroundImage = `url(${imageUrl})`
  }
})
.catch(error => {
  // エラー処理
  console.error("通信エラー:",error);
})


// DOM要素の取得
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
// console.log(empties);

// ドラッグのトリガー
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

/* 1つ1つのemptyの要素を取得 */
for (const empty of empties){
  empty.addEventListener("dragover" ,dragOver);
  empty.addEventListener("dragenter" ,dragEnter);
  empty.addEventListener("dragleave" ,dragLeave);
  empty.addEventListener("drop" ,dragDrop);
}

/* ドラッグの関数 */
function dragStart(){
  console.log("start");
  fill.className += " hold";
  
  setTimeout(() => {  //元の画像を非表示にする。
    fill.className = "invisible";
  },0)
}

function dragEnd(){
  console.log("end");
//ドラッグすると非表示になるので。話した時再付与  
  fill.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
  console.log("over")
}
function dragEnter() {
  console.log("enter")
  this.className += " hoverd";
}
function dragLeave() {
  console.log("leave");
  this.className = "empty";
}
function dragDrop() {
  console.log("drop");
  this.className = "empty";
  this.appendChild(fill);
}