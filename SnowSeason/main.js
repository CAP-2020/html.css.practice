let snowContainer = document.querySelector('.snow-container');

// 雪の要素を生成
const createSnow = () => {
  let snow = document.createElement('span');  //spanタグを生成
  snow.className = 'snow';  //span class="snow"が生成される。

  // 雪の大きさ
  minSize = 5;
  maxSize = 10;
  let snowSize = Math.random() * (maxSize - minSize) + minSize;

  snow.style.width = snowSize + "px";
  snow.style.height = snowSize + "px";

  //雪の配置
  snow.style.left = Math.random() * 100 + "%";

  snowContainer.appendChild(snow);
  
  //雪を消す
  setTimeout(() => {
    snow.remove();
  },10000)
}

setInterval(createSnow,200)