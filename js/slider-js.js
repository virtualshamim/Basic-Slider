const images = [
    'images/pic-1.png',
    'images/pic-2.png',
    'images/pic-3.png',
    'images/pic-4.png',
    'images/pic-5.png'
];
const imgElement = document.getElementById('slider-img');
let imgIndex = 0;
setInterval(() => {
   // console.log(imgIndex);
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
   const imgUrl = images[imgIndex];
 //  console.log(imgUrl);
  // console.log(imgElement);
  imgElement.setAttribute('src', imgUrl);
imgIndex++;
}, 2000)