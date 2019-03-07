function Object3D (identity) {
    this.vertexData = [];
    this.vertexShaderText = [];
    this.fragmentShaderText = [];
    this.uniformLocation = {
        matrix: undefined,
    };

    this.create = () => {
        const canvas = document.getElementById(identity);
        this.gl = canvas.getContext('webgl');
    
        const positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertexData), this.gl.STATIC_DRAW);
    
        const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(vertexShader, this.vertexShaderText);
        this.gl.compileShader(vertexShader);
        if (!this.gl.getShaderParameter(vertexShader, this.gl.COMPILE_STATUS)){
            console.error("vertex shader!", this.gl.getShaderInfoLog(vertexShader));
        }
    
        const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(fragmentShader, this.fragmentShaderText);
        this.gl.compileShader(fragmentShader);
        if (!this.gl.getShaderParameter(fragmentShader, this.gl.COMPILE_STATUS)){
            console.error("fragment!", this.gl.getShaderInfoLog(fragmentShader));
        }
    
        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        
        const positionLocation = this.gl.getAttribLocation(program, 'position')
        this.gl.enableVertexAttribArray(positionLocation);
        this.gl.vertexAttribPointer(positionLocation, 3, this.gl.FLOAT, false, 0, 0);
    
        this.gl.useProgram(program);
        this.gl.enable(this.gl.DEPTH_TEST);

    }

    //this.gl.uniformLocation.matrix = this.gl.getUniformLocation(program, 'matrix');
}