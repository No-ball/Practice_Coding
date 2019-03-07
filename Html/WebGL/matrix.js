function setMatrix(){
    let mat = [];
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++){
            if (i == j){
                mat[i * 4 + j] = 1;
            }else{
                mat[i * 4 + j] = 0;
            }
        }
    }
    return mat;
}

function transport(matA, matB){
    let matans = setMatrix();
    for (let i = 0; i < 4; i ++){
        for (let j = 0; j < 4; j++){
            if (i == j){
                matans[i * 4 + j] = 0;
            }
            for (let k = 0; k < 4; k++){
                matans[i * 4 + j] += matA[i * 4 + k] * matB[k * 4 + j];
            } 
        }
    }
    return matans;
}

function Matrix(){
    this.matrix = setMatrix();
    this.movetransmatrixs = [];
    this.rotatetransmatrixs = [];
    this.original = [0, 0, 0];

    this.perspectmatrix = setMatrix();
    let fov = 60;
    fov = 1 / (Math.tan( (fov/2) * (Math.PI/180) ) );
    let f = 1e4;
    let n = 1e-4;
    this.perspectmatrix[0 * 4 + 0] = fov;
    this.perspectmatrix[1 * 4 + 1] = fov;
    this.perspectmatrix[2 * 4 + 2] = -f / (f-n);
    this.perspectmatrix[3 * 4 + 3] = 0;
    this.perspectmatrix[3 * 4 + 2] = -(f*n) / (f-n);
    this.perspectmatrix[2 * 4 + 3] = -1;

    this.move = distance => {
        for (let i = 0; i < distance.length; i++){
            let newmatrix = setMatrix();
            newmatrix[3 * 4 + i] += distance[i] / 100
            this.movetransmatrixs.push(newmatrix);
        }
    }

    this.scale = percent => {
        percent /= 100;
        let newmatrix = setMatrix();
        for (let i = 0; i < 3; i++){
            newmatrix[i * 4 + i] *= percent;
        }
        this.rotatetransmatrixs.push(newmatrix);
    }

    this.Xrotate = degree => {
        degree *= Math.PI/180;
        let newmatrix = setMatrix();
        newmatrix[1 * 4 + 1] = Math.cos(degree);
        newmatrix[2 * 4 + 2] = Math.cos(degree);
        newmatrix[1 * 4 + 2] = -Math.sin(degree);
        newmatrix[2 * 4 + 1] = Math.sin(degree);
        this.rotatetransmatrixs.push(newmatrix);
    }
    this.Yrotate = degree => {
        degree *= Math.PI/180;
        let newmatrix = setMatrix();
        newmatrix[0 * 4 + 0] = Math.cos(degree);
        newmatrix[2 * 4 + 2] = Math.cos(degree);
        newmatrix[2 * 4 + 0] = -Math.sin(degree);
        newmatrix[0 * 4 + 2] = Math.sin(degree);
        this.rotatetransmatrixs.push(newmatrix);
    }
    this.Zrotate = degree => {
        degree *= Math.PI/180;
        let newmatrix = setMatrix();
        newmatrix[0 * 4 + 0] = Math.cos(degree);
        newmatrix[1 * 4 + 1] = Math.cos(degree);
        newmatrix[0 * 4 + 1] = -Math.sin(degree);
        newmatrix[1 * 4 + 0] = Math.sin(degree);
        this.rotatetransmatrixs.push(newmatrix);
    }
    // this.perspective = position => {
    //     this.perspectOn = true;
    //     for (let i = 0; i < 2; i++){
    //         position *= -1;
    //     }
    //     position[2] -= 1;
    //     this.move(position);
    // }
    this.tranMatrix;
    this.update = () => {
        this.tranMatrix = [];
        this.matrix = setMatrix();
        let len = this.rotatetransmatrixs.length;
        for (let i = 0; i < len; i++){
            this.matrix = transport(this.matrix, this.rotatetransmatrixs[i]);
        }
        len = this.movetransmatrixs.length;
        for (let i = 0; i < len; i++){
            this.matrix = transport(this.matrix, this.movetransmatrixs[i]);
        }
        this.tranMatrix = this.matrix;
        this.matrix = new Float32Array(this.matrix);
        this.tranMatrix = new Float32Array(this.tranMatrix);
    }
 }