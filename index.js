const noButton = document.getElementById("noBtn");
const yesButton = document.getElementById("yesBtn");
const questionStr = document.getElementById("question");
const gifBear = document.getElementById("gifs");
const myList = ["No", "Are you sure??", "Are you sure you chose no?", " Please?", "I will sad", "I will be crying", "PLEASEEE HONEY", "HONEY BUNS SAY YES"];
let yesWidth = 250;
let yesHeight = 115;
let yesPadding = 20;
let size= 50
let padding = 25

function noBtnClickEvent(obj) {
  let randomNum = Math.floor(Math.random() * myList.length);

  if (obj.innerHTML == "No" || myList.includes(obj.innerHTML)) {
    obj.innerHTML = myList[randomNum];
    yesButton.style.width = String(yesWidth + size) + "px"
    yesButton.style.height = String(yesHeight + size) + "px"
    yesButton.style.paddingTop = String(yesPadding + padding) + "px"
    console.log( yesButton.style.width,yesButton.style.height,yesButton.style.paddingTop)
  }
  size = size + 50
  padding = padding + 25
}

function yesBtnClickEvent() {
  gifBear.src = "https://www.shutterstock.com/image-vector/female-emoticon-showing-beckoning-come-260nw-403306744.jpg";
  yesButton.style.width = String(yesWidth) + "px"
  yesButton.style.height = String(yesHeight) + "px"
  yesButton.style.paddingTop = String(yesPadding) + "px"
  yesButton.innerHTML = "YOU LOVE MEEEEEE";
  questionStr.innerHTML = "I'm happy you can be my Valentine. Luv you !";
  noButton.innerHTML = "You such a cutie patootie";
}