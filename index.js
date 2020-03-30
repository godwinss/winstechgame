/********************************************
*                 BY                       *
*              WINSTECH                    *
********************************************/

var player1 = document.querySelectorAll("img")[0];
var player2 = document.querySelectorAll("img")[1];
var ha = document.querySelector("h1");
var imgs = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var rand1 = Math.floor(Math.random()*imgs.length);
var rand2 = Math.floor(Math.random()*imgs.length);
player1.setAttribute("src", imgs[rand1]);
player2.setAttribute("src", imgs[rand2]);
// or you can use
/*
var rand = Math.floor(Math.random()*6)+1;
var randimg ="images/"+"dice"+rand+".png";
player1.setAttribute("src", randimg);
*/
if (rand1>rand2){
  ha.innerHTML= "Player1 Wins!";
}
else if (rand1<rand2){
  ha.innerHTML="Player2 Wins!";
}
else{
  ha.innerHTML="Draw!";
}
