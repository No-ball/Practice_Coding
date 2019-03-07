const sphere = new Object3D("outer");

function map (input, oriStart, oriEnd, tranStart, tranEnd){
    return tranStart + input * (tranEnd - tranStart)/(oriEnd - oriStart);
}

function spherePoint(size){
    let particles = [];
    let triangleVertex = [];
    for (let i = 0; i <= size; i++){
        let lon = map(i, 0, size, -Math.PI, Math.PI);
        for (let j = 0; j <= size; j++){
            let lat = map(j, 0, size, -Math.PI/2, Math.PI/2);
            particles.push(0.65 * Math.sin(lon) * Math.cos(lat));
            particles.push(0.65 * Math.sin(lat) * Math.sin(lon));
            particles.push(0.65 * Math.cos(lon));
        }
    }
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[i * size * 3 + j * 3 + k]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[i * size * 3 + (j + 1) * 3 + k]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[(i + 1) * size * 3 + j * 3 + k]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[(i + 1) * size * 3 + (j + 1) * 3 + k]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[i * size * 3 + (j + 1) * 3 + k]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[(i + 1) * size * 3 + j * 3 + k]);
            }
        }
    }
    return triangleVertex;
}
sphere.vertexData = spherePoint(50);


sphere.colorData = [
    1.0, 0, 0,
    0, 1.0, 0,
    0, 0, 1.0
];
sphere.vertexShaderText = [`
precision mediump float;

attribute vec3 position;
varying vec4 vColor;

uniform mat4 matrix;

void main(){
    vec3 color = vec3(1, 0, 0) / 5.0;
    vec4 new_position =  matrix * vec4(position, 1);
    float px = new_position.x * new_position.x;
    float py = new_position.y * new_position.y;
    float pz = (1.0 - new_position.z) * (1.0 - new_position.z);
    float cos = 1.0 - (px + py + pz) * 0.5;
    //vColor = vec4(color, 0.5) * (1.0 - cos);
    vColor = vec4(0, 0, 0, 1);
    gl_Position = new_position;
    gl_PointSize = 0.5;
}
`];

sphere.fragmentShaderText = [`

precision mediump float;

varying vec4 vColor;

void main(){
    gl_FragColor = vec4(vColor);
}

`];

