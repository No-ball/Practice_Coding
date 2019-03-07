const coreSphere = new Object3D("core");

function map (input, oriStart, oriEnd, tranStart, tranEnd){
    return tranStart + input * (tranEnd - tranStart)/(oriEnd - oriStart);
}

function SpherePoint(size){
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
coreSphere.vertexData = SpherePoint(100);


coreSphere.colorData = [
    1.0, 0, 0,
    0, 1.0, 0,
    0, 0, 1.0
];
coreSphere.vertexShaderText = [`
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec4 vColor;

uniform mat4 matrix;

void main(){
    float px = position.x * position.x;
    float py = position.y * position.y;
    float pz = (1.0 - position.z) * (1.0 - position.z);
    float cos = 1.0 - (px + py + pz) * 0.5;
    vColor = vec4(position.z + 0.8 , 0.1, 0 , 1) * 1.5;
    gl_Position = matrix * vec4(position, 1);
    gl_PointSize = 0.5;
}
`];

coreSphere.fragmentShaderText = [`

precision mediump float;

varying vec4 vColor;

void main(){
    gl_FragColor = vec4(vColor);
}

`];

