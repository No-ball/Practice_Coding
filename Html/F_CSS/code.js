var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

addEventListener("mousemove", event =>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function randomIntFromRange(start, end){
    var Answer = Math.random();
    Answer *= (end - start);
    Answer += start;
    return Answer | 0;
}

function randomColor(){
    var r = randomIntFromRange(0, 255);
    var g = randomIntFromRange(0, 255);
    var b = randomIntFromRange(0, 255);

    var color = "rgb(" + r + "," + g + "," + b + ")";
    console.log(color);
    return color;
}

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange(50, 120)
    this.lastMouse = {x: x, y: y};

    this.update = () => {
        const lastPoint = {
            x: this.x, y: this.y
        };
        this.radians += this.velocity;
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint);
    }

    this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    }
}

let particles;
function init(){
    particles = [];

    for (let i = 0; i < 100; i++){
        const radius = (Math.random() * 2) + 1;
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor()));
    }
    console.log(particles);
}

function animate(){
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "rgba(255, 255, 255, 0.15";
    c.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
    })
}

init();
animate();