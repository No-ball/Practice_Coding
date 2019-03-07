// const innerSphere = new Object3D("inner");
// const sphere = new Object3D("outer");


innerSphere.createObject();
sphere.createObject();
coreSphere.createObject();
function Init() {
    sphere.gl.drawArrays(sphere.gl.POINTS, 0, sphere.vertexData.length / 3);
    animate();
}

mat4.translate([0, 0, -25]);
let scale = 99.95;
let scaleTime = 100;
function animate (){
    requestAnimationFrame(animate);

    let matrix = mat4.Create();
    let innermatrix = mat4.Create();
    let corematrix = mat4.Create();

    mat4.YRotate(-10/100);
    mat4.scale(scale);

    matrix = mat4.multiply(mat4.rotateMatrix, mat4.translateMatrix);
    matrix = mat4.multiply(matrix, mat4.perspecMatrix());
    coreSphere.gl.uniformMatrix4fv(coreSphere.uniformLocation.matrix, false, matrix);
    coreSphere.gl.drawArrays(coreSphere.gl.TRIANGLE_FAN, 0, coreSphere.vertexData.length / 3);

    mat4.YRotate(-20/100);

    corematrix = mat4.multiply(mat4.rotateMatrix, mat4.translateMatrix);
    corematrix = mat4.multiply(corematrix, mat4.perspecMatrix());
    innerSphere.gl.uniformMatrix4fv(innerSphere.uniformLocation.matrix, false, corematrix);
    innerSphere.gl.drawArrays(innerSphere.gl.TRIANGLES, 0, innerSphere.vertexData.length / 3);

    innermatrix = mat4.multiply(mat4.rotateMatrix, mat4.translateMatrix);
    innermatrix = mat4.multiply(innermatrix, mat4.perspecMatrix());
    sphere.gl.uniformMatrix4fv(sphere.uniformLocation.matrix, false, innermatrix);
    //sphere.gl.drawArrays(sphere.gl.POINTS, 0, sphere.vertexData.length / 3);
}


Init();