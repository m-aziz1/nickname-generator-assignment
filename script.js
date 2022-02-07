//NICKNAME GENERATOR
//Document Elements
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var outputField = document.getElementById("output-field");
var replaceImg = document.getElementById("replace-img");

//Arrays
var nameList = [
"Glamorous Farquaad", "Obnoxious Enderman", "Relentless Wile E. Coyote",
"All Mighty Spongebob", "Swagger Squidward", "Daffy Duck", "Gangsta Panda", 
"Ramen Noodle", "Cookie Monster", "PB&J Sandwich"];

var displayImg = [
"lord-farquaad.png", "enderman.png", "wile-e.png", "spongebob.png",
"squidward.png", "daffy-duck.png", "panda.png", "ramen-noodles.png",
"cookie-monster.png", "pb-jelly.png",];

//Event Functions
function randName() {
  replaceImg.style.display = "inline";
  //Check for empty input fields
  if (firstName.value === "" || lastName.value === "") {
    outputField.innerHTML = "What's your name?";
    replaceImg.src = "/images/question-mark.png";
    firstName.value === "" ? redBorder(firstName) : redBorder(lastName);
  } else {
    let randIndexName = Math.floor(Math.random() * nameList.length);
    outputField.innerHTML =
      firstName.value +
      "&nbsp" +
      nameList[randIndexName] +
      "&nbsp" +
      lastName.value;
    replaceImg.src = "/images/" + displayImg[randIndexName];
  }
}

function allNames() {
  outputField.innerHTML = "";
  replaceImg.style.display = "none";
  for (i = 0; i < nameList.length; i++) {
    outputField.innerHTML +=
      firstName.value +
      "&nbsp" +
      nameList[i] +
      "&nbsp" +
      lastName.value +
      "<br><br>";
  }
}

function redBorder(field) {
  field.classList.add("empty");
  setTimeout(function () {
    field.classList.remove("empty");
  }, 600);
}
