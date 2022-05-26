export const validLogin = (username, password) => {
	if (username.length < 1 || password.length < 1)
		throw new Error('Correo electrónico y contraseña son requeridos');
	return true;
};

export const validUpdateProfile = (name, photo) => {
	if (name.length < 1)
		throw new Error('Nombre es requerido');
	else if(!photo || photo.length < 1){
		throw new Error('Debes de seleccionar una imagen');
	}
	return true;
}

export const validCreateAnalysis = (word, photo, id_student) => {
	if (word.length < 1)
		throw new Error('Palabra es requerida');
	else if(!photo || photo.length < 1){
		throw new Error('Debes de seleccionar una imagen');
	}
	else if(!id_student || id_student.length < 1){
		throw new Error('Debes de seleccionar un estudiante');
	}
	return true;
}