var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = "maroon";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(200, 500, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(100, 400, 100, 100);

//console.log(canvas);

//Lnie
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = "darkgreen";
// c.stroke();

// Arc / Circle

// for (var i = 0; i < 3; i ++){ 
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;   
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke(); 
// }


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }

    this.update = function() {
        if (this.x + radius > innerWidth || this.x - radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + radius > innerWidth || this.y - radius < 0){
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++){
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = 10*(Math.random() - 0.5);
    var dy = 10*(Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

animate();
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}