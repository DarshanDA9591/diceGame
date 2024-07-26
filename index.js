var player1 = Math.floor(Math.random()*6 +1);
var player1Img = "diceImgs/dice"+player1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",player1Img);

var player2 = Math.floor(Math.random()*6 +1);
var player2Img = "diceImgs/dice"+player2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",player2Img);

if(player1>player2){
    document.querySelector("h1").innerHTML="You Won";
}else if(player1===player2){
    document.querySelector("h1").innerHTML="Match Drawn";
}else{
    document.querySelector("h1").innerHTML="Computer Won";
}