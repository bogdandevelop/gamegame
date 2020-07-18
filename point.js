var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();
var score=0;
//var touch= ctx.touchControl;
//touch.initTouchControl();


bg.src="bg5.png ";
bird.src="bird4.png ";
fg.src="fon4.png";
pipeUp.src="pipeUp1.png"; 
pipeBottom.src="pipeBottom1.png";

var gap = 90;
//при нажатии кнопки 

document.addEventListener("keydown",moveUp);

function moveUp() {
    yPos-=20;
}
//

var pipe = [];

pipe[0] = {
 x : cvs.width,
 y : 0
}


var score=0;
//позиция птички
var xPos = 10;
var yPos= 150;
var grav= 1;


function draw(){
 ctx.drawImage(bg, 0,0);
 

 for(var i=0; i< pipe.length; i++){
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x , pipe[i].y + pipeUp.height+ gap);

    pipe[i].x--; 

if(pipe[i].x==42){
    pipe.push({
    x:cvs.width,
    y: Math.floor(Math.random()*pipeUp.height)- pipeUp.height  
    })
}
ctx.fillText("Рахкнок"+score,10, cvs.height-20);
 
if(xPos+bird.width>=pipe[i].x
     && xPos<=pipe[i].x+pipeUp.width
     &&(yPos<=pipe[i].y+ pipeUp.height
        || yPos+bird.height>= pipe[i].y+pipeUp.height+gap) || yPos+bird.height>=cvs.height-fg.height){
            Location.reload(); //перезапуск сторінки
        }

        if(pipe[i].x==5){
        score++;    
        }
        
         
        
        

 }
 ctx.drawImage(fg, 0, cvs.height-fg.height);
 ctx.drawImage(bird, xPos,yPos );
  yPos+= grav; 

ctx.fillStyle="#000";
ctx.font="24px Verdan";

ctx.fillText("Рахкнок"+score,10, cvs.height-20);


  requestAnimationFrame(draw);


 
 



  

}

pipeBottom.onload = draw;
 