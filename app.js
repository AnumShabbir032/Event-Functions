// Section 1

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

// Section 2

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

// Section 3

function imgChange(toggle, e) {
    if (toggle == "on") {
    e.src = "./img/bulbOn1.png";
  } else {
    e.src = "./img/bulbOff1.jpg";
  }
}

// Section 4

function paraColors(){
    var container1 = document.getElementById("container1")
    var para =container1.getElementsByTagName("p");
    // var paraColor = prompt("Enter any color.");

    for(var i = 0; i < para.length ; i++){
    var paraColor = prompt(`Enter any color. ${i + 1}`);
     para[i].style.color = paraColor;
     para[i].style.fontSize = "20px"
    }
}

// Section 5

function paraColorChange(){
    var containerFive = document.getElementById("containerFive");
    var firstAndLastPara = containerFive.getElementsByTagName('p');

    var colorName = prompt("Enter color for para 1");
    firstAndLastPara[0].style.color= colorName;
    firstAndLastPara[0].style.fontSize = "20px"
    
    var colorName = prompt("Enter color for para 4");
    firstAndLastPara[3].style.color= colorName;
    firstAndLastPara[3].style.fontSize = "20px"
}