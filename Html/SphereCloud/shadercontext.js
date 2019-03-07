var vertexShaderText = 
[`

precision mediump float;

attribute vec3 position;
//attribute vec3 color;
varying vec3 vColor;

uniform mat4 matrix;

void main(){
    vColor = vec3(position.x, position.z , 1);
    gl_Position = matrix * vec4(position, 1);
    gl_PointSize = 0.5;
}

`].join('\n');

var fragmentShaderText = 
[`

precision mediump float;

varying vec3 vColor;

void main(){
    gl_FragColor = vec4(vColor, 1);
}

`].join('\n');