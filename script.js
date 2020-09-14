// Kopplar ihop canvas med variabelnamn 
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
document.getElementById("start").addEventListener("click",startTryckt);

let bodyHeight = 20;
let xled =50;
let yled = 50;

// Ritar en rund boll i canvas
function drawWheelPart(x,y,radius,color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// Ritar en rektangle i canvas
function drawBodyPart(x,y,width,height,color){
    ctx.beginPath();
    ctx.rect(x,y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawBody(x,y){
    //drawBodyPart(20,50,50,bodyHeight,"#0ae92f");
    drawBodyPart(x,y,50,bodyHeight,"#0ae92f");
    drawBodyPart(x+15,y-15,20,15,"#0095DD");
}

function drawWheel(x,y){
    //drawWheelPart(x,70,8,"#ff0000");
    drawWheelPart(x,y,8,"#ff0000");

    //drawWheelPart(x,70,4,"#000000");
    drawWheelPart(x,y,4,"#000000");
}


// Ritar en bil i canvas
function drawCar(x){
    //xled=20;
    //yled=50;

    //Rensa skärmen
    drawBody(x,yled);
    //drawWheel(30);
    drawWheel(x+10,yled+20);
    
    //drawWheel(60);
    drawWheel(x+40,yled+20);
}

let startad = false;

function startTryckt(){
    if(!startad)starta();
}


function starta(){
    
    startad=true;

    let carX = 20;
    
    let game = setInterval(() => {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCar(carX);
        carX+=2;
    
    
        if(carX>canvas.width)clearInterval(game);
    
    }, 20);


}



