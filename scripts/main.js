var compound_transform;

// automatically called whenever any transform changes
function CalculateCompoundTransform(transforms) 
{
    //\matrices in `transforms[i].mat4x4`
    // \note `transform[0]` is first tranform to apply to vertex
    
    // \if only one transform, set compound transform eequal to it
    // \otherwise multiply all matrices together (in proper order)
    // \`compound_transform = Matrix.multiply(...)`
    var transform_matrices = [];
	if (transforms.length == 1) 
	{
		this.compound_transform = transforms[0].mat4x4;
	}
	
	else if (transforms.length == 2) 
	{
		transform_matrices[0] = transforms[0].mat4x4;
		transform_matrices[1] = transforms[1].mat4x4;
		compound_transform = Matrix.multiply(transform_matrices);
	}
	
	else
	{
		var current_compound = transforms[0].mat4x4;
		//transform_matrices[0] = current_compound;
			transform_matrices.push(current_compound);
		for (var i = 0; i < transforms.length-1; i++)
		{			
			///transform_matrices[1] = transforms[i+1];
			transform_matrices.push(transforms[i+1].mat4x4);
			current_compound = Matrix.multiply(transform_matrices); 
			transform_matrices = [];
			//\transform_matrices[0] = current_compound;
			transform_matrices.push(current_compound);
		}
		
		//\transform_matrices[1] = transforms[transforms.length-1];
		transform_matrices.push(transforms[transforms.length-1].mat4x4);
		compound_transform = Matrix.multiply(transform_matrices);
	}
	
    return compound_transform;
}

// automatically called whenever compound transform changes
function CalculateTransformedVertex(vertex) {
    // multiple vertex by compound_transform
    // `final_vertex = Matrix.multiply(...)'
	var to_multiply = []; // matrices to multpiply
	to_multiply[0] = CalculateCompoundTransform(app.transforms);
	//to_multiply[0] = this.CalculateCompoundTransform(app.transforms);
	to_multiply[1] = vertex;
    var final_vertex = Matrix.multiply(to_multiply) ; 

    return final_vertex;
}

// automatically called whenever user modifies a transform (changes type or values)
function ChangeTransform(index, type, values) {
    app.transforms[index].type = type;
    // update `app.transforms[index].mat4x4`
	if (type.toLowerCase() == 'translate') {
		Mat4x4Translate(app.transforms[index].mat4x4, values[0], values[1], values[2]);
		app.transforms[index].mat4x4.data = app.transforms[index].mat4x4.values;
	}
	if(type.toLowerCase() == 'scale') {
		Mat4x4Scale(app.transforms[index].mat4x4, values[0], values[1], values[2]);
		app.transforms[index].mat4x4.data = app.transforms[index].mat4x4.values;
	}
	if (type.toLowerCase() == 'rotate_x') {
		Mat4x4RotateX(app.transforms[index].mat4x4, values[0], values[1], values[2]);
		app.transforms[index].mat4x4.data = app.transforms[index].mat4x4.values;
	}
	if (type.toLowerCase() == 'rotate_y') {
		Mat4x4RotateY(app.transforms[index].mat4x4, values[0], values[1], values[2]);
		app.transforms[index].mat4x4.data = app.transforms[index].mat4x4.values;
	}
	if (type.toLowerCase() == 'rotate_z') {
		Mat4x4RotateZ(app.transforms[index].mat4x4, values[0], values[1], values[2]);
		app.transforms[index].mat4x4.data = app.transforms[index].mat4x4.values;
	}
	
    // recalculate compound transform and tranformed vertex
    app.compound = CalculateCompoundTransform(app.transforms);
    app.final_vertex = CalculateTransformedVertex(app.vertex);
}
