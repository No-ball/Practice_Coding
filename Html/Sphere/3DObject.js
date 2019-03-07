function Object3D(id){
    const canvas = document.getElementById(id);
    this.gl = canvas.getContext("webgl");
    this.vertexData = [0];
    this.colorData = [0];
    this.vertexShaderText = [0];
    this.fragmentShaderText = [0];
    this.program = this.gl.createProgram();

    this.uniformLocation = {
        matrix: undefined,
    }

    if (!this.gl) {
        console.error("webgl not supported!");
        return;
    }

    this.createObject = () => {

        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertexData), this.gl.STATIC_DRAW);
    
        this.colorBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.colorData), this.gl.STATIC_DRAW);
    
        this.vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(this.vertexShader, this.vertexShaderText);
        this.gl.compileShader(this.vertexShader);
    
        this.fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(this.fragmentShader, this.fragmentShaderText);
        this.gl.compileShader(this.fragmentShader);
    
        this.gl.attachShader(this.program, this.vertexShader);
        this.gl.attachShader(this.program, this.fragmentShader);
        this.gl.linkProgram(this.program);
    
        this.positionLocation = this.gl.getAttribLocation(this.program, 'position');
        this.gl.enableVertexAttribArray(this.positionLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.vertexAttribPointer(this.positionLocation, 3, this.gl.FLOAT, false, 0, 0);
    
        this.colorLocation = this.gl.getAttribLocation(this.program, 'color');
        this.gl.enableVertexAttribArray(this.colorLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.vertexAttribPointer(this.colorLocation, 3, this.gl.FLOAT, false, 0, 0);

        this.gl.useProgram(this.program);
        this.gl.enable(this.gl.DEPTH_TEST);
    
        this.uniformLocation.matrix = this.gl.getUniformLocation(this.program, 'matrix');
    }    
}