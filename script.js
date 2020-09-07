// Kopplar ihop canvas med variabelnamn 
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Ritar en rund boll i canvas
function drawWheel(x,y,radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}

// Ritar en rektangle i canvas
function drawBody(x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y, width, height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Ritar en bil i canvas
function drawCar(){
      drawBody(20,50,50,10);
      drawWheel(20,50,10)
}

drawCar();