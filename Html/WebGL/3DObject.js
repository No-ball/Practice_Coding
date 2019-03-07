var vertexShaderText = 
[`

precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;

uniform mat4 matrix;

void main(){
    vColor = color;
    gl_Position = matrix * vec4(position, 1);
}

`].join('\n');

var fragmentShaderText = 
[`

precision mediump float;

varying vec3 vColor;

void main(){
    gl_FragColor = vec4(vColor, 1);
}

`].join('\n');

var canvas = document.querySelector('canvas');
var gl = canvas.getContext('webgl');


var vertexData = [

    //top
     1, 1, 1,
     1,-1, 1,
    -1, 1, 1,
    -1, 1, 1,
     1,-1, 1,
    -1,-1, 1,

    //left
    -1, 1, 1,
    -1,-1, 1,
    -1, 1,-1,
    -1, 1,-1,
    -1,-1,-1,
    -1,-1, 1,

    //front
    1, 1, 1,
    1, 1,-1,
    -1, 1, 1,
    -1, 1, 1,
    1, 1,-1,
    -1, 1,-1,

    //bottom
    -1, 1,-1,
    -1,-1,-1,
     1, 1,-1,
     1, 1,-1,
    -1,-1,-1,
     1,-1,-1,

    //right
     1, 1,-1,
     1,-1,-1,
     1, 1, 1,
     1, 1, 1,
     1,-1, 1,
     1,-1,-1,

    //back
     1,-1, 1,
     1,-1,-1,
    -1,-1, 1,
    -1,-1, 1,
     1,-1,-1,
    -1,-1,-1,
];

function randomColor(){
    return [Math.random(),Math.random(),Math.random()];
}

let colorData = [];
for (let face = 0; face < 2; face++){
    let faceColor = randomColor();
    for (let vertex = 0; vertex < 6; vertex++){
        colorData.push(255, 0, 0);
    }
    for (let vertex = 0; vertex < 6; vertex++){
        colorData.push(0, 255, 0);
    }
    for (let vertex = 0; vertex < 6; vertex++){
        colorData.push(0, 0, 255);
    }
}

console.log(colorData.length, vertexData.length);

const transformMatrix = new Matrix;
const program = gl.createProgram();
const uniformLocations = {
    matrix: undefined,
}

var Init = () =>{

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
   
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderText);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderText);
    gl.compileShader(fragmentShader);

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 3 , gl.FLOAT, false, 0, 0);

    const colorLocation = gl.getAttribLocation(program, 'color');
    gl.enableVertexAttribArray(colorLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);
    gl.enable(gl.DEPTH_TEST);
    
    uniformLocations.matrix = gl.getUniformLocation(program, 'matrix');
}