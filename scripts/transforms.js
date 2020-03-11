// set values of mat4x4 to the identity matrix
function Mat4x4Identity(mat4x4) {
	// Matrix constructor crates new identity matrix
	return new Matrix(4,4);
}

// set values of mat4x4 to the translate matrix
function Mat4x4Translate(mat4x4, tx, ty, tz) {
    mat4x4.value = [[1, 0, 0, tx], [0, 1, 0, ty], [0, 0, 1, tz], [0, 0, 0, 1]];
	mat4x4.data = mat4x4.value;
}

// set values of mat4x4 to the scale matrix
function Mat4x4Scale(mat4x4, sx, sy, sz) {
    mat4x4.value = [[sx, 0, 0, 0], [0, sy, 0, 0], [0, 0, sz, 0], [0, 0, 0, 1]];
	mat4x4.data = mat4x4.value;
}

// set values of mat4x4 to the rotate about x-axis matrix
function Mat4x4RotateX(mat4x4, theta) {
	// THETA NEEDS TO BE IN DEGREES FOR THE ROTATE FUNCTIONS
	// SIN/COS NEED RADIANS 
	var rad = theta * ((Math.PI)/180);
	mat4x4.value = [[1, 0, 0, 0], [0, Math.cos(rad), -1*Math.sin(rad), 0], [0, Math.sin(rad), Math.cos(rad), 0], [0, 0, 0, 1]];
	mat4x4.data = mat4x4.value;
}

// set values of mat4x4 to the rotate about y-axis matrix
function Mat4x4RotateY(mat4x4, theta) {
	var rad = theta * ((Math.PI)/180);
    mat4x4.value = [[Math.cos(rad), 0, Math.sin(rad), 0], [0, 1, 0, 0], [-1*Math.sin(rad), 0, Math.cos(rad), 0], [0, 0, 0, 1]];
	mat4x4.data = mat4x4.value;
}

// set values of mat4x4 to the rotate about z-axis matrix
function Mat4x4RotateZ(mat4x4, theta) {
	rad = theta * ((Math.PI/180));
    mat4x4.value = [[Math.cos(rad), -1*Math.sin(rad), 0, 0], [Math.sin(rad), Math.cos(rad), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
	mat4x4.data = mat4x4.value;
}

// set values of mat4x4 to the shear parallel to the xy-plane matrix
function Mat4x4ShearXY(mat4x4, shx, shy) {
    mat4x4.value = [[1, 0, shx, 0], [0, 1, shy, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
	mat4x4.data = mat4x4.value;
}

// set the x,y,z values of a 3-component vector
function Vector3(vec3, x, y, z) {
    vec3.value = [x, y, z];
}

// set the x,y,z,w values of a 4-component vector
function Vector4(vec3, x, y, z, w) {
    vec3.value = [x, y, z, w];
}
