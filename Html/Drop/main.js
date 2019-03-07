const button = document.querySelector('button');
const background = document.getElementById('background');
const buttonText = document.getElementById('buttonText');
const logo = document.getElementById('logo');
const dropCanvas = document.getElementById('drop');
const cupCanvas = document.getElementById('cup');
const backCanvas = document.getElementById('backView');
backCanvas.height = window.innerHeight;
backCanvas.width = window.innerWidth;
cupCanvas.height = window.innerHeight;
cupCanvas.width = window.innerWidth;
dropCanvas.height = window.innerHeight;
dropCanvas.width = window.innerWidth;
let height = window.innerHeight;
let width = window.innerWidth ;
const dropC = dropCanvas.getContext('2d');
const cupC = cupCanvas.getContext('2d');
const backC = backCanvas.getContext('2d');

var indexPicture = new Image();
indexPicture.src = "index.png";

function buttonDrop(){
    button.style.width = "40%";
    button.style.height = "20%";
    button.style.transition = "750ms";
    button.style.background = "rgba(100, 20, 100, 0.5)";
    button.innerHTML = "";
    button.style.transition = "0ms";
    button.style.left = "50%";
    button.style.top = "50%";
    fill();
    cup();
}
var startOpacity = 0;
var endOpacity = 0;
function fill(){
    let startColor = "rgba(100, 20, 100," + startOpacity + ")"; 
    let endColor = "rgba(100, 20, 100," + endOpacity + ")";
    let colorText = "linear-gradient(" + startColor + "," + endColor + ")";
    button.style.background = colorText;
    if (endOpacity <= 1){
        endOpacity += 0.05;
        setTimeout(fill,50);
    }else if (startOpacity <= 1) {
        endOpacity += 0.05;
        startOpacity += 0.05;
        setTimeout(fill,10);
    }else {
        startOpacity = 0.5;
        endOpacity = 1;
        setTimeout(melt,100);
    }
}
function melt(){
    let startColor = "rgba(100, 20, 100," + startOpacity + ")"; 
    let endColor = "rgba(100, 20, 100," + endOpacity + ")";
    let colorText = "linear-gradient(" + startColor + "," + endColor + ")";
    button.style.background = colorText;
    if (startOpacity > 0.3){
        startOpacity -= 0.05;
        logo.style.transform = "750ms";
        logo.style.opacity = "0";
        setTimeout(melt,50);
    }else if (endOpacity > 0) {
        startOpacity -= 0.05;
        endOpacity -= 0.05;
        animate();
        setTimeout(melt,10);
    }else {
        startOpacity = 1;
        endOpacity = 1;
        button.style.visibility = "hidden";
    }
}

