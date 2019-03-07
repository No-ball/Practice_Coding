const Rise = new Object3D("rise");

function map (N, start, end, oStart, oEnd){
    return N * (end - start)/(oEnd - oStart) + start;
}

let particals = [];
let vertex = [];

function pushVertex (index){
    for (let k = 0; k < 3; k++){
        vertex.push(particals[index + k]);
    }
}

function Cyclone (number) {
    for (let i = 0; i < number/10; i++){
        for (let j = 0; j < number; j++){
            let ang = map(j, 0, Math.PI*2, 0, number);
            particals.push(Math.cos(ang));
            particals.push(Math.sin(ang));
        }
        particals.push(i);
    }
    for (let i = 0; i < number/10; i ++){
        for (let j = 0; j < number; j ++){
            pushVertex(i * number + j);
            pushVertex(i * number + j + 1);
            pushVertex((i + 1) * number + j);
            pushVertex((i + 1) * number + j + 1);
            pushVertex(i * number + j + 1);
        }
    }
    return vertex;
}

Rise.vertexData = [1, 1, 1];

Rise.vertexShaderText = [`

    precision mediump float;

    attribute vec3 position;

    varying vec4 color;

    void main(){
        gl_Position = vec4(position, 1);
    }
`]

Rise.fragmentShaderText = [`
    precision mediump float;

    varying vec4 color;

    void main (){
        gl_FragColor = vec4(color);
    }
`]

Rise.create();