var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

var mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

function random(start, end){
    let rand = Math.random() * (end - start);
    return rand + start;
}
addEventListener("mouseup", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    createBall();
})

addEventListener("touchstart", event => {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
    createBall();
})

function collide(ball, energyDecrease){
    let eD = energyDecrease/100;
    ball.yvel *= -eD;
}

function Ball (x, y, xvel, yvel, radius, opacity){
    this.x = x;
    this.y = y;
    this.yvel = yvel;
    this.xvel = xvel;
    this.yacc = 2;
    this.radius = radius;
    this.color = "black";
    this.collideTime = random(0, 2);
    this.mass = Math.pow(radius, 3);
    this.opacity = opacity;

    this.update = () => {
        this.yvel += this.yacc;
        this.y += this.yvel;
        this.x += this.xvel;
        
        if (this.y >= canvas.height - this.radius) {
            collide(this, 99);
            this.collideTime--;
        }
        if (this.radius < 10){
            this.opacity -= 0.01;
        }

        if (this.x > canvas.width - this.radius || this.x < this.radius){
            this.xvel = -this.xvel;
        }

        let r = 200 * Math.pow(this.radius, 3)/2700;
        let g = 200 - 200 * Math.pow(this.radius, 3)/2700;

        this.color = "rgba(" + r + "," + g + ", 0," + this.opacity + ")";
        this.draw();
    }

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}

let balls = [];

function createBall(x, y, xvel, yvel, radius, opacity) {
    this.radius = radius || random(10, 25);
    this.y = y || mouse.y;
    this.x = x || mouse.x;
    this.xvel = xvel || 0;
    this.yvel = yvel || 0;
    this.opacity = opacity || 1;
    balls.push(new Ball(this.x, this.y, this.xvel, this.yvel, this.radius, this.opacity));
}

function init() {
    animate();
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < balls.length; i++){
        balls[i].update();
        if (balls[i].collideTime <= 0){
            if (balls[i].radius > 5){
                var splitNum =random(1, 2);
                var xvel = random(2, 6);
                let x = balls[i].x;
                let y = balls[i].y;
                let radius = Math.pow(balls[i].mass/splitNum, 1/3);
                for (let j = 0; j < splitNum; j++){
                    xvel /= -2;
                    xvel += j * xvel/splitNum;
                    createBall(x, y, xvel, balls[i].yvel, radius, balls[i].opacity);
                }
            }
            balls.splice(i, 1);
        }
        if (balls[i].y > canvas.height + this.radius || balls[i].opacity <= 0){
            balls.splice(i, 1);
        }
    }
}

init();