function Drop(){
    this.scale = 2;
    this.y = 0;
    this.yvel = 0.1;
    
    this.update = () => {
        if (this.scale <= 20){
            this.scale += 0.5;
        }else {
            this.y += this.yvel;
            this.yvel += 0.1;
        }
        this.draw();
    }

    this.draw = () => {
        dropC.fillStyle = "rgb(100, 20, 100)";
        dropC.beginPath();
        let t = 0;
        let x = (this.scale * 2*(1 - Math.sin(t)) * Math.cos(t) + 1.5 + width * 0.5);
        let y = (this.scale * 2*(-5/2 * (Math.sin(t) - 1)) + this.y);
        dropC.moveTo(x, y);
        while(t <= 10){
            dropC.strokeStyle = "blue";
            dropC.strokeWidth = "1px";
            t += 0.1;
            x = (this.scale * 2*(1 - Math.sin(t)) * Math.cos(t) + 1.5 + width * 0.5);
            y = (this.scale * 2*(-5/2 * (Math.sin(t) - 1)) + this.y);
            dropC.lineTo(x, y);
            dropC.stroke();
        }
        dropC.closePath();
        dropC.fill();
    }
}
function Cup() {
    this.topScale = 0;
    this.butScale = 0;
    this.waveStart = false;
    this.rise = 0;
    this.waveColor = "rgb(100, 20, 100)";
    this.t = 0;
    
    this.update = () => {
        if (this.waveStart){
            this.wave();
        }      
        this.draw();
    }

    this.draw = () => {
        cupC.beginPath();
        cupC.moveTo((cupCanvas.width * 0.45 - this.topScale),(cupCanvas.height * 0.8 - this.topScale));
        cupC.lineTo((cupCanvas.width * 0.45 - this.topScale),(cupCanvas.height * 0.95 + this.butScale));
        cupC.lineTo((cupCanvas.width * 0.55 + this.topScale),(cupCanvas.height * 0.95 + this.butScale));
        cupC.lineTo((cupCanvas.width * 0.55 + this.topScale),(cupCanvas.height * 0.8 - this.topScale));
        cupC.moveTo((cupCanvas.width * 0.55 + this.topScale), (cupCanvas.height * 0.85 - this.topScale));
        cupC.arc((cupCanvas.width * 0.55 + this.topScale), (cupCanvas.height * 0.875 - this.topScale/1.25), this.topScale/10 + 25, -Math.PI/2, Math.PI/2, false);
        cupC.strokeStyle = "white";
        cupC.lineWidth = this.butScale/2 + 10;
        cupC.stroke();
    }

    this.wave = () => {
        let x = (cupCanvas.width * 0.45 - this.topScale);
        let y = this.rise + (this.butScale/4 + 5) * Math.sin((x - this.t)/(this.butScale/2 + 10)) + (cupCanvas.height * 0.94 + this.butScale);
        cupC.beginPath();
        cupC.moveTo((cupCanvas.width * 0.55 + this.topScale),(cupCanvas.height * 0.95 + this.butScale));
        cupC.lineTo((cupCanvas.width * 0.45 - this.topScale),(cupCanvas.height * 0.95 + this.butScale));
        cupC.lineTo((cupCanvas.width * 0.45 - this.topScale),y);
        while(x <= (cupCanvas.width * 0.55 + this.topScale)){
            cupC.lineTo(x, y);
            x += 0.1;
            y = this.rise + (this.butScale/4 + 5) * Math.sin((x - this.t)/(this.butScale/2 + 10)) + (cupCanvas.height * 0.94 + this.butScale);
        }
        cupC.lineTo((cupCanvas.width * 0.55 + this.topScale),(cupCanvas.height * 0.95 + this.butScale));
        cupC.strokeStyle = "rgb(196, 153, 247)";
        cupC.lineWidth = this.butScale/4 + 5;
        cupC.stroke();
        cupC.closePath();
        cupC.fillStyle = this.waveColor;
        cupC.fill();
    }
}

let drop = new Drop;
let cup = new Cup;
let opacity = 1;
backC.scale(0.65, 0.65);
function animate() {
    dropC.clearRect(0, 0, width, height);
    cupC.clearRect(0, 0 ,cupCanvas.width, cupCanvas.height);
    drop.update();
    cup.update();
    if(drop.y <= dropCanvas.height){
        setTimeout(animate,100);
    }else{
        cup.waveStart = true;
        if(cup.rise >= -30){
            cup.rise -= 5;
            cup.t += 5;
            setTimeout(animate, 250);
        }else if (cup.t <= 500){
            cup.t += 5;
            setTimeout(animate, 250);
        }else if (cup.topScale <= 750) {
            cup.rise -= 10;
            cup.topScale +=10;
            cup.butScale += 1;
            setTimeout(animate, 100);
        }else if (opacity >= 0){
            background.style.background = "rgba(100, 20, 100, 0.1)";
            opacity -= 0.01
            cup.waveColor = "rgba(100, 20, 100," + opacity + ")";
            backC.drawImage(indexPicture, 0, 0);
            setTimeout(animate, 150);
        }else {
            cupC.fillStyle = "white";
            cupC.clearRect(0, 0, 1e5, 1e5);
            window.location.href = "https://www.phy.ncu.edu.tw/wp/";
        }
    }
}
