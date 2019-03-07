const canvas = document.querySelector("canvas");
var gl = canvas.getContext("webgl");

var uniformLocations = {
    matrix: undefined
}

if (!gl){
    alert ("no supporting webgl trying experimental-webgl");
    gl = canvas.getContext("experimental-webgl");
}
if (!gl) {
    alert ("no supporting webgl");
}

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, colorData, gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderText);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderText);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(positionLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

const colorLocation = gl.getAttribLocation(program, 'color');
gl.enableVertexAttribArray(colorLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

uniformLocations.matrix = gl.getUniformLocation(program, 'matrix');



function Init() {
    animate();
}
mat4.translate([0, 0, -25]);
function animate (){
    requestAnimationFrame(animate);
    let matrix = mat4.Create();
    mat4.XRotate(40/100);
    mat4.YRotate(30/100);
    mat4.ZRotate(50/100);
    matrix = mat4.multiply(mat4.rotateMatrix, mat4.translateMatrix);
    matrix = mat4.multiply(matrix, mat4.perspecMatrix());
    gl.uniformMatrix4fv(uniformLocations.matrix, false, matrix);
    gl.drawArrays(gl.POINTS, 0, vertexData.length / 3);
}


Init();