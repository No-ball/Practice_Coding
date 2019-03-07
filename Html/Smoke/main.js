var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

var mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

addEventListener("MSPointerMove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
})


addEventListener("mousemove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
})

function random (start, end){
    let rand = Math.random() * (end-start);
    return rand + start;
}

function Particle (x, y, time, velocity){
    this.x = x;
    this.y = y;
    this.vel = velocity;
    this.time = time;
    this.opacity = 0.25;
    this.xvel = random(1, 2) * velocity;
    this.yvel = -1*(random(3, 5) * velocity);

    this.update = () => {
        this.x += Math.sin(this.xvel) + (mouse.x - this.x) / 100;
        this.y += this.yvel + (mouse.y - this.y) / 100;

        if (this.time != 0){
            this.opacity -= 1/time;
            this.time--;
        }else{
            if (Math.random() < 0.01){
                this.time = random(50, 150);
            }else {
                this.time = random(50, 150);
            }
        }

        if (this.x > x + this.occulate || this.x < x - this.occulate || Math.random() < 0.02){
            this.xvel = -this.xvel;
        }

        if (this.opacity <= 0){
            this.x = x;
            this.y = y;
            this.opacity = 0.5;
            this.occulate = random(0, 400)
        }

        this.color = "rgba(200, 200, 200, " + this.opacity + ")";
        this.draw();
    }

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, 15, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}

let particles;
function init(){
    particles = [];
    for (let i = 0; i < 400; i++){
        let time = random(50, 150);
        let osculate = random(0, 400);
        let velocity = random(1, 2);
        particles.push(new Particle(canvas.width / 2, canvas.height, time, velocity, osculate));
    }
    animate();
}


function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(0, 0, 0, 0.15)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++){
        particles[i].update();
    }
}

init();
