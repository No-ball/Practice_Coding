const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gl = canvas.getContext('webgl');

const vertexData = [
    0, 1, 0,
    1, -1, 0,
    -1, -1, 0,
];

var vertexShaderText = 
[`

precision mediump float;

attribute vec3 position;
varying vec4 color;

void main(){
    color = vec4 (position, 1);
    gl_Position = vec4(position, 1);
}

`];

var fragmentShaderText = 
[`

precision mediump float;

varying vec4 color;

void main(){
    gl_FragColor = vec4(color);
}

`];

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderText);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
    console.error("vertex shader!", gl.getShaderInfoLog(vertexShader));
}

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderText);
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)){
    console.error("fragment shader!", gl.getShaderInfoLog(fragmentShader));
}

var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)){
    console.error("linking!", gl.getProgramInfoLog(program));
}

// gl.validateProgram(program);
// if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
//     console.error("validate!", gl.getProgramInfoLog(program));
// }

const positionLocation = gl.getAttribLocation(program, "position");
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);

// gl.clearColor(1, 0, 0, 1);
// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

gl.drawArrays(gl.TRIANGLES, 0, vertexData.length / 3);