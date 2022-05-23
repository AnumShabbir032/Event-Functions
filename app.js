function changingImg(condition){

var image = document.getElementById("image");

console.log(condition)

if(condition == "show"){
    image.style.display = "block";
}else if(condition == "hide"){
    image.style.display = "none";
} else if (condition == "small") {
    image.style.width = "500px";
    image.style.height = "500px";
} else if (condition == "big") {
    image.style.width = "750px";
    image.style.height = "750px";
} else {
        return;
    }
}

function bgColors(){
    var container = document.getElementById("container");
    var bgColorName = prompt("Enter Background Color");
    container.style.backgroundColor = bgColorName;
    console.log(textbox)
}

function textColors(){
    var heading = document.getElementById("heading");
    var para = document.getElementById("para");
    var textColor = prompt("Enter Text Color");
    heading.style.color = textColor;
    para.style.color = textColor;

}
function imgChange(toggle, e) {
  console.log("helllloo", toggle, e);
  if (toggle == "on") {
    e.src = "./img/bulbOn1.png";
  } else {
    e.src = "./img/bulbOff1.jpg";
  }
}
function paraColors(){
    var para =document.getElementsByTagName("p");
    var paraColor = prompt("Enter any color.");

    for(var i = 0; i < para.length ; i++){
     para[i].style.color = paraColor;
     para[i].style.fontSize = "20px"
    }
}
