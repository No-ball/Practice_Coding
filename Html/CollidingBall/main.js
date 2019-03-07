const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

addEventListener ("mousemove", function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
})

function random(start, end) {
    var rand = Math.random() * (end - start);
    return rand + start;
}

function getDistence (x1, y1, x2, y2){
    let x = (x1-x2) * (x1-x2);
    let y = (y1-y2) * (y1-y2);
    return Math.sqrt(x + y);
}
function Circle (x, y, radius, velocity, color, fillColor, opacity){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xvel = random(velocity-1.5, velocity+1.5);
    this.yvel = random(velocity-1.5, velocity+1.5);
    this.color = color;
    this.opacity = opacity;
    this.fillColor = fillColor;
    this.circleColor;
    this.time = 20;

    this.update = () => {

        if (getDistence(mouse.x, mouse.y, this.x, this.y) <= 50){
            this.xvel += (this.x - mouse.x) / 100;
            this.yvel += (this.y - mouse.y) / 100;
        }

        this.x += this.xvel;
        this.y += this.yvel;

        if (this.opacity != 0){
            if (this.time != 0){
                this.opacity -= 1/20;
                this.time--;
            }
            if (this.time == 0){
                this.time = 20;
            }
        }

        circleColor = "rgba(" + this.fillColor[0] + "," + this.fillColor[1] + "," + this.fillColor[2] + "," + this.opacity + ")";

        if (this.x >= innerWidth - this.radius || this.x < this.radius){
            this.xvel = -this.xvel;
        }
        if (this.y >= innerHeight - this.radius || this.y < this.radius){
            this.yvel = -this.yvel;
        }

        this.draw();
    }
    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = circleColor;
        c.fill();
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();
    }
} 

function Check(time){
    this.time = time;
    if (this.time > 2) return true;
    else false; 
}

let circles = [];

function createCircle(){
    let radius = 20;
    let color = "blue";
    let vel = 0.5;
    let x = random(radius, innerWidth - radius);
    let y = random(radius, innerHeight - radius);

    if (circles.length != 0){
        for (let j = 0; j < circles.length; j++){
            if (getDistence(x, y, circles[j].x, circles[j].y) <= radius + circles[j].radius){
                x = random(radius, canvas.width - radius);
                y = random(radius, canvas.height - radius);

                j = -1;
            }
        }
    }
    circles.push(new Circle(x, y, radius, vel, color, [255, 255, 255], 1));
}

function init(){
    let N = canvas.width*canvas.height / (100*100);
    for (let i = 0; i < N; i++){
        createCircle();
    }

    animate();
}

function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(255, 255, 255, 0.15";
    c.fillRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circles.length; i++){
        for (let j = i + 1; j < circles.length; j++){
            if (getDistence(circles[i].x, circles[i].y, circles[j].x, circles[j].y) <= circles[i].radius + circles[j].radius + 1){
                let t = circles[i].xvel;
                circles[i].xvel = circles[j].xvel;
                circles[j].xvel = t;
                t = circles[i].yvel;
                circles[i].yvel = circles[j].yvel;
                circles[j].yvel = t;
                let r = random(155, 255);
                let g = random(0, 255);
                let b = 0;
                let colors = [r, g, b];
                circles[i].fillColor = colors;
                circles[i].opacity = 1;
                circles[j].fillColor = colors;
                circles[j].opacity = 1;
            }
        }
        circles[i].update();
    }
}

init();
