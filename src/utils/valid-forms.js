import validator from 'validator';

export const validLogin = (username, password) => {
	if (validator.isEmpty(username.trim()) || validator.isEmpty(password.trim()))
		throw new Error('Correo electrónico y contraseña son requeridos');
	return true;
};

export const validUpdateProfile = (email, photo) => {
	if (validator.isEmpty(email.trim()))
		throw new Error('Correo electrónico es requerido');
	else if( !validator.isEmail(email) ){
		throw new Error('Debe de ser un correo electrónico');
	}
	else if(!photo || photo.length < 1){
		throw new Error('Debes de seleccionar una imagen');
	}
	return true;
}

export const validCreateAnalysis = (word, photo, id_student) => {
	if (validator.isEmpty(email.trim()))
		throw new Error('Palabra es requerida');
	else if(!photo || photo.length < 1){
		throw new Error('Debes de seleccionar una imagen');
	}
	else if(!id_student || id_student.length < 1){
		throw new Error('Debes de seleccionar un estudiante');
	}
	return true;
}

export const validCreateStudent = (full_name, email, password, password_confirmation, photo) => {
	if(!photo || photo.length < 1){
		throw new Error('Debes de seleccionar una imagen');
	}
	else if (validator.isEmpty(full_name.trim()))
		throw new Error('Nombre es requerido');
	else if (validator.isEmpty(email.trim()))
		throw new Error('Correo electrónico es requerido');
	else if (!validator.isEmail(email))
		throw new Error('Debe de ser un correo electrónico válido');
	else if (validator.isEmpty(password.trim()))
		throw new Error('Contraseña es requerida');
	else if (validator.isEmpty(password_confirmation.trim()))
		throw new Error('Confirmar contraseña es requerida');
	else if (password !== password_confirmation)
		throw new Error('Las contraseñas no coinciden');
	return true;
}