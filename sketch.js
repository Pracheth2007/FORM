var gameState = 0;
var canvas, backgroungimg;
var playerCount;
var database;
var form,player,game;


function setup(){
  database = firebase.database();
  console.log(database);
canvas =   createCanvas(800,500);

game = new Game();
game.getState();
game.start();

}

function draw(){
  
  
}


