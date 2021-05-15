const changeColor = document.querySelector(".change-color")
const backGround = document.querySelector(".color h1 span")
//const showColor = document.querySelector(".color h1")

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

let hexColor = "#" ;

function getRandom(num){
    return Math.floor(Math.random() * num)
}

function getHexColor(array) {
  for (let index = 0; index < 6; index++) {
    hexColor += array[getRandom(array.length)];
  }
  return hexColor;
}

changeColor.addEventListener("click" ,function(){
 getHexColor(hex)
 document.documentElement.style.setProperty("--dynamic-color",`${hexColor}`);
 backGround.textContent = `${hexColor}`
  hexColor = "#"
})
