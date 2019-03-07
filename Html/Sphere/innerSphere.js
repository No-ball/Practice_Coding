const innerSphere = new Object3D("inner");

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
            particles.push(0.6 * Math.sin(lon) * Math.cos(lat));
            particles.push(0.6 * Math.sin(lat) * Math.sin(lon));
            particles.push(0.6 * Math.cos(lon));
        }
    }
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let rand = map(i, 0, size, 0, Math.PI);
            rand = Math.abs(Math.cos(rand));
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
    for (let i = 0; i <= size; i++){
        let lon = map(i, 0, size, -Math.PI, Math.PI);
        for (let j = 0; j <= size; j++){
            let lat = map(j, 0, size, -Math.PI/2, Math.PI/2);
            particles.push(0.7 * Math.sin(lon) * Math.cos(lat));
            particles.push(0.7 * Math.sin(lat) * Math.sin(lon));
            particles.push(0.7 * Math.cos(lon));
        }
    }
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let rand = map(Math.abs(j - size/2), 0, size/2, 0.5, 1.5);
            rand = Math.pow(rand,3)/3 - Math.pow(rand,2)/2 + 1/6;
            rand = map(rand, 0, 1/6, 0, 2);
            if (Math.random() < rand) continue;
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[i * size * 3 + j * 3 + k + size*size*3]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[i * size * 3 + (j + 1) * 3 + k  + size*size*3]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[(i + 1) * size * 3 + j * 3 + k + size*size*3]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[(i + 1) * size * 3 + (j + 1) * 3 + k + size*size*3]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[i * size * 3 + (j + 1) * 3 + k + size*size*3]);
            }
            for (let k = 0; k < 3; k++){
                triangleVertex.push(particles[(i + 1) * size * 3 + j * 3 + k + size*size*3]);
            }
        }
    }
    return triangleVertex;
}
innerSphere.vertexData = spherePoint(100);


innerSphere.colorData = [
    1.0, 0, 0,
    0, 1.0, 0,
    0, 0, 1.0
];
innerSphere.vertexShaderText = [`
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec4 vColor;

uniform mat4 matrix;

void main(){
    vColor = vec4(0.5, 0.2, 0, 1) * 1.5;
    gl_Position = matrix * vec4(position, 1);
    gl_PointSize = 0.5;
}
`];

innerSphere.fragmentShaderText = [`

precision mediump float;

varying vec4 vColor;

void main(){
    gl_FragColor = vec4(vColor);
}

`];
