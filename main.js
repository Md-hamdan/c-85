canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var rover_x=10
var rover_y=10
var rover_width=100
var rover_height=90
var background_image="mar.jpg"
var rover_image="rover.png"

function add() {
    background_imgTag=new Image()
    background_imgTag.onload=uploadBackground
    background_imgTag.src=background_image

    rover_imgTag=new Image()
    rover_imgTag.onload=uploadrover
   rover_imgTag.src=rover_image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e) {
    keypressed=e.keyCode
    console.log(keypressed)
    if(keypressed=='37') {
        left()
    }
    if(keypressed=='38') {
        up()
    }
    if(keypressed=='39') {
        right()
    }
    if(keypressed=='40') {
        down()
    }
}