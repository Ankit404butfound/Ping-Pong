var dx = 1;
var dy = 1;
var pdx = 0;
var height = window.innerHeight - (0.06 * window.innerHeight) + 5;
var width = screen.width;
var condn = true;
var rght = true;
var lft = true;
var up = true;
var down = true;

function main(){
    annimate();
    move_paddle();
    document.body.addEventListener('keydown', paddle, true);
    document.body.addEventListener('keyup', pdx_zero, true);
    var touchzonel = document.getElementById("left");
    touchzonel.addEventListener("touchstart", paddle_l, true);
    touchzonel.addEventListener("touchend", pdx_zero, true);
    var touchzoner = document.getElementById("right");
    touchzoner.addEventListener("touchstart", paddle_r, true);
    touchzoner.addEventListener("touchend", pdx_zero, true);
}

function move_ball(){
    var ball = document.getElementById("ball");
    var elem = window.getComputedStyle(ball);
    var cpad = document.getElementById("cpaddle");
    var left = elem.getPropertyValue("left").replace("px","");
    var bottom = elem.getPropertyValue("bottom").replace("px","")


    balle = document.getElementById("ball");
    paddlee = document.getElementById("paddle");
    by = balle.offsetTop;
    bx = balle.offsetLeft;
    px = paddlee.offsetLeft;
    py = paddlee.offsetTop;

    left = parseInt(left,10);
    bottom = parseInt(bottom,10);

    if (left >= width || left <= 1){
        dx = -1 * dx;
    }


    // else if(){
    //     dx = -1 * dx;
    // }

    else if(bottom >= height-10 && up){
        dy = -1 * dy;
        up = false;
        down = true;
    }

    else if((py-by <= 5 && py-by >= -15) && (px-bx <= 0 && px-bx >= -45) && down){
        dy = -dy;
        down = false;
        up = true;
    }

    else if(bottom <= 10){
        if (condn){
            dx = 0;
            dy = 0;
            ball.style.bottom = 70+"%";
            window.alert("Helo");
            location.reload(true);
            condn = false;
        }
    }


    if (by <= height/2){
        cpad.style.left = (Number(left)+dx-20)+"px";
    }



    ball.style.left = (Number(left)+dx)+"px";
    ball.style.bottom = (Number(bottom)+dy)+"px";
    annimate()
}


function annimate(){
    requestAnimationFrame(move_ball);
}

function move_paddle(){
    var pad = document.getElementById("paddle");
    var elem = window.getComputedStyle(pad);
    var left = elem.getPropertyValue("left").replace("px","");

    paddlee = document.getElementById("paddle");
    px = paddlee.offsetLeft;
    pad.style.left = (Number(left)+pdx)+"px";
    requestAnimationFrame(move_paddle);
}

function paddle(event){
    var but = event.key;
    var paddlee = document.getElementById("paddle");
    px = paddlee.offsetLeft;
    console.log(px, width-50);
    if(px > width+2){
        paddlee.style.left = 0+"px";
    }
    if(px < 20){
        paddlee.style.left = width-2+"px";
    }
    if(but == "ArrowRight"){
            pdx = 10;
    }
    if(but == "ArrowLeft"){
            pdx = -10;
    }




}

function paddle_l(event){
    pdx = -10;
    }

function paddle_r(event){
    pdx = 10;
    }

function pdx_zero(event){
    pdx = 0;
}


// function game_over(){
//     el = document.createElement("div");
//     el.id = "game_over";
//     el.innerHTML = '<button onclick="reload_page()">left</button>'
// }
