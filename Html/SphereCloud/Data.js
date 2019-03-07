function normalize(input) {

}

function spherePointCloud(pointCount){
    let particles = [];
    for (let i = 0; i < pointCount; i++){

        const r = () =>{
            let rand =Math.random() - 0.5;
            return rand;
        }
        const inputPoint = [r(), r(), r()];

        var distance = 0;

        for (var j = 0; j < 3; j++){
            distance += inputPoint[j] * inputPoint[j];
        }
        distance = Math.sqrt(distance);
        for (var j = 0; j < 3; j++){
            inputPoint[j] /= distance;
        }

        particles.push(...inputPoint);

    }
    return particles;
}
var vertexData = spherePointCloud(1e4);
vertexData = new Float32Array(vertexData);

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
colorData = new Float32Array(colorData);