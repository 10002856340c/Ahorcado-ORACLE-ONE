var board= document.getElementById("draw").getContext("2d");
var dibujos=0;


function drawLine(x1,x2,y1,y2){
    board.linewidth=10;
    board.lineCap="round";
    board.lineJoin="round";
    board.strokeStyle= "#0A3871";
    board.beginPath();
    board.moveTo(x1,y1);
    board.lineTo(x2,y2);
    board.stroke();
    board.closePath(); 
    dibujos+=1;

    
}

function drawCircle(x,y,r){
    board.linewidth=10;
    board.lineCap="round";
    board.lineJoin="round";
    board.strokeStyle= "#0A3871";
    board.beginPath();
    board.arc(x, y, r,0, 2* Math.PI);
    board.stroke()
}

function drawText(text,x,y){
    board.font="bold 40px inter";
    board.linewidth=6;
    board.lineCap="round";
    board.lineJoin="round";
    board.fillStyle= "#0A3871";
    
    board.fillText(text,x,y);
}

drawLine(400,800,550,550);
drawLine(500,500,50,550);
drawLine(500,650,50,50);





