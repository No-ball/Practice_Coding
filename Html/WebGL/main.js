const canvas = document.querySelector("canvas");
var gl = canvas.getContext("webgl");

var uniformLocation = {
    matrix: undefined,
}

let scale = 100;
let dscale = 0.1;
let degree = 30;
let perMatrix = [];
transformMatrix.scale(10);
transformMatrix.move([0, 0, -30]);
function move(){
    let x = document.getElementById('xcord').value;
    let y = document.getElementById('ycord').value;
    let z = document.getElementById('zcord').value;

    transformMatrix.move([x, y, z]);
}
function animate() {
    requestAnimationFrame(animate);
    // transformMatrix.Xrotate(degree/100);
    // transformMatrix.Yrotate(degree/100);
    // transformMatrix.Xrotate(degree/100);
    transformMatrix.update();
    perMatrix = transport(transformMatrix.tranMatrix, transformMatrix.perspectmatrix);
    gl.uniformMatrix4fv(uniformLocations.matrix, false, perMatrix);
    gl.drawArrays(gl.TRIANGLES, 0, vertexData.length / 3);
}
animate();
