let fov = 60;
fov = 1 / (Math.tan( (fov/2) * (Math.PI/180) ) );
let f = 1e4;
let n = 1e-4;

const mat4 = new MATRIX4;

function MATRIX4 () {  
    this.Create = () => {
        let Ans = [];
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                if (i == j){
                    Ans[i * 4 + j] = 1;
                }else {
                    Ans[i * 4 + j] = 0;
                }
            }
        }
        return new Float32Array(Ans);
    }

    this.rotateMatrix = this.Create();
    this.translateMatrix = this.Create();
    this.scaleMatrix = this.Create();

    this.XRotate = degree => {
        let tempMatrix = this.Create();
        degree *= Math.PI/180;
        tempMatrix[1 * 4 + 1] = Math.cos(degree);
        tempMatrix[2 * 4 + 2] = Math.cos(degree);
        tempMatrix[1 * 4 + 2] = -Math.sin(degree);
        tempMatrix[2 * 4 + 1] = Math.sin(degree);
        this.rotateMatrix = this.multiply(this.rotateMatrix, tempMatrix);
    }
    this.YRotate = degree => {
        let tempMatrix = this.Create();
        degree *= Math.PI/180;
        tempMatrix[0 * 4 + 0] = Math.cos(degree);
        tempMatrix[2 * 4 + 2] = Math.cos(degree);
        tempMatrix[2 * 4 + 0] = -Math.sin(degree);
        tempMatrix[0 * 4 + 2] = Math.sin(degree);
        this.rotateMatrix = this.multiply(this.rotateMatrix, tempMatrix);
    }
    this.ZRotate = degree => {
        degree *= Math.PI/180;
        let tempMatrix = this.Create();
        tempMatrix[0 * 4 + 0] = Math.cos(degree);
        tempMatrix[1 * 4 + 1] = Math.cos(degree);
        tempMatrix[0 * 4 + 1] = -Math.sin(degree);
        tempMatrix[1 * 4 + 0] = Math.sin(degree);
        this.rotateMatrix = this.multiply(this.rotateMatrix, tempMatrix);
    }

    this.multiply = (matA, matB) => {
        let Ans = this.Create();
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                if (i == j){
                    Ans[i * 4 + j] = 0;
                }
                for (let k = 0; k < 4; k++){
                    Ans[i * 4 + j] += matA[i * 4 + k] * matB[k * 4 + j];
                }
            }
        }
        return Ans;
    }
    this.perspecMatrix = () => {
        let tempMatrix = this.Create();
        tempMatrix[0 * 4 + 0] = fov;
        tempMatrix[1 * 4 + 1] = fov;
        tempMatrix[2 * 4 + 2] = -f / (f-n);
        tempMatrix[3 * 4 + 3] = 0;
        tempMatrix[3 * 4 + 2] = -(f*n) / (f-n);
        tempMatrix[2 * 4 + 3] = -1;

        return new Float32Array(tempMatrix);
    }
    this.scale = ratio => {
        let tempMatrix = this.Create();
        ratio /= 100;
        for (let i = 0; i < 3; i++){
            tempMatrix[i * 4 + i] *= ratio;
        }
        this.scaleMatrix = this.multiply(this.scaleMatrix, tempMatrix);
    }

    this.translate =  vector  => {
        if (vector.length != 3){
            console.error("ERROR, translate matrix's vec3");
        }
        let tempMatrix = this.Create();
        for (let i = 0; i < 3; i++){
            tempMatrix[3 * 4 + i] = vector[i] / 10;
        }
        this.translateMatrix = this.multiply(this.translateMatrix, tempMatrix);
    }

    this.clear = () => {
        this.translateMatrix = this.Create();
        this.rotateMatrix = this.Create();
    }
}